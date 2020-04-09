import React, { useState, useEffect } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import * as SecureStore from "expo-secure-store";

import Container from "../components/layouts/Container";
import api from "../utils/api";

interface IFeedScreenProps {
  navigation: {
    navigate: (arg: string) => void;
  };
}
export default (props: IFeedScreenProps) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const token = await SecureStore.getItemAsync("memipedia_secure_token");

    api
      .get("memipedia_posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("res from posts", response.data);
        setPosts(response.data.memipedia_posts);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error from posts", error);
        setIsLoading(false);
      });
  };

  return (
    <Container navigate={props.navigation.navigate}>
      <View style={{ marginTop: 20 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text>{JSON.stringify(posts)}</Text>
        )}
      </View>
    </Container>
  );
};
