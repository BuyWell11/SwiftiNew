import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { fetchLanguages, fetchCities } from "../redux/backendDataSlice.js";
import { useAppDispatch } from "../hooks/reduxHooks";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";
import "../styles/pages/Layout.css";
function Layout() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchLanguages());
        dispatch(fetchCities());
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
    return (_jsx(Box, { className: "layout", children: _jsxs(ThemeProvider, { theme: theme, children: [_jsx(Topbar, { onMenuButtonClick: handleMenuButtonClick, isSidebarOpen: isSidebarOpen }), _jsx(Sidebar, { isOpen: isSidebarOpen, onClose: closeSidebar }), _jsx(Outlet, {}), _jsx(Footer, {})] }) }));
}
export default Layout;
