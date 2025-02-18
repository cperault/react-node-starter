import { Box, Button } from "@mui/material";
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";

const NotFound = () => {
  return (
    <PageContainer
      sx={{
        textAlign: "center",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 4,
        pb: 8,
      }}
    >
      <PageHeader title="Oops! You seem lost?" />
      <Box
        component="img"
        src="404.svg"
        alt="404 (not found) image of black cat licking its paw atop some random colored boxes with a flower pot, a gray mouse on the floor in between the boxes, and a cute teddy bear on a stack of smaller boxes"
        draggable="false"
        sx={{
          maxWidth: "100%",
          height: "auto",
          maxHeight: "60vh",
        }}
      />
      <Button
        variant="outlined"
        href="/"
        sx={{
          color: "text.primary",
          alignSelf: "center",
        }}
      >
        Back to Home
      </Button>
    </PageContainer>
  );
};

export default NotFound;
