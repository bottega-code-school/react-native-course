import React from "react";
import { View, Text } from "react-native";

interface IPostItemProps {
  post: {
    id: number;
    name: string;
    post_image_url: string;
  };
}

export default (props: IPostItemProps) => {
  const { name } = props.post;

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
