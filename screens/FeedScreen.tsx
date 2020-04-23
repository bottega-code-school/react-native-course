import React, { useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as SecureStore from "expo-secure-store";

import Container from "../components/layouts/Container";
import api from "../utils/api";
import PostItem from "../components/posts/PostItem";
import baseStyles from "../styles/common/baseStyles";

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

  const handleItemPress = (post) => {
    props.navigation.navigate("PostDetail", { post });
  };

  return (
    <Container navigate={props.navigation.navigate}>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView style={baseStyles.containerWithBottomTabBar}>
            {posts.map((post) => (
              <TouchableOpacity onPress={() => handleItemPress(post)}>
                <PostItem key={post.id} post={post} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </Container>
  );
};
