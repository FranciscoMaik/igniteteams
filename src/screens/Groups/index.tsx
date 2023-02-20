import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";

import * as S from "./styles";

export function Groups() {
  return (
    <S.ContainerGroups>
      <Header />

      <HighLight title="Turmas" subtitle="jogue com a sua turma"/>

      <GroupCard title="Galera do MSN" />
      <GroupCard title="Galera do MSN" />
      <GroupCard title="Galera do MSN" />
    </S.ContainerGroups>
  )
}
