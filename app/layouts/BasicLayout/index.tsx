import { GlobalStyle } from "./_styles";

const BasicLayout: React.FC = function ({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;
