import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import React from "react";

const DrawerNavigator = () => {
  return (
    <GestureHandlerRootView>
      <Drawer>
        <Drawer.Screen name="index" />
        <Drawer.Screen name="favorites" />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
