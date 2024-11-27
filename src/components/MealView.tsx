import { Image, Pressable, Text, View } from "react-native";
import Meal from "../model/meal";
import { router } from "expo-router";

const MealView = ({ mealItem }: { mealItem: Meal }) => {
  return (
    <Pressable
      onPress={() => {
        router.push(`/meal/${mealItem.id}`);
      }}>
      <View className="mt-3 mx-3 mb-2 rounded-xl p-3 bg-red-200 ">
        <Image
          className="rounded-xl"
          style={{ width: "100%", height: 300 }}
          source={{ uri: mealItem.imageUrl }}
        />
        <Text className="text-center font-bold text-xl">{mealItem.title}</Text>
        <View className="flex flex-row justify-around p-3 m-2">
          <Text className="font-bold text-md">{mealItem.duration} min</Text>
          <Text className="font-bold text-md">{mealItem.affordability}</Text>
          <Text className="font-bold text-md">{mealItem.complexity}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MealView;
