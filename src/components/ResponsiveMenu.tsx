import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["About Us", "Contact Us", "Menu"];

const ResponsiveMenu: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"          // fixed on top
      elevation={0}             // no shadow
      sx={{
        backgroundColor: "transparent !important",
        boxShadow: "none !important",
        ".MuiPaper-root": {
          backgroundColor: "transparent !important",
        },
        zIndex: (theme) => theme.zIndex.drawer + 1,  // ensure menu is above video
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: "transparent",
          minHeight: 64,
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontFamily: '"Special Elite", system-ui',
            letterSpacing: "1px",
            color: "white",
          }}
        >
          Smokey Rings
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" , fontFamily: '"Special Elite", system-ui',} }}>
          {pages.map((page) => (
            <Button key={page} sx={{ color: "white", mx: 1 }}>
              {page}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "flex", md: "none", fontFamily: '"Special Elite", system-ui',} }}>
          <IconButton onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              sx: {
                fontFamily: '"Special Elite", system-ui',
                backgroundColor: "rgba(0,0,0,0.8)", // dark semi-transparent for mobile menu background
                color: "white",
              },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ fontFamily: '"Special Elite", system-ui !important' }}>
                <Typography sx={{ fontFamily: '"Special Elite", system-ui' }}>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveMenu;
