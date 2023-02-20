import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";

import * as S from "./styles";

export function Groups() {
  return (
    <S.ContainerGroups>
      <Header />
      <HighLight title="Turmas" subtitle="jogue com a sua turma"/>
    </S.ContainerGroups>
  )
}
