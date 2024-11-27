import { View, Text, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
const IconButton = ({
  icon,
  size,
  color,
  onPress,
}: {
  icon: any;
  size: number;
  color: string;
  onPress: () => any;
}) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;
