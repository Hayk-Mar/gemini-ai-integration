import { FC } from "react";
import { StyledMessages } from "./styles";

type MessageProps = {
  userMessage: string;
  aiResponse: string;
};

export const Message: FC<MessageProps> = ({ userMessage, aiResponse }) => (
  <StyledMessages>
    <div className="user-message">
      <span>{userMessage}</span>
    </div>
    {aiResponse && <div>{aiResponse}</div>}
  </StyledMessages>
);
