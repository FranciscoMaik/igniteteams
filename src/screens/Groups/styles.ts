import styled from "styled-components/native";

export const ContainerGroups = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  align-items: center;
  justify-content: center;
`;

export const TextGroup = styled.Text`
  color: #FFFFFF;
  font-size: 32px;
`;
