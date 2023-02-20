import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type GroupCardProps = TouchableOpacityProps &{
  title: string;
}

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return(
    <S.ContainerGroupCard { ...rest }>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.ContainerGroupCard>
  )
}
