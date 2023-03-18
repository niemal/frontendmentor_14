export const COLORS = {
  cyan: "hsl(180, 66%, 49%)",
  dark_violet: "hsl(257, 27%, 26%)",
  red: "hsl(0, 87%, 67%)",
  gray: "hsl(0, 0%, 75%)",
  gray_faded: "hsla(0, 0%, 75%, 0.5)",
  gray_violet: "hsl(257, 7%, 63%)",
  very_dark_blue: "hsl(255, 11%, 22%)",
  very_dark_violet: "hsl(260, 8%, 14%)",
  white: "hsl(0, 0%, 100%)",
  white_faded: "hsla(0, 0%, 100%, 0.5)",
  bright_red: "hsl(348, 100%, 70%)",
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 1080,
  exclusiveWidth1: 1320,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  exclusiveWidth1: `(max-width: ${BREAKPOINTS.exclusiveWidth1 / 16}rem)`,
};
