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
      <Breadcrumbs pageName="CACU-R321-204-FY22 Programmatic Banners - Jan. 23" />
      <Typography component="h3" variant="h5" marginBottom={2}>
      High Interest Savings
      </Typography>
      <Grid container rowSpacing={8}>
        <Grid xs={12}>
          <Typography sx={{ ...bannerStyles.heading }}>728x90</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/728x90/1-high-interest-savings/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/728x90/1-high-interest-savings/728x90.png"
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
          <Typography sx={{ ...bannerStyles.heading }}>160x600</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/160x600/1-high-interest-savings/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/160x600/1-high-interest-savings/160x600.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
        <Grid xs="auto">
          <Typography sx={{ ...bannerStyles.heading }}>300x600</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/300x600/1-high-interest-savings/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/300x600/1-high-interest-savings/300x600.png"
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
            href="/23/cacu-r321-204-fy22-programmatic-banners/300x250/1-high-interest-savings/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/300x250/1-high-interest-savings/300x250.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>

          <Typography sx={{ ...bannerStyles.heading }}>320x50</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/320x50/1-high-interest-savings/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/320x50/1-high-interest-savings/320x50.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>

          <Typography sx={{ ...bannerStyles.heading }}>300x50</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/300x50/1-high-interest-savings/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/300x50/1-high-interest-savings/300x50.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
      </Grid>



      <Typography component="h3" variant="h5" marginTop={2} marginBottom={2}>
      Hybrid Home Equity
      </Typography>
      <Grid container rowSpacing={8}>
        <Grid xs={12}>
          <Typography sx={{ ...bannerStyles.heading }}>728x90</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/728x90/2-hybrid-home-equity/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/728x90/2-hybrid-home-equity/728x90.png"
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
          <Typography sx={{ ...bannerStyles.heading }}>160x600</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/160x600/2-hybrid-home-equity/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/160x600/2-hybrid-home-equity/160x600.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
        <Grid xs="auto">
          <Typography sx={{ ...bannerStyles.heading }}>300x600</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/300x600/2-hybrid-home-equity/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/300x600/2-hybrid-home-equity/300x600.png"
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
            href="/23/cacu-r321-204-fy22-programmatic-banners/300x250/2-hybrid-home-equity/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/300x250/2-hybrid-home-equity/300x250.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>

          <Typography sx={{ ...bannerStyles.heading }}>320x50</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/320x50/2-hybrid-home-equity/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/320x50/2-hybrid-home-equity/320x50.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>

          <Typography sx={{ ...bannerStyles.heading }}>300x50</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/300x50/2-hybrid-home-equity/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/300x50/2-hybrid-home-equity/300x50.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
      </Grid>



      <Typography component="h3" variant="h5" marginTop={2} marginBottom={2}>
      Mortgage
      </Typography>
      <Grid container rowSpacing={8}>
        <Grid xs={12}>
          <Typography sx={{ ...bannerStyles.heading }}>728x90</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/728x90/3-mortgage/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/728x90/3-mortgage/728x90.png"
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
          <Typography sx={{ ...bannerStyles.heading }}>160x600</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/160x600/3-mortgage/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/160x600/3-mortgage/160x600.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
        <Grid xs="auto">
          <Typography sx={{ ...bannerStyles.heading }}>300x600</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/300x600/3-mortgage/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/300x600/3-mortgage/300x600.png"
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
            href="/23/cacu-r321-204-fy22-programmatic-banners/300x250/3-mortgage/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/300x250/3-mortgage/300x250.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>

          <Typography sx={{ ...bannerStyles.heading }}>320x50</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/320x50/3-mortgage/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/320x50/3-mortgage/320x50.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>

          <Typography sx={{ ...bannerStyles.heading }}>300x50</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/300x50/3-mortgage/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/300x50/3-mortgage/300x50.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
      </Grid>

      <Typography component="h3" variant="h5" marginTop={2} marginBottom={2}>
      Credit Card
      </Typography>
      <Grid container rowSpacing={8}>
        <Grid xs={12}>
          <Typography sx={{ ...bannerStyles.heading }}>728x90</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/728x90/4-credit-card/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/728x90/4-credit-card/728x90.png"
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
          <Typography sx={{ ...bannerStyles.heading }}>160x600</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/160x600/4-credit-card/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/160x600/4-credit-card/160x600.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
        <Grid xs="auto">
          <Typography sx={{ ...bannerStyles.heading }}>300x600</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/300x600/4-credit-card/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/300x600/4-credit-card/300x600.png"
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
            href="/23/cacu-r321-204-fy22-programmatic-banners/300x250/4-credit-card/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/300x250/4-credit-card/300x250.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>

          <Typography sx={{ ...bannerStyles.heading }}>320x50</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/320x50/4-credit-card/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/320x50/4-credit-card/320x50.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>

          <Typography sx={{ ...bannerStyles.heading }}>300x50</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/300x50/4-credit-card/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/300x50/4-credit-card/300x50.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
      </Grid>

      <Typography component="h3" variant="h5" marginTop={2} marginBottom={2}>
      Certificate Of Deposit
      </Typography>
      <Grid container rowSpacing={8}>
        <Grid xs={12}>
          <Typography sx={{ ...bannerStyles.heading }}>728x90</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/728x90/5-certificate-of-deposit/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/728x90/5-certificate-of-deposit/728x90.png"
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
          <Typography sx={{ ...bannerStyles.heading }}>160x600</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/160x600/5-certificate-of-deposit/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/160x600/5-certificate-of-deposit/160x600.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
        <Grid xs="auto">
          <Typography sx={{ ...bannerStyles.heading }}>300x600</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/300x600/5-certificate-of-deposit/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/300x600/5-certificate-of-deposit/300x600.png"
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
            href="/23/cacu-r321-204-fy22-programmatic-banners/300x250/5-certificate-of-deposit/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/300x250/5-certificate-of-deposit/300x250.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>

          <Typography sx={{ ...bannerStyles.heading }}>320x50</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/320x50/5-certificate-of-deposit/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/320x50/5-certificate-of-deposit/320x50.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>

          <Typography sx={{ ...bannerStyles.heading }}>300x50</Typography>
          <MuiLink
            component="a"
            href="/23/cacu-r321-204-fy22-programmatic-banners/300x50/5-certificate-of-deposit/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/cacu-r321-204-fy22-programmatic-banners/300x50/5-certificate-of-deposit/300x50.png"
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
