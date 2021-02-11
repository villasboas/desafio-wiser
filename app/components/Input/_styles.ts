import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  display: flex;

  input {
    border: 1px solid #989fdb;
    border-radius: 8px;
    flex-grow: 1;
    height: 48px;
    font-size: 10px;
    padding: 0px 10px;
    color: #383e71;
    outline: none;
  }

  &.has-error {
    input {
      border-color: #ff377f;
      color: #ff377f;
    }
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-weight: 400px;
  padding-left: 10px;
  line-height: 30px;
  margin-top: 18px;
  font-size: 10px;
  color: #383e71;
  flex-grow: 1;
`;

export const Error = styled.span`
  padding-left: 20px;
  margin-top: 10px;
  font-size: 10px;
  color: #ff377f;
`;
