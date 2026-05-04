import { useEffect, useState } from "react";
import { Button, Modal, TextInput, View } from "react-native";
import { usePatchPost, useUpdatePost } from "../hooks/usePosts";

export default function EditModal({
  post,
  onClose,
}: {
  post: any;
  onClose: () => void;
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const update = useUpdatePost();
  const patch = usePatchPost();

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  if (!post) return null;

  return (
    <Modal visible={true} animationType="slide">
      <View style={{ padding: 20 }}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={{ borderWidth: 1, marginBottom: 10 }}
        />

        <TextInput
          value={body}
          onChangeText={setBody}
          style={{ borderWidth: 1, marginBottom: 10 }}
        />

        <Button
          title="Save Full Update"
          onPress={() =>
            update.mutate({
              id: post.id,
              title,
              body,
              userId: post.userId,
            })
          }
        />

        <Button
          title="Patch Title Only"
          onPress={() =>
            patch.mutate({
              id: post.id,
              title,
            })
          }
        />

        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
}
