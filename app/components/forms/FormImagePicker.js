import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";

import AppErrorMessage from "../AppErrorMessage";
import ImageInputList from "../ImageInputList";

function FormImagePicker({ name }) {
  const { errors, touched, setFieldValue, values } = useFormikContext();

  const addHandler = (uri) => setFieldValue(name, [...values[name], uri]);

  const removeHandler = (uri) =>
    setFieldValue(
      name,
      values[name].filter((img) => uri !== img)
    );

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        addHandler={addHandler}
        removeHandler={removeHandler}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
