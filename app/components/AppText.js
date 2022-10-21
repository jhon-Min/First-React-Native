import React from "react";
import { Text, View, StyleSheet } from "react-native";

function AppText({ children, style }) {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default AppText;
