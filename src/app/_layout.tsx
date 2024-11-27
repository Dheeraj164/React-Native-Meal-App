import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { FavoritesContextProvider } from "../context/favoritesContext";

export default function Layout() {
  return (
    <>
      {/* <StatusBar barStyle="light-content" /> */}
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <Stack
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#351401" },
            contentStyle: { backgroundColor: "#3f2f25" },
            headerTintColor: "white",
          }}>
          <Stack.Screen
            name="(drawer)"
            options={{
              headerTitleAlign: "center",
              title: " Category",
              headerShown: false,
            }}
          />
          {/* <Stack.Screen
          name="main"
          options={{
            headerTitleAlign: "center",
            title: " Category",
            // headerShown: false,
          }}
        /> */}
          <Stack.Screen
            name="[catagoryID]/index"
            options={{
              headerTitleAlign: "center",
              title: " Category",
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="meal/[mealid]"
            options={{
              headerTitleAlign: "center",
              title: " Category",
              // headerShown: false,
            }}
          />
        </Stack>
      </FavoritesContextProvider>
    </>
  );
}
