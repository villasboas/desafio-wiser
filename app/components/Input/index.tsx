import { InputProps } from "./_types";
import { Container, InputHtml, Label } from "./_styles";

const Input: React.FC<InputProps> = function ({ label }) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputHtml />
    </Container>
  );
};

export default Input;
