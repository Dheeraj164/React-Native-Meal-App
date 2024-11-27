import Ionicons from "@expo/vector-icons/Ionicons";
import { Drawer } from "expo-router/drawer";

// function CustomDrawerContent(props: DrawerContentComponentProps) {
//   return (
//     <DrawerContentScrollView {...props}>
//       {/* <DrawerItem label={"Main"} onPress={() => router.push("(drawer)/main")} /> */}
//       <DrawerItem label={"Home"} onPress={() => router.push("(drawer)/home")} />
//       <DrawerItem
//         label={"favorites"}
//         onPress={() => router.push("(drawer)/favorites")}
//       />
//     </DrawerContentScrollView>
//   );
// }
export default function Layout() {
  return (
    <>
      <Drawer
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#351401" },
          sceneContainerStyle: { backgroundColor: "#3f2f25" },
          headerTintColor: "white",
          drawerContentStyle: { backgroundColor: "#351401" },
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "#3f2f25",
          drawerInactiveTintColor: "white",
        }}>
        <Drawer.Screen
          name="index"
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
            title: "Categories",
          }}
        />

        <Drawer.Screen
          name="favorites"
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
            title: "Favorites",
          }}
        />
      </Drawer>
    </>
  );
}
