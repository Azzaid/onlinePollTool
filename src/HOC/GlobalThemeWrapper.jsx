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

const GlobalThemeWrapper = (props) => {
    return (
        <React.Fragment>
            <ThemeProvider theme={{accentBackgrounColor: "cadetblue", baseBackgrounColor:"antiquewhite", partBackgrounColor: "white"}}>
                <GlobalStyle/>
                {props.children}
            </ThemeProvider>
        </React.Fragment>
    )

}

export default GlobalThemeWrapper