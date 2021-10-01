import React, { useContext, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContext";
import {
  ContainerSign,
  Form,
  Title,
  Input,
  Label,
  Button,
  Info,
  ContainerInputs,
  ContainerButton,
  Error,
} from "../../styles/StyledSign";

function LoginPage() {
  const [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();

  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data) {
    try {
      await signIn(data);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <ContainerSign>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <Title>Text Style</Title>
        <Input type="hidden" name="remember" defaultValue="true" />
        <ContainerInputs>
          <Label htmlFor="email-address">Usuário</Label>
          <Input
            {...register("username")}
            id="username-address"
            name="username"
            type="username"
            autoComplete="username"
            required
            placeholder="Username address"
          />

          <Label htmlFor="password">Senha</Label>
          <Input
            {...register("password")}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
          />
        </ContainerInputs>
        {error && <Error>email ou senha invalidos</Error>}
        <ContainerButton>
          <Button type="submit">Entrar</Button>
        </ContainerButton>
        <Info>
          <Link href="/register">Inscreva-se</Link>
        </Info>
      </Form>
    </ContainerSign>
  );
}

export default LoginPage;
