// кастомная тема Styled Components
const theme = {
  palette: {
    mainColor: "#1565C0",
    secondColor: "#6ba6da",
    textColor: "#555",
    addDoc: "#43A047"
  },
  sign: {
    logo: {
      height: "100px"
    }
  },
  header: {
    height: "60px"
  },
  sidebar: {
    width: "280px"
  },
  sidebarExpanded: {
    width: "60px"
  },
  directionColor: {
    fns: "#1565C0",
    pfr: "#D50000",
    rosstat: "#FF6F00",
    fss: "#FBB901",
    rar: "#2196F3",
    rpn: "#9E9E9E"
  }
};

const theme2 = {
  palette: {
    //mainColor: "#014a8e",
    //mainColor: "#014a8ee6",
    // mainColor: "#0D47A1",
    mainColor: "#337EC7",

    // mainColor: "#3683cb80",

    secondColor: "#6ba6da",
    subMainBlue: "#014a8ee6",
    // subMainBlue: "#014A8E",

    textColor: "black",
    subMenu: "#0e47a1",
    addDoc: "#43A047"
  },
  header: { height: "60px" },
  sidebar: { width: "280px" },
  sidebarExpanded: { width: "60px" },
  topBlock: { height: "60px" }
};

//const _theme = Object.assign(theme, theme2);

export default {
  first: theme,
  second: theme2
};
