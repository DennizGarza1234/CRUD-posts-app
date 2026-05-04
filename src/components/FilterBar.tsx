import { TextInput } from "react-native";

export default function FilterBar({ setUserId }: any) {
  return (
    <TextInput
      placeholder="Filter by User ID"
      keyboardType="numeric"
      onChangeText={(text) =>
        setUserId(text ? Number(text) : undefined)
      }
      style={{ borderWidth: 1, marginBottom: 10 }}
    />
  );
}
