import { useFormikContext } from "formik";
import React from "react";

import AppButton from "../AppButton";

function AppSubmit({ title, style }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} style={style} onPress={handleSubmit} />;
}

export default AppSubmit;
