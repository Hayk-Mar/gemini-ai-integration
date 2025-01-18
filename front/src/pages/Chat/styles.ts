import styled from "styled-components";

export const StyledChat = styled.main`
  display: flex;

  .sidebar-icon {
    display: none;
    position: fixed;
    left: 10px;
    top: 10px;
    z-index: 1;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .message-wrapper {
    flex: 1;
    padding: 0 15px;
    height: 100vh;
    overflow: hidden;
    margin: auto;
    position: relative;

    .messages-list {
      display: grid;
      gap: 20px;
      overflow: auto;
      max-height: calc(100% - 80px);
      padding-top: 10px;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  @media (max-width: 700px) {
    .sidebar-icon {
      display: block;
    }

    .message-wrapper {
      padding-top: 40px;
    }

    .backdrop.open {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #00000029;
      z-index: 9;
    }
  }
`;
