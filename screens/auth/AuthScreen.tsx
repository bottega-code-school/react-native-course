import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default () => {
  const [formToShow, setFormToShow] = useState("LOGIN");
  const [email, setEmail] = useState("");

  const screenTypeText = () => {
    if (formToShow === "LOGIN") {
      return "Need an account? Register";
    } else if (formToShow === "REGISTER") {
      return "Already have an account? Login";
    }
  };

  const handleAuthTypePress = () => {
    if (formToShow === "LOGIN") {
      setFormToShow("REGISTER");
    } else if (formToShow === "REGISTER") {
      setFormToShow("LOGIN");
    }
  };

  const headerText = () => {
    if (formToShow === "LOGIN") {
      return "Login";
    } else if (formToShow === "REGISTER") {
      return "Register";
    }
  };

  return (
    <View style={{ marginTop: 100 }}>
      <Text>{headerText()}</Text>

      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={val => setEmail(val)}
        />
      </View>

      <TouchableOpacity onPress={handleAuthTypePress}>
        <Text>{screenTypeText()}</Text>
      </TouchableOpacity>
    </View>
  );
};
