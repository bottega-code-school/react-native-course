import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { highlight, lightGrey } from "../../styles/colors";

interface IButtonProps {
  text: string;
  onPress?: any;
  disabled?: boolean;
}

export default (props: IButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.disabled ? lightGrey : highlight,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
      }}
      {...props}
    >
      <Text
        style={{
          color: props.disabled ? highlight : "white",
          fontSize: 20,
          fontWeight: "700",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
