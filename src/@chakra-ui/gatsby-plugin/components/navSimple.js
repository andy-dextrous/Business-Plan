export const NavSimple = {
  // The parts of the component
  parts: [
    "topMenu",
    "topBar",
    "container",
    "logo",
    "logoContainer",
    "mainMenu",
    "mainMenuContainer",
    "menuItem",
    "menuItemText",
    "dropDownMenu",
    "dropDownMenuContainer",
    "dropDownMenuText",
    "searchIcon",
    "socialFollows",
    "button",
    "modal",
    "modalContainer",
    "overlay",
    "modalMenuItemText",
    "modalSocials",
    "modalLogo",
  ],
  // The base styles for each part
  baseStyle: {
    topMenu: {
      alignItems: "center",
      flexDirection: "column",
      boxShadow: "sm",
      justifyContent: "center",
      left: 0,
      right: 0,
      top: 0,
      w: "100%",
      zIndex: "sticky",
      transition: "all 0.3s ease-in-out",
      "&.sticky": {
        position: "fixed",
      },
    },
    topBar: {
      bg: "primary.default",
      color: "white",
      w: "100%",
      h: "35px",
    },
    container: {
      flexDirection: "column",
      layerStyle: "fillSpace",
      gap: 12,
    },
    logoContainer: {
      gridRow: ["1/2", "1/2", "1/2"],
      gridColumn: ["2/3", "2/3", "1/2"],
      py: 0,
      px: [2, 2, 0],
    },
    logo: {},
    mainMenuContainer: {
      display: ["none", "none", "flex"],
    },
    mainMenu: {
      justify: "flex-start",
      align: "center",
      h: "full",
      spacing: 0,
    },
    menuItem: {
      h: "100%",
      paddingX: 4,
      display: "flex",
      align: "center",
      justify: "center",
      transition: "all 0.2s ease-in-out",

      "&[aria-current]": {
        borderBottom: `3px solid`,
      },
    },
    menuItemText: {
      py: 2,
      fontSize: "15px",
      fontWeight: "semibold",

      "&.menu-item-text": { mb: "0 !important" },
    },
    dropDownMenu: {
      position: "absolute",
      className: "dropdown-menu",
      visibility: "hidden",
      roundedBottom: "md",
      borderTop: "1px solid",
      top: "100%",
      left: 0,
      boxShadow: "sm",
    },
    dropDownMenuContainer: {
      minW: "300px",
      alignItems: "flex-start",
      py: 6,
      px: 4,
    },
    dropDownMenuText: {
      pt: 2,
      fontSize: "15px",
      fontWeight: "semibold",
    },
    searchIcon: {
      border: "none",
      bg: "transparent",
      transformOrigin: "50% 50%",
      size: "md",
      rounded: "full",
      display: "flex",
      variant: "ghost",
    },
    socialFollows: {
      alignItems: "center",
      direction: "row",
      display: ["none", "none", "none", "flex"],
      spacing: 4,
    },
    button: {
      variant: "primary",
    },
    modal: {
      pb: 0,
      h: "100vh",
      w: ["100vw", "100vw", "400px"],
      justify: "center",
      align: "center",
      zIndex: "modal",
      position: "fixed",
      left: "0",
      top: "0",
      overflowY: ["scroll", "scroll", "hidden"],
      borderRight: "1px solid rgba(187,187,187,0.3)",
    },
    modalContainer: {
      w: "full",
      position: "relative",
      overflow: "hidden",
      flex: 1,
      py: [12, 12, 24],
    },
    overlay: {
      layerStyle: "overlay",
      bg: "dark.default",
      opacity: "0.5",
      height: "100vh",
      w: "100vw",
      position: "fixed",
    },
    modalMenuItemText: {
      py: 2,
      "&.primaryMenuLink": {
        fontSize: ["2xl", "2xl"],
        fontWeight: "extrabold",
        lineHeight: 1.4,
        transition: "color 0.1s ease-out",
        _hover: {
          color: "primary.default",
          transform: "translateX(5px)",
        },
      },
    },
    modalMenuSubItemText: {
      mb: 2,
      "&.subMenuLink": {
        fontSize: ["lg", "lg", "xl"],
        fontWeight: "normal",
        color: "dark.default",
        _hover: {
          color: "primary.default",
        },
      },
    },
    modalSocials: {
      size: "md",
      variant: "circle",
      button: true,
    },
    modalLogo: {
      width: "130px",
    },
  },
  // The size styles for each part
  sizes: {},
  // The variant styles for each part
  variants: {
    light: {
      topMenu: {
        bg: "white",
      },
      topBar: {
        bg: "primary.default",
      },
      logo: {
        color: "dark.default",
      },
      menuItem: {
        "&[aria-current]": {
          borderBottomColor: "dark.default",
        },
      },
      menuItemText: {
        color: "dark.default",
        _hover: {
          color: "primary.default",
        },
      },
      dropDownMenu: {
        bg: "white",
        borderColor: "dark.100",
      },
      dropDownMenuText: {
        color: "dark.default",
        _hover: {
          color: "primary.default",
        },
      },
      searchIcon: {
        color: "dark.default",
        bg: "transparent",
        _hover: {
          color: "dark.default",
        },
        _active: {
          color: "dark.default",
        },
      },
      socialFollows: {
        color: "dark.default",
        svg: {
          _hover: {
            color: "primary.default",
          },
        },
      },
      modal: {
        bg: "white",
      },
      modalSocials: {
        color: "dark.default",
      },
      modalMenuItemText: {
        color: "dark.default",
      },
      modalMenuSubItemText: {
        color: "dark.default",
      },
      modalLogo: {
        color: "dark.default",
      },
    },
    dark: {
      topMenu: {
        bg: "dark.default",
      },
      topBar: {
        bg: "primary.default",
      },
      logo: {
        color: "white",
      },
      menuItem: {
        "&[aria-current]": {
          borderBottomColor: "white",
        },
      },
      menuItemText: {
        color: "white",
        _hover: {
          color: "primary.default",
        },
      },
      dropDownMenu: {
        bg: "dark.default",
        borderColor: "dark.700",
      },
      dropDownMenuText: {
        color: "white",
        _hover: {
          color: "primary.default",
        },
      },
      searchIcon: {
        color: "white",
        bg: "transparent",
        _hover: {
          color: "primary.default",
        },
        _active: {
          color: "dark.default",
        },
      },
      socialFollows: {
        color: "white",
        svg: {
          _hover: {
            color: "primary.default",
          },
        },
      },
      modal: {
        bg: "dark.default",
      },
      modalSocials: {
        color: "white",
      },
      modalMenuItemText: {
        color: "white",
      },
      modalMenuSubItemText: {
        color: "white",
      },
      modalLogo: {
        color: "white",
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {
    variant: "light",
  },
}
