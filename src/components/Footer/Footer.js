import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <AppBar sx={{ background: "#000", position: "static" }}>
        <Toolbar>
          <Typography fontSize="small" sx={{ color: "grey" }} mx="auto">
            Edu Temple Dashboard &copy; 2022
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
