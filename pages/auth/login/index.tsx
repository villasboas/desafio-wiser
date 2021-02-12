import { BiBadgeCheck, BiErrorAlt } from "react-icons/bi";
import { AuthLayout } from "app/layouts";
import { connect } from "react-redux";
import { Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

import { Card, ErrorBag, Form, SuccessBag } from "app/pages/auth/login/_styles";
import { LoginFormValues } from "app/pages/auth/login/_types";
import { Button, Input, Text } from "app/components";
import { Creators } from "app/store/ducks/auth";

// login form validation schema
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("Este campo é obrigatório"),
  password: Yup.string()
    .min(6, "A senha precisa ter mais de 6 caracteres")
    .max(16, "A senha precisa ter menos de 16 caracteres")
    .required("Este campo é obrigatório"),
});

const Login: React.FC<any> = function ({ fetching, error, token, logIn }) {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  /**
   * handleLogin
   *
   * handle form submission
   *
   * @param param0
   */
  function handleLogin({ email, password }) {
    logIn(email, password);
  }

  return (
    <AuthLayout>
      <Card>
        <Formik
          validationSchema={loginSchema}
          initialValues={initialValues}
          onSubmit={handleLogin}
        >
          <Form>
            <Text.Title className="mobile-text-center">
              Olá, seja <br />
              bem-vindo!
            </Text.Title>
            <Text.Subtitle>
              Para acessar a plataforma, faça seu login.
            </Text.Subtitle>
            <Input
              name="email"
              label="e-mail"
              placeholder="user.name@mail.com"
              type="email"
            />
            <Input
              name="password"
              label="senha"
              type="password"
              placeholder="********"
            />

            {error && (
              <ErrorBag>
                <BiErrorAlt className="icon" />
                Algo deu errado! Verifique as informações e tente novamente.
              </ErrorBag>
            )}

            {token && (
              <SuccessBag>
                <BiBadgeCheck className="icon" />
                Seu login foi efetuado com sucesso!
              </SuccessBag>
            )}

            <Button showSpinner={fetching} type="submit" text="Entrar" />
          </Form>
        </Formik>

        <p>
          Esqueceu seu login ou senha? <br /> Clique <Link href="/">aqui</Link>
        </p>
      </Card>
    </AuthLayout>
  );
};

function mapStateToProps(state) {
  return {
    fetching: state.auth.fetching,
    error: state.auth.error,
    token: state.auth.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logIn: (email, password) => dispatch(Creators.logIn(email, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
