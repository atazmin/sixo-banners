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
      <Breadcrumbs pageName="STL Biz Journal Ads - Big Leagues - July 2026 - 07-15" />
      <Grid container rowSpacing={8}>
        <Grid xs={12}>
          <Typography sx={{ ...bannerStyles.heading }}>970x250</Typography>
          <MuiLink
            component="a"
            href="/26/stl-biz-journal-ads-big-leagues-july-2026-07-15/970x250/html/970x250/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/26/stl-biz-journal-ads-big-leagues-july-2026-07-15/970x250/static/970x250.jpg"
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
          <Typography sx={{ ...bannerStyles.heading }}>300x600</Typography>
          <MuiLink
            component="a"
            href="/26/stl-biz-journal-ads-big-leagues-july-2026-07-15/300x600/html/300x600/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/26/stl-biz-journal-ads-big-leagues-july-2026-07-15/300x600/static/300x600.jpg"
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
            href="/26/stl-biz-journal-ads-big-leagues-july-2026-07-15/300x250/html/300x250/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/26/stl-biz-journal-ads-big-leagues-july-2026-07-15/300x250/static/300x250.jpg"
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
