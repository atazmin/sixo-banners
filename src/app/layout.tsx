import ThemeRegistry from "./ThemeRegistry";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex,nofollow" />
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Header />
          <Box component="main" sx={{
            border: "3px solid brown",
            ml: "200px",
          }}>
          {children}
          </Box>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
