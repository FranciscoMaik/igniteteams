import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";

import * as S from "./styles";

export function NewGroup(){
  const navigation = useNavigation();

  function handleNew(){
    navigation.navigate("players", {group: "Novo grupo"});
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
