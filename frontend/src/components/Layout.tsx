import { Outlet, Link } from "react-router-dom";
import { AppBar, Box, Container, Stack, Typography, useScrollTrigger, useTheme } from "@mui/material";
import { Footer } from "./Footer";

enum AppPage {
  Home = "Home",
  PageTwo = "PageTwo",
}

const Layout = () => {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const appPages: AppPage[] = [AppPage.Home, AppPage.PageTwo];

  return (
    <Box sx={{ minHeight: "100vh", paddingTop: "64px" }}>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          background: scrolled ? (isDark ? "rgba(30, 30, 30, 0.8)" : "rgba(255, 255, 255, 0.8)") : "transparent",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              mt: 2,
              px: 0.5,
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "primary.main",
                fontWeight: 600,
              }}
            >
              My Starter App
            </Typography>
            <Stack direction="row" spacing={2}>
              {appPages.map((item) => (
                <Typography
                  key={item}
                  component={Link}
                  to={item === AppPage.Home ? "/" : item.toLowerCase()}
                  sx={{
                    color: "primary.main",
                    textDecoration: "none",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
                      height: "2px",
                      bottom: -4,
                      left: 0,
                      backgroundColor: "secondary.main",
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Container>
      </AppBar>
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
