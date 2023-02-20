import * as S from "./styles";

type HighLightProps = {
  title: string;
  subtitle: string;
}

export function HighLight({ subtitle, title }: HighLightProps) {
  return (
      <S.ContainerHighLight>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.ContainerHighLight>
    )
}
