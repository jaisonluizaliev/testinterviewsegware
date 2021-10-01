import React, { useEffect, useState } from "react";
import { recoverUserInfo } from "../../../services/auth";
import getToken from "../../../utils/token";
import View from "../../Views/ViewPages";
import { ContainerPages, Loading } from "../../styles/StyledPages";

function ViewPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      recoverUserInfo(token)
        .then((res) => setData(res.data))
        .catch((e) => console.error(e));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  if (!data) {
    return (
      <ContainerPages>
        <Loading>Carregando...</Loading>
      </ContainerPages>
    );
  }

  return <View data={data} />;
}

export default ViewPage;
