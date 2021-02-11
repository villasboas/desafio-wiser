import { ErrorMessage, Field, FormikContext } from "formik";
import { useContext, useMemo } from "react";

import { Container, Error, Label } from "./_styles";
import { InputProps } from "./_types";

const Input: React.FC<InputProps> = function ({ name, label, ...rest }) {
  const { errors, touched } = useContext(FormikContext);

  /**
   * hasError
   *
   * check if there is an error in this input
   *
   */
  const hasError = useMemo(
    function () {
      return errors[name] && touched[name];
    },
    [errors, touched]
  );

  return (
    <Container className={hasError && "has-error"}>
      <Label htmlFor={name}>{label}</Label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={Error} />
    </Container>
  );
};

export default Input;
