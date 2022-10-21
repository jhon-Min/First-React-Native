import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../config/color";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={32} />
      </View>
      <View style={styles.delIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={32}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.dark,
  },
  closeIcon: {
    position: "absolute",
    top: "7%",
    left: 30,
  },
  delIcon: {
    position: "absolute",
    top: "7%",
    right: 30,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
