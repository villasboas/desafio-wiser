import styled from "styled-components";

export const Title = styled.h1`
  line-height: 48px;
  font-weight: 400;
  font-size: 40px;
  color: #383e71;
  margin: 0;

  @media (max-width: 576px) {
    line-height: 32px;
    font-size: 24px;
  }
`;

export const Subtitle = styled.h2`
  line-height: 20px;
  font-weight: 600;
  font-size: 16px;
  color: #989fdb;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export default {
  Title,
  Subtitle,
};
