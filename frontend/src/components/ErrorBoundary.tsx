import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { Component, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          component="main"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            padding: 4,
          }}
        >
          <Box
            sx={{
              p: 4,
              backgroundColor: "#f8d7da",
              color: "#721c24",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: "600px",
              boxSizing: "border-box",
            }}
          >
            <Accordion sx={{ width: "100%" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography variant="h6" gutterBottom>
                  Oops! Something went wrong.
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  whiteSpace: "pre-wrap",
                  overflow: "auto",
                  maxHeight: "400px",
                  wordBreak: "break-word",
                  "& pre": {
                    margin: 0,
                    padding: 2,
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    borderRadius: 1,
                    overflow: "auto",
                  },
                }}
              >
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    color: "error.main",
                  }}
                >
                  {this.state.error && this.state.error.toString()}
                </Typography>
                <Typography
                  variant="body2"
                  component="pre"
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "0.875rem",
                  }}
                >
                  {this.state.errorInfo?.componentStack}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => window.location.reload()}
              sx={{
                marginTop: 2,
                width: "100%",
                maxWidth: "300px",
              }}
            >
              Reload Page
            </Button>
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
