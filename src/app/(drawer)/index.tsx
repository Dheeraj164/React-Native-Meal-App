import { router } from "expo-router";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../../data/dummy_data";
import CategoryList from "../../components/CategoryList";

export default function Index() {
  return (
    <FlatList
      className="flex "
      data={CATEGORIES}
      renderItem={({ item }) => <CategoryList category={item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
