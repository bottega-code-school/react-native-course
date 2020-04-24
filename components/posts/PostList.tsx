import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import PostItem from "./PostItem";
import baseStyles from "../../styles/common/baseStyles";

interface IPostListProps {
  posts: any;
  navigate: (screenName: string, data: any) => void;
  getPosts?: () => void;
  isLoading: boolean;
}

export default (props: IPostListProps) => {
  const handleItemPress = (post) => {
    props.navigate("PostDetail", { post });
  };

  const postsRenderer = () => {
    if (props.isLoading && props.posts.length === 0) {
      return <ActivityIndicator color="white" size="large" />;
    } else if (props.posts.length > 0) {
      return props.posts.map((post) => (
        <TouchableOpacity key={post.id} onPress={() => handleItemPress(post)}>
          <PostItem post={post} />
        </TouchableOpacity>
      ));
    } else {
      return null;
    }
  };

  const handleRefresh = () => {
    if (props.getPosts) {
      props.getPosts();
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={props.isLoading}
          onRefresh={handleRefresh}
          tintColor="white"
          colors={["white"]}
        />
      }
      style={baseStyles.containerWithBottomTabBar}
    >
      {postsRenderer()}
    </ScrollView>
  );
};
