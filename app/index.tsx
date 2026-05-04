import { useState } from "react";
import { Text, View } from "react-native";

import EditModal from "../src/components/EditModal";
import FilterBar from "../src/components/FilterBar";
import PostForm from "../src/components/PostForm";
import PostList from "../src/components/PostList";

export default function Index() {
  const [userId, setUserId] = useState<number | undefined>();
  const [selectedPost, setSelectedPost] = useState<any>(null);

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text style={{ fontSize: 22 }}>CRUD Posts App</Text>

      <FilterBar setUserId={setUserId} />

      <PostForm />

      <PostList
        userId={userId}
        onEdit={(post: any) => setSelectedPost(post)}
      />

      <EditModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </View>
  );
}
