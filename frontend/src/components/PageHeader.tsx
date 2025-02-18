import { Box, Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

interface PageHeaderProps extends TypographyProps {
  title: string;
  action?: ReactNode;
}

const PageHeader = ({ title, action, ...props }: PageHeaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        mb: 3,
      }}
    >
      <Typography
        variant="h1"
        color="text.secondary"
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          fontWeight: 700,
        }}
        {...props}
      >
        {title}
      </Typography>
      {action ? <Box sx={{ display: "flex", alignSelf: "center", gap: 1 }}>{action}</Box> : null}
    </Box>
  );
};

export default PageHeader;
