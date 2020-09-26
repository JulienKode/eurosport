// see _variables.scss

export const COLORS = {
  primary: '#ffc425',
  secondary: '#f36958',
}

// https://material-ui.com/customization/theming/
export const THEME = {
  ...COLORS,
  mui: {
    breakpoints: {
      keys: [ 'xs', 'sm', 'md', 'lg', 'xl' ],
      values: {
        xs: 0,
        sm: 568,
        md: 760,
        lg: 1200,
        xl: 1600,
      },
    },
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
    palette: {
      primary: { main: COLORS.primary },
      secondary: { main: COLORS.secondary },
      action: {
        selected: '#dcebfb',
        hover: '#dcebfb',
      },
    },
    typography: {
      h6: {
        fontFamily: 'inherit',
      },
      button: {
        fontFamily: 'inherit',
      },
    },
  },
}
