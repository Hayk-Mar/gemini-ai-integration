import styled from "styled-components";

export const StyledMessages = styled.div`
  display: grid;
  gap: 10px;

  .user-message {
    text-align: right;

    span {
      display: inline-block;
      background: #e5e5e5;
      padding: 7px 18px;
      border-radius: 20px;
    }
  }
`;
