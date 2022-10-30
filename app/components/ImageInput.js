import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import color from "../config/color";

function ImageInput({ imageUri, style, onChangeImage }) {
  const reqPermission = async () => {
    let result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permission to access the library!");
  };

  useEffect(() => {
    reqPermission();
  }, []);

  const selectImageHandler = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const toggleHandler = () => {
    if (!imageUri) selectImageHandler();
    else
      Alert.alert("Delete", "Are you sure want to delete!", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
        },
        {
          text: "No",
        },
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={toggleHandler}>
      <View style={[styles.container, style]}>
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 100, height: 100 }}
          />
        ) : (
          <MaterialCommunityIcons
            name="camera"
            size={30}
            color={color.medium}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
    width: 100,
    height: 100,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default ImageInput;
