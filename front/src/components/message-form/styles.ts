import styled from "styled-components";

export const StyledForm = styled.form`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  box-shadow: 0 0 5px #dbdbdb;
  background: none;
  overflow: hidden;
  border-radius: 15px;
  border: 1px solid silver;

  @media (max-width: 1000px) {
    width: 80%;
  }

  input {
    flex: 1;
    height: 50px;
    padding: 0 15px;
    border: none;
    background: #f4f4f4;
  }

  button {
    height: 50px;
    padding: 0 15px;
    border: none;
    border-left: 1px solid silver;
    background: #f4f4f4;
    text-transform: uppercase;
    font-family: fantasy;

    @media (hover: hover) {
      transition: all ease-out 0.3s;

      &:hover {
        background: #c5c5c5;
        cursor: pointer;
      }
    }
  }
`;
