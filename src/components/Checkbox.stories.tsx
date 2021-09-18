import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  component: Checkbox,
  title: "Components/Checkbox",
  decorators: [withKnobs],
};

export const primary = () => {
  const props: CheckboxProps = {
    id: "checkbox",
    label: text("Label", "This is a checkbox"),
    disabled: boolean("Disabled", false),
  };

  return <Checkbox {...props} />;
};
