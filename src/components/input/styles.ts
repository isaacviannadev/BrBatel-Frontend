import styled, { css } from "styled-components";

import Tooltip from "../tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #256b5e;
  color: #256b5e;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #006f00;
      border-color: #006f00;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #006f00;
    `}



  input {
    flex: 1;
    background-color: transparent;
    border: 0;
    color: #205e53;

    &::placeholder {
      color: #94dacc;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #f4ede8;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
