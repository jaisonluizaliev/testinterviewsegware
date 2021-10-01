import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form";
import { postContent } from "../../../../services/auth";
import Nav from "../../../Nav/Nav";

import getToken from "../../../../utils/token";
import Link from "next/link";
import { ContainerButton, ContainerSign, Form, Title, Label, TextArea, Button } from "../../../styles/StyledSign";

function ContentPost() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const handlePost = (data) => {
    const token = getToken();
    if (token) {
      postContent(token, data);
    }
    router.push("/view");
  };

  return (
    <ContainerSign>
      <Form onSubmit={handleSubmit(handlePost)}>
        <Nav>
          <ContainerButton>
            <Link href="/view">Home</Link>
          </ContainerButton>
        </Nav>
        <Title>Poste seu texto</Title>
        <Label htmlFor="password">Conteúdo</Label>
        
          <TextArea
            {...register("content")}
            id="content"
            name="content"
            type="content"
            autoComplete="current-content"
            required
            placeholder="escreva o que voce sentir..."
          />
        <ContainerButton>
          <Button>Enviar</Button>
        </ContainerButton>
      </Form>
    </ContainerSign>
  );
}

export default ContentPost;
