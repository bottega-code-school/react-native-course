import React, { useState, useEffect } from "react";
import { View } from "react-native";
import * as SecureStore from "expo-secure-store";

import Container from "../components/layouts/Container";
import api from "../utils/api";
import PostList from "../components/posts/PostList";

interface IFeedScreenProps {
  navigation: {
    navigate: (screenName: string, data?: any) => void;
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

    setIsLoading(true);

    api
      .get("memipedia_posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
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
      <View>
        <PostList
          isLoading={isLoading}
          getPosts={getPosts}
          posts={posts}
          navigate={props.navigation.navigate}
        />
      </View>
    </Container>
  );
};
