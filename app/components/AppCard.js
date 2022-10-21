import React from "react";
import { Image, View, StyleSheet } from "react-native";

import color from "../config/color";
import AppText from "./AppText";

function AppCard({ image, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImg} source={image}></Image>
      <View style={styles.cardBody}>
        <AppText children={title} style={styles.title} />
        <AppText children={subTitle} style={styles.subTitle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: color.white,
    marginTop: 30,
    overflow: "hidden",
    borderRadius: 15,
  },
  cardImg: {
    width: "100%",
    height: 200,
  },
  cardBody: {
    padding: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: color.primary,
  },
  subTitle: {
    color: "#555",
    letterSpacing: 1,
    marginTop: 5,
  },
});

export default AppCard;
