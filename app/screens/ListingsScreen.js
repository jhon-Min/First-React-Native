import React from "react";
import { FlatList, StyleSheet } from "react-native";
import AppCard from "../components/AppCard";

import Screen from "../components/Screen";
import color from "../config/color";

const items = [
  {
    id: 1,
    name: "Red Jacket For Sale",
    price: "$100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    name: "Couch in great condition",
    price: "$1000",
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AppCard title={item.name} subTitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: color.light,
  },
});

export default ListingsScreen;
