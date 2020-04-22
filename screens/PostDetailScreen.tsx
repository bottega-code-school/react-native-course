import React from "react";
import { View, Text } from "react-native";

interface IPostDetailScreenProps {
  navigation: {
    navigate: any;
    state: {
      params: {
        post: {
          name: string;
          content: string;
          post_image: string;
        };
      };
    };
  };
}

export default (props: IPostDetailScreenProps) => {
  return (
    <View style={{ marginTop: 30 }}>
      <Text>Post detail screen</Text>
    </View>
  );
};
