import styled from "styled-components";

export const Card = styled.div`
  justify-content: center;
  flex-direction: column;
  margin-left: 112px;
  max-width: 256px;
  display: flex;
  height: 100%;

  p {
    text-align: center;
    margin-top: 48px;
    color: #989fdb;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    max-width: 297px;
    margin: auto;
  }
`;
