import React from "react";
import { View } from "react-native";

import BottomTabBar from "../navigation/BottomTabBar";
import baseStyles from "../../styles/common/baseStyles";

interface IContainerProps {
  children: any;
  navigate: (arg: string) => void;
}

export default (props: IContainerProps) => {
  return (
    <View style={baseStyles.container}>
      {props.children}
      <BottomTabBar navigate={props.navigate} />
    </View>
  );
};
