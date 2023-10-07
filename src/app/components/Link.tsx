import NextLink from "next/link";
import { type ReactNode } from "react";
import { useTheme, Link as MuiLink, SxProps } from "@mui/material";

function Link({
  children,
  href,
  sx,
}: {
  children: ReactNode;
  href: string;
  sx?: SxProps;
}) {
  const theme = useTheme();

  return (
    <MuiLink
      component={NextLink}
      href={href}
      sx={{
        color: theme.palette.common.black,
        textDecoration: "none",
        fontWeight: 700,
        display: "inline-flex",
        alignItems: "center",
        ":hover": {
          textDecoration: "underline",
        },
        ...sx,
      }}
    >
      {children}
    </MuiLink>
  );
}

export default Link;
