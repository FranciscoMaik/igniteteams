import { useState, useCallback } from "react";
import { Alert, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { groupsGetAll } from "@storage/group/groupsGetAll";

import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";

import * as S from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<Array<string>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function loadGroups() {
    try {
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data);
      setIsLoading(false);

    } catch (error) {
      Alert.alert("Turmas", "Não foi possível carregar as turmas!");
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  };

  useFocusEffect(useCallback(() => {
    loadGroups();
  }, []));

  return (
    <S.ContainerGroups>
      <Header />

      <HighLight title="Turmas" subtitle="jogue com a sua turma" />

      {
        isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <GroupCard
                title={item}
                onPress={() => handleOpenGroup(item)}
              />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={(<ListEmpty message="Que tal cadastrar a primeira turma?" />)}
            showsVerticalScrollIndicator={false}
          />
        )
      }

      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      />

    </S.ContainerGroups>
  )
}
