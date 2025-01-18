import { FC, FormEvent, useState } from "react";
import { StyledForm } from "./styles";

type FormType = {
  sendMessage: (message: string) => void;
  stopTyping: VoidFunction;
  isTyping: boolean;
};

export const MessageForm: FC<FormType> = ({ sendMessage, stopTyping, isTyping }) => {
  const [userMessage, setUserMessage] = useState("");

  const sendMessageHandler = (event: FormEvent) => {
    event.preventDefault();

    sendMessage(userMessage);
    setUserMessage("");
  };

  return (
    <StyledForm className="input-container" onSubmit={sendMessageHandler}>
      <input
        type="text"
        value={userMessage}
        disabled={isTyping}
        onChange={(e) => setUserMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={(event) => (isTyping ? stopTyping() : sendMessageHandler(event))}>
        {isTyping ? "Stop" : "Send"}
      </button>
    </StyledForm>
  );
};
