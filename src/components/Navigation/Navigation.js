import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CustomDrawer from "./CustomDrawer";

const Navigation = ({
  mobileOpen,
  handleDrawerToggle,
  drawerWidth,
  container,
  handleDrawer,
}) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {backgroundColor:"#1F2A3C", boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <CustomDrawer handleDrawer={handleDrawer} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {backgroundColor:"#1F2A3C", boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        <CustomDrawer handleDrawer={handleDrawer} />
      </Drawer>
    </Box>
  );
};

export default Navigation;
