import styled from "styled-components";

export const StyledChatHistory = styled.div`
  width: 250px;
  padding: 10px;
  background: #f4f4f4;
  box-shadow: 0 0 15px #a0a0a0;

  @media (max-width: 700px) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
    transition: all ease-out 0.3s;
    z-index: 10;
    box-shadow: none;

    &.open {
      transform: translateX(0);
      box-shadow: 0 0 15px #a0a0a0;
    }
  }

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .new-conversation-btn {
    margin-bottom: 20px;
    background: black;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    color: white;

    @media (hover: hover) {
      transition: all ease-out 0.2s;

      &:hover {
        transform: scale(1.05);
        cursor: pointer;
      }
    }
  }

  .history-list {
    display: grid;
    gap: 5px;
  }

  .list-item {
    cursor: pointer;
    padding: 10px;
    border-radius: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (hover: hover) {
      transition: all ease-out 0.3s;

      &:hover {
        background-color: #e5e5e5;
      }
    }
  }
`;
