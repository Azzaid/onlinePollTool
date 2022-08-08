import React, {useState} from "react"
import GlobalThemeWrapper from "./HOC/GlobalThemeWrapper";
import {BrowserRouter} from "react-router-dom";
import RootRouter from "./Routes/RootRouter";
import {Provider} from "react-redux";
import {store} from "./store/initStore";

const App = (props) => {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <GlobalThemeWrapper>
                    <RootRouter/>
                </GlobalThemeWrapper>
            </Provider>
        </BrowserRouter>
    )
}

export default App