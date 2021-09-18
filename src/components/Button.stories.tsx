import React from "react";
import { ButtonProps, Button } from "./Button";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  component: Button,
  title: "Components/Button",
  decorators: [withKnobs],
};

export const primary = () => {
  const props: ButtonProps = {
    label: text("Label", "Click me"),
    disabled: boolean("Disabled", false)
  };

  return (
      <Button {...props} />
  );
};
