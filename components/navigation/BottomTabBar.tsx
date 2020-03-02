import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import bottomTabStyles from "../../styles/navigation/bottomTabStyles";

interface IBottomTabBarProps {
  navigate: (arg: string) => void;
}

export default (props: IBottomTabBarProps) => {
  return (
    <View style={bottomTabStyles.container}>
      <TouchableOpacity onPress={() => props.navigate("Feed")}>
        <MaterialCommunityIcons name="newspaper" color="white" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigate("Search")}>
        <Ionicons name="md-search" color="white" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigate("PostForm")}>
        <MaterialCommunityIcons name="plus-circle" color="white" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigate("Account")}>
        <MaterialCommunityIcons name="settings" color="white" size={30} />
      </TouchableOpacity>
    </View>
  );
};
