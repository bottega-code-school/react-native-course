import React from "react";
import { View, Text } from "react-native";

import PostImagePicker from "../components/posts/PostImagePicker";

export default () => {
  return (
    <View style={{ height: "100%" }}>
      <Text>Post form screen</Text>

      <View style={{ marginTop: 40, height: 100 }}>
        <PostImagePicker />
      </View>
    </View>
  );
};
