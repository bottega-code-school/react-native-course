import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default props => {
  return (
    <View>
      <Text>Feed screen</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};
