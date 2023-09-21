import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end"
      }}
    >
      <Sidebar openMenu={openMenu} menuBtnEvent={handleMenu} />
      <Box className="pageWrapper">
        <Header showMenu={handleMenu} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
