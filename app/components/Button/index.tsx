import Loader from "react-loader-spinner";

import { ButtonProps } from "./_types";
import { Container } from "./_styles";

const Button: React.FC<ButtonProps> = function ({ showSpinner, type, text }) {
  return (
    <Container disabled={showSpinner} type={type}>
      {showSpinner ? (
        <Loader type="TailSpin" color="#fff" height={25} width={25} />
      ) : (
        text
      )}
    </Container>
  );
};

export default Button;
