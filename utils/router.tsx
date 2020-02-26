import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import FeedScreen from "../screens/FeedScreen";
import SearchScreen from "../screens/SearchScreen";
import AccountScreen from "../screens/AccountScreen";
import PostFormScreen from "../screens/PostFormScreen";

const AppStack = createStackNavigator(
  {
    Feed: FeedScreen,
    Search: SearchScreen,
    Account: AccountScreen,
    PostForm: PostFormScreen
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
