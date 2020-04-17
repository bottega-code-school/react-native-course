import React from "react";
import { StatusBar } from "react-native";

import router from "./utils/router";
import { createAppContainer } from "react-navigation";
import CurrentUserProvider from "./providers/CurrentUserProvider";
const AppContainer = createAppContainer(router);

export default function App() {
  return (
    <CurrentUserProvider>
      <StatusBar barStyle="light-content" />
      <AppContainer />
    </CurrentUserProvider>
  );
}
