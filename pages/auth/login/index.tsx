import { AuthLayout } from "app/layouts";
import { Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

import { Button, Input, Text } from "app/components";
import { Card, Form } from "./_styles";
import { LoginFormValues } from "./_types";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("Este campo é obrigatório"),
  password: Yup.string()
    .min(6, "A senha precisa ter mais de 6 caracteres")
    .max(16, "A senha precisa ter menos de 16 caracteres")
    .required("Este campo é obrigatório"),
});

const Login: React.FC = function () {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };
  return (
    <AuthLayout>
      <Card>
        <Formik
          onSubmit={(data) => console.log(data)}
          validationSchema={loginSchema}
          initialValues={initialValues}
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
            />
            <Input name="password" label="senha" placeholder="********" />
            <Button>Entrar</Button>
          </Form>
        </Formik>

        <p>
          Esqueceu seu login ou senha? <br /> Clique <Link href="/">aqui</Link>
        </p>
      </Card>
    </AuthLayout>
  );
};

export default Login;
