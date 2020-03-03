import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default () => {
  return (
    <View style={{ marginTop: 100 }}>
      <Text>Login</Text>

      <TouchableOpacity>
        <Text>Already have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};
