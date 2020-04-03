import React, { useEffect, useContext } from "react";
import { View } from "react-native";
import * as SecureStore from "expo-secure-store";

import CurrentUserContext from "../../contexts/CurrentUserContext";

interface IAuthLoadingScreenProps {
  navigation: {
    navigate: (screenName: string) => void;
  };
}

export default (props: IAuthLoadingScreenProps) => {
  const { setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await SecureStore.getItemAsync("memipedia_secure_token");

    if (token) {
      // TODO
      // call API to ensure logged in
    } else {
      setCurrentUser(null);
      props.navigation.navigate("Auth");
    }
  };

  return <View />;
};
