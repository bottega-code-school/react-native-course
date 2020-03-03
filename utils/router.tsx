import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import FeedScreen from "../screens/FeedScreen";
import SearchScreen from "../screens/SearchScreen";
import AccountScreen from "../screens/AccountScreen";
import PostFormScreen from "../screens/PostFormScreen";
import AuthScreen from "../screens/auth/AuthScreen";

import HeaderLogo from "../components/images/HeaderLogo";

import { dark } from "../styles/colors";

const AppStack = createStackNavigator(
  {
    Feed: FeedScreen,
    Search: SearchScreen,
    Account: AccountScreen,
    PostForm: PostFormScreen
  },
  {
    initialRouteName: "Feed",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: dark
      },
      headerTintColor: "#fff",
      headerTitle: () => <HeaderLogo />
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    initialRouteName: "Auth",
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Auth"
    }
  )
);
