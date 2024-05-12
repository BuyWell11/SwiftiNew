import "./App.css";
import {useEffect, useState} from "react";
import Sidebar from "./component/Sidebar";
import Topbar from "./component/Topbar";
import MainPage from "./pages/MainPage";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import {fetchLanguages, fetchCities} from "./redux/backendDataSlice.js"
import {useAppDispatch, useAppSelector} from "./hooks/reduxHooks";
import Footer from "./component/Footer";
import {Outlet} from "react-router-dom";

function App() {
    const localization = useAppSelector(state => state.user.localization);
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchLanguages())
        dispatch(fetchCities())
    }, [dispatch]);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#03AD52',
            },
            secondary: {
                main: '#C6B6E3'
            }
        },
        components: {
            MuiAutocomplete: {
                styleOverrides: {
                    inputRoot: {
                        borderRadius: '8px !important'
                    },
                }
            },

        }
    });

    const handleMenuButtonClick = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <Box className="app">
            <ThemeProvider theme={theme}>
                <Topbar
                    onMenuButtonClick={handleMenuButtonClick}
                    isSidebarOpen={isSidebarOpen}
                />
                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}/>
                <Outlet/>
                <Footer/>
            </ThemeProvider>
        </Box>
    );
}

export default App;
