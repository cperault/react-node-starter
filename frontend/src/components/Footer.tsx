import { Box, Container, Typography, Stack } from "@mui/material";
import { APP_NAME, APP_VERSION } from "../constants/app";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
          <Stack direction="row" spacing={2}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} {APP_NAME} v{APP_VERSION}
            </Typography>
          </Stack>
          <Typography variant="caption" color="text.secondary">
            Built with React + Material UI
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
