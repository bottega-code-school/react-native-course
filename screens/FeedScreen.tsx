import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import Container from "../components/layouts/Container";

interface IFeedScreenProps {
  navigation: {
    navigate: (arg: string) => void;
  };
}
export default (props: IFeedScreenProps) => {
  return (
    <Container navigate={props.navigation.navigate}>
      <Text>Feed screen</Text>
    </Container>
  );
};
