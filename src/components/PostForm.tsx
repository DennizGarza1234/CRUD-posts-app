import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { useCreatePost } from "../hooks/usePosts";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPost = useCreatePost();

  return (
    <View style={{ marginBottom: 10 }}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 5 }}
      />

      <TextInput
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        style={{ borderWidth: 1, marginBottom: 5 }}
      />

      <Button
        title="Create Post"
        onPress={() =>
          createPost.mutate({
            title,
            body,
            userId: 1,
          })
        }
      />
    </View>
  );
}
