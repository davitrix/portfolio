const detectSystemTheme = (): themeType => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
};

export default detectSystemTheme;
