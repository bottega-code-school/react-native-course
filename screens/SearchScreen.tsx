import React from "react";
import { Text, View } from "react-native";
import Container from "../components/layouts/Container";

interface ISearchScreenProps {
  navigation: {
    navigate: (arg: string) => void;
  };
}
export default (props: ISearchScreenProps) => {
  return (
    <Container navigate={props.navigation.navigate}>
      <Text>SearchScreen</Text>
    </Container>
  );
};
