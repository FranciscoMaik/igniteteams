import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { View } from "react-native";

import { AppRoute } from "./app.routes";

export function Routes() {
  const { COLORS } = useTheme();

  return (
    <View style= {{flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoute />
      </NavigationContainer>
    </View>
  );
}
