import { useFormikContext } from "formik";
import React from "react";
import { View } from "react-native";
import AppErrorMessage from "../AppErrorMessage";
import AppPicker from "../AppPicker";

function AppFormPicker({ name, items, placeholder }) {
  const { errors, touched, setFieldValue, values } = useFormikContext();
  return (
    <View style={{ marginTop: 25 }}>
      <AppPicker
        items={items}
        placeholder={placeholder}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppFormPicker;
