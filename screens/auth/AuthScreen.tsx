import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import textInputStyles from "../../styles/forms/textInputStyles";
const { textFieldWrapper, textField } = textInputStyles;
import authScreenStyles from "../../styles/stacks/auth/authScreenStyles";

export default () => {
  const [formToShow, setFormToShow] = useState("LOGIN");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <View style={authScreenStyles.container}>
      <Text style={{ color: "white" }}>{headerText()}</Text>

      <View style={textFieldWrapper}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={val => setEmail(val)}
          style={textField}
          autoCapitalize="none"
          spellCheck={false}
        />
      </View>

      <View style={textFieldWrapper}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={val => setPassword(val)}
          style={textField}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity onPress={handleAuthTypePress}>
        <Text style={{ color: "white" }}>{screenTypeText()}</Text>
      </TouchableOpacity>
    </View>
  );
};
