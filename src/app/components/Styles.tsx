const headerWidth = "240px";
const headerStyles = {
  stack: {
    width: headerWidth,
  },
};

const mainStyles = {
  box: {
    ml: headerWidth,
    p: 4,
    flexGrow: 1,

    width: `calc(100% - ${headerWidth})`,
  },
};
const footerStyles = {
  container: {
    ml: headerWidth,
    width: `calc(100% - ${headerWidth})`,
  },
};

const globalStyles = {
  headerWidth: "240px",
}

const bannerStyles = {
  heading: {
    fontWeight: 700,
  },
  link: {
    display: "inline-flex",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#979797",
    willChange: "transform",
    transition: "transform .125s ease-out",

    ":hover": {
      transform: "scale(1.025)",
    },
  },
  image: {
    width: "100%",
    objectFit: "contain",
  },
};

export { globalStyles, headerStyles, mainStyles, footerStyles, bannerStyles };
