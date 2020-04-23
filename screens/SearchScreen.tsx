import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import Container from "../components/layouts/Container";
import api from "../utils/api";
import PostList from "../components/posts/PostList";
import Ionicons from "react-native-vector-icons/Ionicons";

import searchStyles from "../styles/stacks/posts/searchStyles";

const { searchFormContainer, searchTextInput, searchIcon } = searchStyles;

interface ISearchScreenProps {
  navigation: {
    navigate: (arg: string) => void;
  };
}
export default (props: ISearchScreenProps) => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearch = async () => {
    const token = await SecureStore.getItemAsync("memipedia_secure_token");

    const params = {
      query,
    };

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    api
      .get("memipedia_queries", {
        params,
        headers,
      })
      .then((response) => {
        console.log("response from query", response.data);
        setPosts(response.data.memipedia_posts);
      })
      .catch((error) => {
        console.log("Error running query", error);
      });
  };

  const searchBar = (
    <View style={searchFormContainer}>
      <TextInput
        value={query}
        onChangeText={(val) => setQuery(val)}
        placeholder="Search for a meme"
        onSubmitEditing={handleSearch}
        style={searchTextInput}
      />

      <TouchableOpacity style={searchIcon} onPress={handleSearch}>
        <Ionicons name="md-search" color="white" size={30} />
      </TouchableOpacity>
    </View>
  );

  return (
    <Container navigate={props.navigation.navigate}>
      {searchBar}

      <PostList posts={posts} navigate={props.navigation.navigate} />
    </Container>
  );
};
