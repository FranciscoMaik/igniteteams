import logoImg from "@assets/logo.png";

import * as S from "./styles";

type HeaderProps = {
  showBackButton?: boolean;
}

export function Header( { showBackButton = false } : HeaderProps) {
  return (
    <S.ContainerHeader>
      {showBackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={logoImg}/>
    </S.ContainerHeader>
  );
}
