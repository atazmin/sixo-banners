"use client";
import {
  Container,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { bannerStyles } from "@/app/components/Styles";

export default function Home() {
  const theme = useTheme();
  const breakpointUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth={false} disableGutters={breakpointUpMd}>
      <Breadcrumbs pageName="Website GIFs - Los Angeles CBFC Promo (Q2 2026) - 07-23" />
      <Grid container rowSpacing={8}>
        <Grid xs={12}>
          <Typography sx={{ ...bannerStyles.heading }}>970x250</Typography>
          <MuiLink
            component="a"
            href="/26/website-gifs-los-angeles-cbfc-promo-q2-2026-07-23/970x250/html/970x250/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/26/website-gifs-los-angeles-cbfc-promo-q2-2026-07-23/970x250/static/970x250.jpg"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
        <Grid xs={12}>
          <Typography sx={{ ...bannerStyles.heading }}>970x90</Typography>
          <MuiLink
            component="a"
            href="/26/website-gifs-los-angeles-cbfc-promo-q2-2026-07-23/970x90/html/970x90/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/26/website-gifs-los-angeles-cbfc-promo-q2-2026-07-23/970x90/static/970x90.jpg"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
        <Grid xs={12}>
          <Typography sx={{ ...bannerStyles.heading }}>728x90</Typography>
          <MuiLink
            component="a"
            href="/26/website-gifs-los-angeles-cbfc-promo-q2-2026-07-23/728x90/html/728x90/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/26/website-gifs-los-angeles-cbfc-promo-q2-2026-07-23/728x90/static/728x90.jpg"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
        <Grid xs={12}>
          <Typography sx={{ ...bannerStyles.heading }}>640x100</Typography>
          <MuiLink
            component="a"
            href="/26/website-gifs-los-angeles-cbfc-promo-q2-2026-07-23/640x100/html/640x100/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/26/website-gifs-los-angeles-cbfc-promo-q2-2026-07-23/640x100/static/640x100.jpg"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
      </Grid>
      <Grid container rowSpacing={8} columnSpacing={5}>
        <Grid xs="auto">
          <Typography sx={{ ...bannerStyles.heading }}>168x1100</Typography>
          <MuiLink
            component="a"
            href="/26/website-gifs-los-angeles-cbfc-promo-q2-2026-07-23/168x1100/html/168x1100/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/26/website-gifs-los-angeles-cbfc-promo-q2-2026-07-23/168x1100/static/168x1100.jpg"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
        <Grid xs="auto">
          <Typography sx={{ ...bannerStyles.heading }}>300x250</Typography>
          <MuiLink
            component="a"
            href="/26/website-gifs-los-angeles-cbfc-promo-q2-2026-07-23/300x250/html/300x250/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/26/website-gifs-los-angeles-cbfc-promo-q2-2026-07-23/300x250/static/300x250.jpg"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>

          <Typography sx={{ ...bannerStyles.heading }}>320x50</Typography>
          <MuiLink
            component="a"
            href="/26/website-gifs-los-angeles-cbfc-promo-q2-2026-07-23/320x50/html/320x50/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/26/website-gifs-los-angeles-cbfc-promo-q2-2026-07-23/320x50/static/320x50.jpg"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
      </Grid>
    </Container>
  );
}
