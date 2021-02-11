import { AuthLayout } from "app/layouts";
import Link from "next/link";

import { Button, Input, Text } from "app/components";
import { Card } from "./_styles";

const Login: React.FC = function () {
  return (
    <AuthLayout>
      <Card>
        <Text.Title>
          Olá, seja <br />
          bem-vindo!
        </Text.Title>
        <Text.Subtitle>
          Para acessar a plataforma, faça seu login.
        </Text.Subtitle>
        <Input label="e-mail" />
        <Input label="senha" />
        <Button>Entrar</Button>
        <p>
          Esqueceu seu login ou senha? <br /> Clique <Link href="/">aqui</Link>
        </p>
      </Card>
    </AuthLayout>
  );
};

export default Login;
