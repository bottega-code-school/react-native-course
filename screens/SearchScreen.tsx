import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Container from "../components/layouts/Container";

interface ISearchScreenProps {
  navigation: {
    navigate: (arg: string) => void;
  };
}
export default (props: ISearchScreenProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for", query);
  };

  const searchBar = (
    <View>
      <TextInput
        value={query}
        onChangeText={(val) => setQuery(val)}
        placeholderTextColor="white"
        placeholder="Search for a meme"
        onSubmitEditing={handleSearch}
      />

      <TouchableOpacity style={{ marginTop: 20 }} onPress={handleSearch}>
        <Text style={{ color: "white" }}>Search</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Container navigate={props.navigation.navigate}>
      <Text>SearchScreen</Text>
      {searchBar}
    </Container>
  );
};
