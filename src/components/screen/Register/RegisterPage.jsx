import { Router } from 'next/dist/client/router';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthContext';
import {
  ContainerSign,
  Title,
  Form,
  Button,
  ContainerButton,
  Label,
  Input,
  ContainerInputs,
} from "../../styles/StyledSign";

function RegisterPage() {
  const [error, setError] = useState(null)
  const { signUp } = useContext(AuthContext)
  const {register, handleSubmit} = useForm()

  async function handleSignUp (data) {
    try {
      console.log(data)
      await signUp(data)
      Router.push('/')
    } catch (error) {
      setError(error)
    }
  }


  return (
    <ContainerSign>
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <Title>Registrar Usuario</Title>
        <Input type="hidden" name="remember" defaultValue="true" />
        <ContainerInputs>
          <Label htmlFor="email-address" className="sr-only">
            Usuario
          </Label>
          <Input
            {...register("username")}
            id="username-address"
            name="username"
            type="username"
            autoComplete="username"
            required
            placeholder="Username address"
          />

          <Label htmlFor="password" className="sr-only">
            Senha
          </Label>
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

        <ContainerButton>
          <Button type="submit">Registrar-se</Button>
        </ContainerButton>
        {error && <>Voce Esta Registrado recupere sua senha</>}
      </Form>
    </ContainerSign>
  );
}

export default RegisterPage;