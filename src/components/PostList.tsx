import { Button, FlatList, Text, View } from "react-native";
import { useDeletePost, usePosts } from "../hooks/usePosts";

export default function PostList({ userId, onEdit }: any) {
  const { data, isLoading } = usePosts(userId);
  const del = useDeletePost();

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item: any) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10, borderWidth: 1, marginBottom: 5 }}>
          <Text>ID: {item.id}</Text>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>

          <Button title="Edit" onPress={() => onEdit(item)} />

          <Button
            title="Delete"
            onPress={() => del.mutate(item.id)}
          />
        </View>
      )}
    />
  );
}
