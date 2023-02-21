import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

import * as S from "./styles";
import { Filter } from "@components/Filter";

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([]);

  return (
    <S.ContainerPlayers>
      <Header showBackButton />

      <HighLight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <S.Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon icon="add" />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <S.NumbersOfPlayers>
          {players.length}
        </S.NumbersOfPlayers>
      </S.HeaderList>



    </S.ContainerPlayers>
  );
}
