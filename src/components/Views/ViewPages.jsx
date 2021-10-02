import React, { useState } from "react";
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
  const [likeReaction, setLikeReaction] = useState(false);
  const [reaction, setReaction] = useState({
    feedId: null,
    love: true,
    like: false,
  });
  const [countLike, setCountLike] = useState(0);
  // const [loveReaction, setLoveReaction] = useState(false);
  // const [countLove, setCountLove] = useState(0);

  const router = useRouter();

  function handleLogout() {
    destroyCookie(null, "@token/text-style");
    router.push("/");
  }

  async function handleLike(e) {
    const id = Number(e.target.id);
    // console.log(data[id].like);
    // // setLikeReaction(!likeReaction);
    // // setReaction({ feedId: id, love: true, like: likeReaction });
    // // if (reaction.like) {
    // //   setCountLike(+1);
    // // } else if (!reaction.like) {
    // //   setCountLike(-1);
    // // }

    // console.log(reaction);

    // await reactions(reaction);
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
                  <ButtonLike id={text.id} type="button" onClick={handleLike}>
                    Like {countLike}
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
