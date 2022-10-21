import React from "react";
import { StyleSheet } from "react-native";

import color from "../config/color";
import AppText from "./AppText";

function AppErrorMessage({ error, visible }) {
  if (!error || !visible) return null;

  return <AppText style={styles.errorText}>{error}</AppText>;
}

const styles = StyleSheet.create({
  errorText: {
    color: color.danger,
  },
});

export default AppErrorMessage;
