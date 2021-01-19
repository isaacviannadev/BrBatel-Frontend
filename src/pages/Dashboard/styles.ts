import { lighten, shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100vw;
  margin: 20px 20px 20px 320px;

  img {
    max-width: 20rem;
    margin-bottom: 25px;
  }
  > p {
    margin-bottom: 60px;
  }
`;

export const ListItems = styled.section`
  background-color: #d8f1ec;
  padding: 30px;
  border-radius: 20px;
  width: 60rem;
  box-shadow: 5px 5px 8px #5b5b5b;
`;

export const ItemInfo = styled.section`
  margin-top: 8px;
  background-color: #71cebb;

  display: flex;
  border-radius: 10px;
  justify-content: space-between;
  transition: 0.2s;

  &:hover {
    background-color: ${shade(0.3, "#71cebb")};
    span {
      color: #fff;
    }
  }

  .negative {
    background-color: #de6161;
    border-radius: 10px;
    padding-left: 4px;
    padding-right: 4px;
    transition: 0.3s;

    &:hover {
      background-color: ${lighten(0.1, "#de6161")};
    }

    span {
      color: #fff;
    }
  }

  header {
    display: flex;
    align-items: center;

    div {
      margin-left: 8px;
      strong {
        margin-left: 20px;

        font-size: 20px;
        color: #3d3d4d;
      }
    }

    button {
      background: transparent;
      border: none;
      display: flex;
      width: 30px;
      height: 30px;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    }

    div.editButton {
      display: flex;

      width: 30px;
      height: 30px;
      align-items: center;
      justify-content: center;
      margin-left: 20px;
      border-radius: 10px;
      border: 1px #3cac96 solid;

      cursor: pointer;

      transition: 0.3s;

      svg {
        color: #fff;
      }
      &:hover {
        background-color: #2d8271;
      }
    }

    div.del {
      border: 1px #de6161 solid;

      svg {
        color: #fff;
      }
      &:hover {
        background-color: #de6161;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 4px;
    margin-bottom: 4px;
    margin-right: 20px;
    text-align: center;

    li {
      & + li {
        margin-left: 20px;
      }
      strong {
        display: block;
        font-size: 16px;
        color: #3d3d4d;
        svg {
          margin-inline: 4px;
          cursor: pointer;
        }
      }
      span {
        display: block;
        margin-top: 4px;
        font-size: 10px;

        color: #6c6c80;
      }
    }
  }
`;
