import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

import color from "../config/color";
import AppText from "./AppText";

function ListItem({
  image,
  ImageComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={color.light} onPress={onPress}>
          <View style={styles.container}>
            {ImageComponent}
            {image && <Image style={styles.listImg} source={image} />}
            <View style={styles.textBox}>
              <AppText>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: color.white,
  },

  listImg: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },

  subTitle: {
    fontSize: 13,
    color: color.medium,
  },

  textBox: {
    marginLeft: 15,
  },
});

export default ListItem;
