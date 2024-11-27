import MealView from "@/src/components/MealView";
import { CATEGORIES, MEALS } from "@/src/data/dummy_data";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { FlatList, Text, View } from "react-native";

const index = () => {
  const Navigator = useNavigation();
  const { catagoryID } = useLocalSearchParams();
  const categoryTitle = CATEGORIES.find(
    (catagory) => catagory.id === catagoryID
  );
  const catagory = MEALS.filter((meal) =>
    meal.categoryIds.includes(catagoryID[0] + catagoryID[1])
  );
  useLayoutEffect(() => {
    Navigator.setOptions({ title: categoryTitle?.title });
  }, []);
  return (
    <View>
      <FlatList
        data={catagory}
        renderItem={({ item }) => <MealView mealItem={item} />}
      />
    </View>
  );
};

export default index;
