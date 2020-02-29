import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    paddingTop: 15,
    paddingBottom: 15
  }
});

interface IBottomTabBarProps {
  navigate: (arg: string) => void;
}

export default (props: IBottomTabBarProps) => {
  return (
    <View style={styles.container}>
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
