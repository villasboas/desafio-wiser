import BasicLayout from "app/layouts/BasicLayout";

import { Background, Container, Content } from "./_styles";

const AuthLayout: React.FC = function ({ children }) {
  return (
    <BasicLayout>
      <Container>
        <Background />
        <Content>{children}</Content>
      </Container>
    </BasicLayout>
  );
};

export default AuthLayout;
