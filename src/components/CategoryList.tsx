import React from "react";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Category from "../model/category";
import { router } from "expo-router";
interface categoryProps {
  id: string;
  title: string;
  color: string;
}
const CategoryList = ({ category }: { category: categoryProps }) => {
  return (
    <Pressable
      className="flex-1"
      onPress={() => {
        router.push(`/${category.id}`);
      }}>
      <View
        // style={}
        style={[{ backgroundColor: category.color }, styles.pressableOverflow]}
        className="flex-1 h-40 overflow-hidden p-2 m-3 flex justify-center items-center rounded-lg">
        <Text className="font-bold text-lg">{category.title}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  pressableOverflow: {
    overflow: "hidden",
  },
});
