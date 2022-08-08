import { addDecorator } from "@storybook/react";
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from "styled-components";

export const globalDarkStyle = {
  appBaseFontColor: "white",
  navbarBackgroundColor: "#212323",
  basicBackGroundColor: "#313534",
  infoCardBackgroundColor: "#3f4342",
  accentBackgroundColor: "#4a4f4e",
  accentTextColor: "#f5c415",
};

export const globalLightStyle = {
  infoCardBackgroundColor: "#C2C0B8",
  appBaseFontColor: "black",
  navbarBackgroundColor: "#7C7B76",
  basicBackGroundColor: "#F2F0E6",
  accentBackgroundColor: "#4a4f4e",
  accentTextColor: "#93c54b",
};

export const uglyTheme = {
  navbarBackgroundColor: "cadetblue",
  basicBackGroundColor: "antiquewhite",
  accentBackgroundColor: "violet",
  infoCardBackgroundColor: "white",
}

const themes = [globalDarkStyle, globalLightStyle, uglyTheme];
addDecorator(withThemes(ThemeProvider, themes));