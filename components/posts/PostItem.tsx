import React from "react";
import { View, Text, Dimensions } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";

interface IPostItemProps {
  post: {
    id: number;
    name: string;
    post_image_url: string;
  };
}

export default (props: IPostItemProps) => {
  const { name, post_image_url } = props.post;

  const img = () => {
    return (
      // @ts-ignore
      <AutoHeightImage
        width={Dimensions.get("window").width}
        source={{ uri: post_image_url }}
      />
    );
  };

  return (
    <View>
      {img()}
      <Text>{name}</Text>
    </View>
  );
};
