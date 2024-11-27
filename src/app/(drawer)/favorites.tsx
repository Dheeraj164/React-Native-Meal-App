import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "@/src/context/favoritesContext";
import { MEALS } from "@/src/data/dummy_data";
import MealView from "@/src/components/MealView";

const favorites = () => {
  const favcontext = useContext(FavoritesContext);
  const favorites = MEALS.filter((meal) => favcontext.id.includes(meal.id));
  console.log(favorites);
  if (favcontext.id.length === 0) {
    return (
      <View className="flex h-full justify-center items-center">
        <Text className="fonct-bold text-2xl text-white">
          No Favorites List{" "}
        </Text>
      </View>
    );
  }

  return (
    <View className="flex justify-center items-center">
      <FlatList
        data={favorites}
        renderItem={({ item }) => <MealView mealItem={item} />}
      />
    </View>
  );
};

export default favorites;
