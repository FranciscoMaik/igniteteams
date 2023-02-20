import { useState } from "react";

import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import * as S from "./styles";
import { FlatList } from "react-native";

export function Groups() {
  const [groups, setGroups] = useState<Array<string>>([]);

  return (
    <S.ContainerGroups>
      <Header />

      <HighLight title="Turmas" subtitle="jogue com a sua turma"/>

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={(<ListEmpty message="Que tal cadastrar a primeira turma?" />)}
      />

      <Button
        title="Criar nova turma"
      />

    </S.ContainerGroups>
  )
}
