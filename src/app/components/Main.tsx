"use client";
import { type ReactNode } from "react";
import { Box, useTheme } from "@mui/material";
import { globalStyles } from "@/app/components/Styles";

function Main({ children }: { children: ReactNode }) {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        [theme.breakpoints.up("md")]: {
          ml: globalStyles.headerWidth,
          p: 4,
          flexGrow: 1,

          width: `calc(100% - ${globalStyles.headerWidth})`,
        },
      }}
    >
      {children}
    </Box>
  );
}

export default Main;
