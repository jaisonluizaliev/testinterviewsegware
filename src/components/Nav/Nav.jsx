import React from 'react';
import { ContainerButton } from "../styles/StyledSign";

function Nav({children}) {
  return (
    <ContainerButton>
      {children}
    </ContainerButton>
  );
}

export default Nav;