"use client";
import {
  Container,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import Link from "@/app/components/Link";

const Section = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    maxWidth: "70%",
  },
}));

export default function Home() {
  const theme = useTheme();
  const breakpointUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth={false} disableGutters={breakpointUpMd}>
      <Typography
        component="h1"
        variant="h3"
        sx={{
          mb: 10,
        }}
      >
        Online Media
      </Typography>
      <Section component="section" sx={{}}>
        <Typography component="h3" variant="h4">
          2023
        </Typography>
        <Link href="/2023/display-html-visa-150-promo-q4/">
          Display HTML - Visa $150 Promo (Q4 2023)
        </Link>
        – October
      </Section>
    </Container>
  );
}
