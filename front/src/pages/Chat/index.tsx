import { useState, useEffect, useCallback, useRef } from "react";
import { ChatHistory } from "components/chat-history";
import { Message } from "components/message";
import { MessageForm } from "components/message-form";
import { getChatConversationRequest, getUserHistoryRequest, sendMessageRequest } from "services/requests";
import { ChatHistoryType, UserHistoryType } from "types/chat.types";
import { Loading } from "components/loading";
import { v6 as uuid6 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { StyledChat } from "./styles";
import { SidebarIcon } from "components/icons/sidebar-icon";

export const Chat = () => {
  const [userHistory, setUserHistory] = useState<UserHistoryType[]>([]);
  const [conversationHistory, setConversationHistory] = useState<ChatHistoryType[]>([]);
  const [chatId, setChatId] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [abortController, setAbortController] = useState<AbortController>();
  const params = useParams();
  const navigate = useNavigate();
  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentUserId = localStorage.getItem("userId");
    if (!currentUserId) {
      currentUserId = uuid6();
      localStorage.setItem("userId", currentUserId);
    }
    setUserId(currentUserId);
    fetchUserHistory(currentUserId);
    const currentChatId = params.chatId;
    if (currentChatId) {
      setChatId(currentChatId);
    }
    currentChatId && fetchChatConversation(currentChatId, currentUserId);
  }, []);

  useEffect(() => {
    chatId && userId && fetchChatConversation(chatId, userId);
  }, [chatId]);

  useEffect(() => {
    if (!messageListRef.current) return;

    const observer = new MutationObserver(() => {
      messageListRef.current?.scrollTo(0, messageListRef.current.scrollHeight);
    });
    observer.observe(messageListRef.current, { childList: true });

    return () => observer.disconnect();
  }, []);

  const fetchUserHistory = async (userId: string) => {
    try {
      const response = await getUserHistoryRequest(userId);
      setUserHistory(response);
    } catch (error) {
      console.error("Error fetching user history:", error);
    }
  };

  const fetchChatConversation = async (chatId: string, userId: string) => {
    try {
      const response = await getChatConversationRequest(chatId, userId);
      setConversationHistory(response);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  const sendMessage = useCallback(
    async (userMessage: string) => {
      if (!userMessage.trim()) return;
      const controller = new AbortController();
      setAbortController(controller);
      setIsTyping(true);
      try {
        const response = await sendMessageRequest(
          {
            userId: userId,
            chatId: chatId,
            message: userMessage,
          },
          controller.signal
        );

        if (!chatId) {
          navigate(`/chat/${response.chatId}`);
          setChatId(response.chatId);
        }

        const { id, user_message, ai_response } = response;

        setConversationHistory((prev) => [...prev, { id, user_message, ai_response }]);
        if (!conversationHistory.length) {
          fetchUserHistory(userId);
        }
      } catch (err: any) {
        console.log(err);
      } finally {
        setIsTyping(false);
      }
    },
    [userId, chatId]
  );

  const stopTyping = useCallback(() => {
    abortController?.abort();
  }, [abortController]);

  const selectChat = useCallback((chatId?: string) => {
    setChatId(chatId || "");
    navigate(chatId ? `/chat/${chatId}` : "/chat");
    !chatId && setConversationHistory([]);
    setOpenSidebar(false);
  }, []);

  return (
    <StyledChat>
      <ChatHistory chats={userHistory} onChatSelect={selectChat} openSidebar={openSidebar} />
      <div
        className="sidebar-icon"
        onClick={() => {
          setOpenSidebar((prev) => !prev);
        }}
      >
        <SidebarIcon />
      </div>
      <div className={`backdrop ${openSidebar ? "open" : ""}`} onClick={() => setOpenSidebar(false)} />
      <div className="message-wrapper">
        <div className="messages-list" ref={messageListRef}>
          {conversationHistory.map((chat) => (
            <Message key={chat.id} userMessage={chat.user_message} aiResponse={chat.ai_response} />
          ))}
          {isTyping && <Loading />}
        </div>
        <MessageForm sendMessage={sendMessage} isTyping={isTyping} stopTyping={stopTyping} />
      </div>
    </StyledChat>
  );
};
