import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "components/Menu",
};

const Template = (args) => <Component {...args} />;
export const Default = Template.bind();
Default.args = {
};