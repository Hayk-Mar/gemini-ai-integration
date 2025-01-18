import styled from "styled-components";

export const StyledErrorBoundarySplash = styled.div`
  text-align: center;

  .error-info {
    padding: 24px 12px;
    gap: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin: auto;
    width: 600px;
    max-width: 100%;

    .sad-icon {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    p {
      margin: 0;
    }

    svg {
      width: 40px;
      height: 40px;
    }
  }

  .btn {
    background: black;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    padding: 9px 12px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;

    svg {
      width: 18px;
      height: 18px;
    }

    @media (hover: hover) {
      transition: transform ease-out 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
