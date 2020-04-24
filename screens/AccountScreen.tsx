import React, { useContext } from "react";
import { View } from "react-native";
import * as SecureStore from "expo-secure-store";

import CurrentUserContext from "../contexts/CurrentUserContext";
import Button from "../components/helpers/Button";

interface IAccountScreenProps {
  navigation: {
    navigate: (arg: string) => void;
  };
}
export default (props: IAccountScreenProps) => {
  const { setCurrentUser } = useContext(CurrentUserContext);

  const handleSignOut = async () => {
    await SecureStore.deleteItemAsync("memipedia_secure_token");
    setCurrentUser(null);
    props.navigation.navigate("Auth");
  };

  return (
    <View style={{ padding: 15 }}>
      <Button onPress={handleSignOut} text="Sign Out" />
    </View>
  );
};
