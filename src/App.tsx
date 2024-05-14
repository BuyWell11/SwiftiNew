import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import GuidePage from "./pages/GuidePage";
import TermOfUsePage from "./pages/TermOfUsePage";
import {useAppSelector} from "./hooks/reduxHooks";


function App() {
    const localization = useAppSelector(state => state.user.localization);

    const router = createBrowserRouter([
        {
            path: "/*",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <MainPage/>
                },
                {
                    path: "guide",
                    element: <GuidePage/>
                },
                {
                    path: "term_of_use",
                    element: <TermOfUsePage/>
                }
            ]
        },
    ])

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
