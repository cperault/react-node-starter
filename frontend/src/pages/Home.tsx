import { Box, Button, Typography } from "@mui/material";
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import { useToast } from "../providers/ToastProvider";
import { useGetHelloWorldQuery } from "../redux/apiSlice";
import { useState } from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

const Home = () => {
  const { showSuccess, showError } = useToast();

  const { data: helloWorld, isLoading, isError, error } = useGetHelloWorldQuery();

  const getErrorMessage = (error: FetchBaseQueryError | SerializedError) => {
    if ("status" in error) {
      // FetchBaseQueryError
      return `Error ${error.status}: ${JSON.stringify(error)}`;
    } else {
      // SerializedError
      return error.message || "An unknown error occurred";
    }
  };

  if (isLoading) return <Box>Loading...</Box>;
  if (isError) return <Box>{getErrorMessage(error)}</Box>;
  if (!helloWorld) return <Box>Error: No data - double check connection between frontend and backend</Box>;

  const greeting = helloWorld.message;

  const ErrorBoundaryTrigger = () => {
    const [shouldError, setShouldError] = useState(false);

    if (shouldError) {
      throw new Error("Manually triggered error!");
    }

    return (
      <Button variant="contained" onClick={() => setShouldError(true)}>
        Trigger ErrorBoundary
      </Button>
    );
  };

  return (
    <PageContainer>
      <PageHeader
        title="Home"
        action={
          <Button variant="contained" onClick={() => showError("Hello World!")}>
            Click Me for an Error!
          </Button>
        }
      />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5, pb: 2 }}>
        <Typography variant="body2">{greeting}</Typography>
        <Button variant="contained" onClick={() => showSuccess("Hello World!")}>
          Click Me for a Success!
        </Button>
        <ErrorBoundaryTrigger />
      </Box>
    </PageContainer>
  );
};

export default Home;
