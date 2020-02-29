import React from "react";
import { View, Text } from "react-native";

interface IContainerProps {
  children: any;
}

export default (props: IContainerProps) => {
  return (
    <View>
      <Text>I'm in the container!</Text>

      {props.children}
    </View>
  );
};
