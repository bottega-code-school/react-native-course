import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import textInputStyles from "../../styles/forms/textInputStyles";
const { textFieldWrapper, textField } = textInputStyles;
import authScreenStyles from "../../styles/stacks/auth/authScreenStyles";
import API from "../../utils/api";

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

  const handleSubmit = () => {
    const params = {
      auth: {
        email: email,
        password: password
      }
    };
    API.post("memipedia_user_token", params)
      .then(response => {
        console.log("Response from handle submit", response.data);
      })
      .catch(error => {
        console.log("error getting token", error);
      });
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

      <TouchableOpacity onPress={handleSubmit}>
        <Text style={{ color: "white" }}>{headerText()}</Text>
      </TouchableOpacity>
    </View>
  );
};
