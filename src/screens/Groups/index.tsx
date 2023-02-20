import { useState } from "react";

import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";

import * as S from "./styles";
import { FlatList } from "react-native";

export function Groups() {
  const [groups, setGroups] = useState<Array<string>>(["Galera do MSN", "Galera do Trabalho"]);

  return (
    <S.ContainerGroups>
      <Header />

      <HighLight title="Turmas" subtitle="jogue com a sua turma"/>

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />

    </S.ContainerGroups>
  )
}
