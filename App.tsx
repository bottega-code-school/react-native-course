import React from "react";
import { StyleSheet, View } from "react-native";

import FeedScreen from "./screens/FeedScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <FeedScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
