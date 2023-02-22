import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { groupCreate } from "@storage/group/groupCreate";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";

import * as S from "./styles";

export function NewGroup(){
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleNew(){
    try {
      await groupCreate(group);
      navigation.navigate("players", { group });

    } catch (error) {
      console.log(error);
    }

  }

  return(
    <S.ContainerNewGroup>
      <Header showBackButton/>

      <S.Content>
        <S.Icon />

        <HighLight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
        />

        <Button
          title="Criar"
          style={{marginTop: 20}}
          onPress={handleNew}
        />

      </S.Content>

    </S.ContainerNewGroup>
  )
}
