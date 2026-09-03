import { createTheme } from '@mui/material/styles';
import { designTokens } from './tokens';

export const theme = createTheme({
  palette: {
    primary: { main: designTokens.colors.primary },
    secondary: { main: designTokens.colors.secondary },
    text: { primary: designTokens.colors.text },
    background: { default: designTokens.colors.background, paper: designTokens.colors.surface },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: designTokens.radii.small,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: 'none' },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: { borderRadius: designTokens.radii.medium },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: '40%',
          boxSizing: 'border-box',
          flexShrink: 0,
          minHeight: '100vh',
          '@media (max-width:600px)': { width: '100%' },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        markLabel: { top: -20 },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});
