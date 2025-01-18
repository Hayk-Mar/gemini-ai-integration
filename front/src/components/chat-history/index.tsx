import { FC } from "react";
import { UserHistoryType } from "types/chat.types";
import { StyledChatHistory } from "./styles";

type Props = {
  chats: UserHistoryType[];
  onChatSelect: (chatId?: string) => void;
  openSidebar: boolean;
};

export const ChatHistory: FC<Props> = ({ chats, onChatSelect, openSidebar }) => {
  return (
    <StyledChatHistory className={openSidebar ? "open" : ""}>
      <h3>Past Conversations</h3>
      <button className="new-conversation-btn" onClick={() => onChatSelect()}>
        New Conversation
      </button>
      {!chats.length ? (
        <p>No chats yet. Start a conversation!</p>
      ) : (
        <div className="history-list">
          {chats.map((chat) => (
            <div className="list-item" key={chat.id} onClick={() => onChatSelect(chat.chat_id)}>
              {chat.user_message.slice(0, 40)}
            </div>
          ))}
        </div>
      )}
    </StyledChatHistory>
  );
};
