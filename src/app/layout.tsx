import ThemeRegistry from "./ThemeRegistry";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box, Stack } from "@mui/material";

export const metadata: Metadata = {
  title: "",
  description: "",
  openGraph: {
    title: "",
    description: "",
    url: "",
    siteName: "Next.js",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const headerWidth = "240px";
const headerStyles = {
  width: headerWidth,
};
const mainStyles = {
  ml: headerWidth, 
  p: 4,
  flexGrow: 1,
  width: `calc(100% - ${headerWidth})`,
};
const footerStyles = {
  ml: headerWidth,
  width: `calc(100% - ${headerWidth})`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex,nofollow" />
      <Stack component="body" sx={{
        minHeight: "100vh",
      }}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Header props={headerStyles} />
          <Box component="main" sx={{
            ...mainStyles,            
          }}>
          {children}
          </Box>
          <Footer props={footerStyles} />
        </ThemeRegistry>
      </Stack>
    </html>
  );
}
