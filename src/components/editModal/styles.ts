import styled from "styled-components";

import { Form as Unform } from "@unform/web";

export const Label = styled.label`
  color: #04bf58;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 5rem;
`;

export const Form = styled(Unform)`
  padding: 38px 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    padding: 6px;
  }
  h1 {
    line-height: 36px;
    margin-bottom: 40px;
  }
  > div + div {
    padding-top: 1.25rem;
  }
`;

export const Button = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;

  button {
    font-weight: 400;
    border-radius: 10px;
    border: 0;
    background: #04bf58;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;

    p {
      margin-left: 10px;
    }
  }
`;

export const GroupInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  > div {
    width: 100%;
  }
  > div + div {
    margin-left: 20px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    > div + div {
      margin-left: 0;
      padding-top: 1.25rem;
    }
  }
`;
