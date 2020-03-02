import React from "react";
import { View } from "react-native";

import BottomTabBar from "../navigation/BottomTabBar";

interface IContainerProps {
  children: any;
  navigate: (arg: string) => void;
}

export default (props: IContainerProps) => {
  return (
    <View style={{ height: "100%" }}>
      {props.children}
      <BottomTabBar navigate={props.navigate} />
    </View>
  );
};
