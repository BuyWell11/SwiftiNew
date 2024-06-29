import { jsx as _jsx } from "react/jsx-runtime";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import GuidePage from "./pages/GuidePage";
import TermOfUsePage from "./pages/TermOfUsePage";
import { useAppSelector } from "./hooks/reduxHooks";
function App() {
    const localization = useAppSelector(state => state.user.localization);
    const router = createBrowserRouter([
        {
            path: "/*",
            element: _jsx(Layout, {}),
            children: [
                {
                    index: true,
                    element: _jsx(MainPage, {})
                },
                {
                    path: "guide",
                    element: _jsx(GuidePage, {})
                },
                {
                    path: "term_of_use",
                    element: _jsx(TermOfUsePage, {})
                }
            ]
        },
    ]);
    return (_jsx(RouterProvider, { router: router }));
}
export default App;
