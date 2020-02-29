import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

interface IBottomTabBarProps {
  navigate: (arg: string) => void;
}

const BottomTabBar = (props: IBottomTabBarProps) => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.navigate("Feed")}>
        <Text>Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigate("Search")}>
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigate("PostForm")}>
        <Text>Form</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigate("Account")}>
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

interface IContainerProps {
  children: any;
  navigate: (arg: string) => void;
}

export default (props: IContainerProps) => {
  return (
    <View>
      {props.children}
      <BottomTabBar navigate={props.navigate} />
    </View>
  );
};
