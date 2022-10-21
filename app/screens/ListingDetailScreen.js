import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

import color from "../config/color";

function ListingDetailScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <View style={styles.cardBody}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.price}>$100</AppText>

        <View style={styles.userContainer}>
          <ListItem
            title="Sayar Mosh"
            subTitle="5 listings"
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: color.light,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  cardBody: {
    padding: 30,
  },
  title: {
    color: color.primary,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 5,
  },
  price: {
    color: color.medium,
    fontSize: 20,
    letterSpacing: 1,
  },
  userContainer: {
    marginTop: 50,
  },
});

export default ListingDetailScreen;
