import React from "react"
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
/*    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;*/
  }
`;

const globalDarkStyle = {
    appBaseFontColor: "white",
    navbarBackgroundColor: "#212323",
    basicBackGroundColor: "#313534",
    infoCardBackgroundColor: "#3f4342",
    accentBackgroundColor: "#4a4f4e",
    accentTextColor: "#f5c415",
};

const globalLightStyle = {
    infoCardBackgroundColor: "#C2C0B8",
    appBaseFontColor: "black",
    navbarBackgroundColor: "#7C7B76",
    basicBackGroundColor: "#F2F0E6",
    accentBackgroundColor: "#4a4f4e",
    accentTextColor: "#93c54b",
};


const uglyTheme = {
    navbarBackgroundColor: "cadetblue",
    basicBackGroundColor:"antiquewhite",
    accentBackgroundColor: "violet",
    infoCardBackgroundColor: "white"
}

const GlobalThemeWrapper = (props) => {
    return (
        <React.Fragment>
            <ThemeProvider theme={globalLightStyle}>
                <GlobalStyle/>
                {props.children}
            </ThemeProvider>
        </React.Fragment>
    )

}

export default GlobalThemeWrapper