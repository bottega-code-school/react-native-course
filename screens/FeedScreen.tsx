import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import CurrentUserContext from "../contexts/CurrentUserContext";

import Container from "../components/layouts/Container";

interface IFeedScreenProps {
  navigation: {
    navigate: (arg: string) => void;
  };
}
export default (props: IFeedScreenProps) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Container navigate={props.navigation.navigate}>
      <Text>Feed screen</Text>
      <View style={{ marginTop: 20 }}>
        <Text>{JSON.stringify(currentUser)}</Text>
      </View>
    </Container>
  );
};
