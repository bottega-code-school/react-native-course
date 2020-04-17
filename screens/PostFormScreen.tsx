import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

import PostImagePicker from "../components/posts/PostImagePicker";
import Button from "../components/helpers/Button";

export default () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [postImage, setPostImage] = useState(null);

  return (
    <View style={{ height: "100%" }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(val) => setName(val)}
      />

      <TextInput
        placeholder="Add meme explanation here"
        value={content}
        onChangeText={(val) => setContent(val)}
        style={{ borderWidth: 2, borderColor: "black" }}
        multiline
      />

      <View style={{ marginTop: 40, height: 100 }}>
        <PostImagePicker setPostImage={setPostImage} />
      </View>

      <Button text="Submit" onPress={() => console.log("Submitting...")} />

      <View>
        <Text>{postImage ? postImage : null}</Text>
      </View>
    </View>
  );
};
