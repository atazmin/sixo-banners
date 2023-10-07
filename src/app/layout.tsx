import type { Metadata } from "next";
import { Stack } from "@mui/material";
import ThemeRegistry from "./ThemeRegistry";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
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
      <Stack
        component="body"
        sx={{
          minHeight: "100vh",
        }}
      >
        <ThemeRegistry options={{ key: "mui" }}>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </ThemeRegistry>
      </Stack>
    </html>
  );
}
