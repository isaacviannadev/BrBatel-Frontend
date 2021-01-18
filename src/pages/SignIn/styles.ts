import styled, { keyframes } from "styled-components";
import { shade } from "polished";

import SignInBg from "../../assets/sign-in-background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  img {
    width: 360px;
  }

  form {
    margin: 90px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #39a892;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#39a892")};
      }
    }
  }

  > a {
    color: #39a892;
    display: block;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, "#39a892")};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignInBg}) no-repeat center;
  background-size: cover;
  opacity: 0.6;
`;
