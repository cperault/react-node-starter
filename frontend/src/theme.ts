import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";

const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
          boxShadow: theme.shadows[4],
        }),
      },
    },
  },
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main: "rgb(1, 87, 155)", // Dark blue for primary color
    },
    secondary: {
      main: "rgb(255, 138, 0)", // Bright orange for secondary accent
    },
    background: {
      default: "rgb(245, 245, 245)", // Light gray background
      paper: "rgb(255, 255, 255)", // White for paper (cards, containers)
    },
    text: {
      primary: "rgb(0, 0, 0)", // Black text for light mode
      secondary: "rgba(0, 0, 0, 0.7)", // Lighter text for secondary
    },
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(173, 216, 230)", // Light blue for contrast in dark mode
    },
    secondary: {
      main: "rgb(255, 138, 0)", // Keeping the same bright accent color
    },
    background: {
      default: "rgb(18, 18, 18)", // Dark background for dark mode
      paper: "rgb(30, 30, 30)", // Slightly lighter paper color for cards
    },
    text: {
      primary: "rgb(255, 255, 255)", // White text for dark mode
      secondary: "rgba(255, 255, 255, 0.7)", // Lighter secondary text
    },
  },
});

export { lightTheme as theme };
