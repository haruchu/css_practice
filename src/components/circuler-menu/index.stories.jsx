import React from "react";
import {CirculerMenu} from "./index";

export default {
  component: CirculerMenu,
  title: "components/CirculerMenu",
};

const Template = (args) => <CirculerMenu {...args} />;
export const Default = Template.bind();
Default.args = {
};