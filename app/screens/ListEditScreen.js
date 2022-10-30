import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm";
import { AppFormField, AppSubmit } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  { label: "Furniture", id: 1 },
  { label: "Clothing", id: 2 },
  { label: "Camera", id: 3 },
];

function ListEditScreen(props) {
  const { location } = useLocation();
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />

        <AppFormField
          name="title"
          placeholder="Title"
          maxLength={255}
          style={{ marginBottom: 55 }}
        />

        <AppFormField
          name="price"
          maxLength={8}
          placeholder="Price"
          keyboardType="numeric"
          style={{ marginBottom: 55 }}
        />

        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Categories"
        />

        <AppFormField
          name="description"
          maxLength={255}
          multiline
          numberOfLines={3}
          placeholder="Description"
          style={{ marginBottom: 55 }}
        />

        <AppSubmit title="Save" style={{ marginVertical: 55 }} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListEditScreen;
