import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import FeedScreen from "../screens/FeedScreen";
import SearchScreen from "../screens/SearchScreen";

const AppStack = createStackNavigator(
  {
    Feed: FeedScreen,
    Search: SearchScreen
  },
  {
    initialRouteName: "Feed"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack
    },
    {
      initialRouteName: "App"
    }
  )
);
