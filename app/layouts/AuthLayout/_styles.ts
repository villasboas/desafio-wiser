import styled from "styled-components";

export const Container = styled.div`
  grid-template-columns: 55% auto;
  position: relative;
  display: grid;
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 33% auto;
  }

  @media (max-width: 576px) {
    display: flex;
  }
`;

export const Background: any = styled.div`
  background-image: url("/images/gradient.png"), url("/images/background.png");
  background-position: center;
  background-size: cover;

  @media (max-width: 576px) {
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;

export const Content = styled.div`
  background: #faf5ff;

  @media (max-width: 576px) {
    background: transparent;
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;
