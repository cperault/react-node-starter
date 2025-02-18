import { Box, Container, ContainerProps } from "@mui/material";
import { ReactNode } from "react";

interface PageContainerProps extends ContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children, ...props }: PageContainerProps) => {
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container maxWidth="lg" {...props}>
        {children}
      </Container>
    </Box>
  );
};

export default PageContainer;
