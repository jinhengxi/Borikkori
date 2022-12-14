const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  // ! 15px은 16px or 14px 선택, 13px은 12px로 바꿔쓰세요.
  xs: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(17),
  xl: calcRem(20),
  xxl: calcRem(24),
  titleSize: calcRem(32),
};

const fontWeights = {
  thin: "200",
  light: "300",
  regular: "400",
  bold: "500",
  semiBold: "600",
  extraBold: "700",
};

const paddings = {
  small: calcRem(4),
  base: calcRem(8),
  large: calcRem(16),
  xl: calcRem(20),
  xxl: calcRem(24),
  xxxl: calcRem(40),
};

const margins = {
  small: calcRem(4),
  base: calcRem(8),
  large: calcRem(16),
  xl: calcRem(20),
  xxl: calcRem(24),
  xxxl: calcRem(40),
};

const colors = {
  white: "#FFFFFF",
  black: "#272626",
  darkGray: "#969696",
  orange:"#FA622F",
  gray: "#E0DDDA",
  lightGray: "#E6E4E1",
  purple: "#5F0080",
  lightPurple:"#B69ACA",
  neonPurple:"#D2BDFE"
};

const borders = {
  gray: "1px solid #d3d3d3",
  lightGray: "1px solid #ebebeb",
};

const flex = {
  flexBox: (direction = "row", align = "center", justify = "center") => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletL: "1024px",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const theme = {
  fontSizes,
  fontWeights,
  paddings,
  margins,
  colors,
  borders,
  flex,
  device,
  deviceSizes
};
export default theme;
