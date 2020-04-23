import React from "react";
import { View, Text, ScrollView } from "react-native";
import PostItem from "../components/posts/PostItem";
import Container from "../components/layouts/Container";

import postItemStyles from "../styles/stacks/posts/postItemStyles";
const { contentWrapper, contentText } = postItemStyles;

interface IPostDetailScreenProps {
  navigation: {
    navigate: any;
    state: {
      params: {
        post: {
          id: number;
          name: string;
          content: string;
          post_image_url: string;
        };
      };
    };
  };
}

export default (props: IPostDetailScreenProps) => {
  const { post } = props.navigation.state.params;
  return (
    <Container navigate={props.navigation.navigate}>
      <ScrollView>
        <PostItem post={post} />

        <View style={contentWrapper}>
          <Text style={contentText}>{post.content}</Text>
        </View>
      </ScrollView>
    </Container>
  );
};
