import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import color from "../config/color";

function AppButton({ title, style, onPress, btnColor = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, style, { backgroundColor: color[btnColor] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: color.white,
  },
});

export default AppButton;
