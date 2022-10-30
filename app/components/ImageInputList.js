import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], addHandler, removeHandler }) {
  const scrollView = useRef();
  return (
    <ScrollView
      ref={scrollView}
      horizontal={true}
      onContentSizeChange={() =>
        scrollView.current.scrollToEnd({ animated: true })
      }
    >
      <View style={styles.container}>
        {imageUris.map((uri) => (
          <ImageInput
            style={{ marginRight: 5 }}
            imageUri={uri}
            key={uri}
            onChangeImage={() => removeHandler(uri)}
          />
        ))}

        <ImageInput onChangeImage={addHandler} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default ImageInputList;
