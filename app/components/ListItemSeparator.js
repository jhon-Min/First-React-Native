import React from "react";
import { View, StyleSheet } from "react-native";

import color from "../config/color";

function ListItemSeparator() {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: color.light,
  },
});

export default ListItemSeparator;
