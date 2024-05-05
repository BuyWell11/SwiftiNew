import "./App.css";
import {useEffect, useState} from "react";
import Sidebar from "./component/Sidebar";
import Topbar from "./component/Topbar";
import MainContent from "./component/MainContent";
import {createTheme, ThemeProvider} from "@mui/material";
import {fetchLanguages, fetchCities} from "./redux/backendDataSlice.js"
import {useAppDispatch, useAppSelector} from "./hooks/reduxHooks";

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
        <>
            <ThemeProvider theme={theme}>
                <Topbar
                    onMenuButtonClick={handleMenuButtonClick}
                    isSidebarOpen={isSidebarOpen}
                />
                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}/>
                <MainContent/>
            </ThemeProvider>
        </>
    );
}

export default App;
