import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import './index.css'

render(
    // 用router管理整个页面
    <BrowserRouter>
            <App />
    </BrowserRouter>,
    document.getElementById("root")
);
