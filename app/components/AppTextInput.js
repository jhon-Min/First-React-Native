import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./Screen";
import color from "../config/color";
import defaultStyle from "../config/defaultStyle";

function AppTextInput({ style, icon, ...otherProps }) {
  return (
    <Screen style={style}>
      <View style={styles.inputContainer}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={color.medium}
            style={styles.iconStyle}
          />
        )}
        <TextInput style={defaultStyle.textStyle} {...otherProps} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: 60,
    backgroundColor: color.light,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    padding: 15,
  },
  iconStyle: { marginRight: 10 },
});

export default AppTextInput;
