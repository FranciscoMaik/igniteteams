import * as S from "./styles";

import logoImg from "@assets/logo.png";

export function Header() {
  return (
    <S.ContainerHeader>
      <S.Logo source={logoImg}/>
    </S.ContainerHeader>
  );
}
