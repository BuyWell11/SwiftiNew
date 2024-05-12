import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import {Provider} from "react-redux";
import store from "./redux/store.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage";
import GuidePage from "./pages/GuidePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <MainPage/>
            },
            {
                path: "guide",
                element: <GuidePage/>
            }
        ]
    },
])


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);
