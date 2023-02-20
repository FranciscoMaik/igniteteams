import * as S from "./styles";

type ListEmpty = {
  message: string;
}

export function ListEmpty({ message }: ListEmpty){
  return (
    <S.ContainerListEmpty>
      <S.Message>
        {message}
      </S.Message>
    </S.ContainerListEmpty>
  )
}
