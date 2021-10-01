import React from "react";
import { ContainerPages } from "../styles/StyledPages";
import Nav from "../Nav/Nav";
import Link from "next/link";
import { Button } from "../styles/StyledSign";
import {
  ContainerCards,
  Card,
  ContainerUpVotes,
  Text,
  Author,
  ButtonLike,
} from "../styles/StyledTexts";
import { useRouter } from "next/dist/client/router";
import { destroyCookie } from "nookies";
import { reactions } from "../../services/reactions";

function View({ data }) {
  const router = useRouter();

  function handleLogout() {
    destroyCookie(null, "@token/text-style");
    router.push("/");
  }

  function handleLike() {
    if (data.likes) {
      reactions({
        feedId: data.id,
        like: true,
        love: true,
      });
    }
  }

  return (
    <ContainerPages>
      <Nav>
        <Link href="/post">Nova Postagem</Link>
        <Button onClick={handleLogout}>Sair</Button>
      </Nav>
      <ContainerCards>
        {data.length >= 0 &&
          data.map((text) => {
            return (
              <Card key={text.id}>
                <Text>{text.content}</Text>
                <Author>postado por {text.author.username}</Author>
                <ContainerUpVotes>
                  <ButtonLike type="button" onClick={handleLike}>
                    Like {text.likes}
                  </ButtonLike>
                </ContainerUpVotes>
              </Card>
            );
          })}
      </ContainerCards>
    </ContainerPages>
  );
}

export default View;
