import React from "react";
import { Text, View, StyleSheet } from "react-native";

function AppText({ children, style, ...otherProps }) {
  return (
    <View>
      <Text style={[styles.text, style]} {...otherProps}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default AppText;
