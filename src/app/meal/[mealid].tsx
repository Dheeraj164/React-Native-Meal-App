import IconButton from "@/src/components/IconButton";
import { FavoritesContext } from "@/src/context/favoritesContext";
import { MEALS } from "@/src/data/dummy_data";
import Meal from "@/src/model/meal";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const mealDetail = () => {
  const favcontext = useContext(FavoritesContext);
  const Navigator = useNavigation();
  let { mealid } = useLocalSearchParams();
  mealid = mealid.toString();
  const mealInfo = MEALS.filter((meal) => meal.id == mealid);
  const mealObj: Meal = Object.assign({}, ...mealInfo);

  function handleFav() {
    if (favId) {
      favcontext.removeFavorites(mealObj.id);
    } else {
      favcontext.addFavorite(mealObj.id);
    }
  }
  const favId = favcontext.id.includes(mealid);
  useLayoutEffect(() => {
    Navigator.setOptions({
      title: mealObj.title,
      headerRight: () => (
        <>
          <IconButton
            icon={favId ? "star" : "star-outline"}
            size={20}
            color={"white"}
            onPress={handleFav}
          />
        </>
      ),
    });
  }, [Navigator, handleFav]);
  return (
    <View className="p-3 mt-3 mb-2 ">
      <ScrollView>
        <View>
          <Image
            className="rounded-xl"
            style={{ width: "100%", height: 300 }}
            source={{ uri: mealObj.imageUrl }}
          />
          <View className="flex-row p-2  justify-evenly">
            <Text className="text-md text-white">Duration in min</Text>
            <Text className="text-md text-white">Affordability</Text>
            <Text className="text-md text-white">Complexity</Text>
          </View>
          <View className="flex-row p-2 justify-evenly">
            <Text className="text-md text-white">{mealObj.duration} min</Text>
            <Text className="text-md text-white">{mealObj.affordability}</Text>
            <Text className="text-md text-white">{mealObj.complexity}</Text>
          </View>
        </View>

        <View>
          <Text className="text-[#e2b497] mx-4 font-bold text-xl text-center border-b-2 border-b-[#6f4931] ">
            Ingrediants
          </Text>
          {mealObj.ingredients.map((ingredient) => (
            <View
              key={ingredient}
              className="my-1 p-2 bg-[#6f4931] rounded-lg mx-4">
              <Text className="text-center text-md text-[#e2b497]">
                {ingredient}
              </Text>
            </View>
          ))}
        </View>
        <View>
          <Text className="text-[#e2b497] mx-4 font-bold text-xl text-center border-b-2 border-b-[#6f4931]">
            Steps
          </Text>
          {mealObj.steps.map((step) => (
            <View key={step} className="my-1 p-2 bg-[#6f4931] rounded-lg mx-4">
              <Text className="text-center text-md text-[#e2b497]">{step}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default mealDetail;
