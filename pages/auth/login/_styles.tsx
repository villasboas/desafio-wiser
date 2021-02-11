import styled from "styled-components";
import { Form as Formik } from "formik";

export const Card = styled.div`
  justify-content: center;
  flex-direction: column;
  margin-left: 112px;
  max-width: 256px;
  display: flex;
  height: 100%;

  p {
    text-align: center;
    line-height: 20px;
    margin-top: 48px;
    color: #989fdb;
    font-size: 14px;

    a {
      color: #989fdb;
    }
  }

  @media (max-width: 768px) {
    max-width: 297px;
    margin: auto;
  }

  @media (max-width: 576px) {
    max-width: 311px;
    margin: auto;
    height: auto;

    p {
      margin-top: 50px;
      color: white;

      a {
        color: white;
      }
    }
  }
`;

export const Form = styled(Formik)`
  @media (max-width: 576px) {
    background: #faf5ff;
    border-radius: 8px;
    position: relative;
    margin-top: 90px;
    padding: 28px;
    padding-bottom: 50px;

    button {
      left: calc(50% - 84px);
      position: absolute;
      box-shadow: none;
      bottom: -24px;
      width: 168px;
    }
  }
`;

export const ErrorBag = styled.div`
  align-items: center;
  margin-top: 20px;
  color: #ff377f;
  font-size: 10px;
  display: flex;

  .icon {
    margin-right: 10px;
    font-size: 26px;
  }
`;

export const SuccessBag = styled.div`
  align-items: center;
  margin-top: 20px;
  color: #4f904d;
  font-size: 10px;
  display: flex;

  .icon {
    margin-right: 10px;
    font-size: 26px;
  }
`;
