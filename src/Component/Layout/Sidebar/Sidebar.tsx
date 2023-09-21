import React, { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { SidebarData } from "./SidebarData";
import { useDispatch } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import "./sidebar.scss";

interface SingleTabProps {
  label: string;
  selected: string;
  path: string;
  setSelected: (e: string) => void;
}

const SingleTab = ({ label, path, setSelected }: SingleTabProps) => {
  const location = useLocation();
  return (
    <Box className="menuItem">
       <NavLink className="menuItem__link" to={path}>{label}</NavLink>
    </Box>
  );
};

interface ChildProps {
  openMenu: boolean;
  menuBtnEvent: any;
}
const Sidebar: React.FC<ChildProps> = ({
  openMenu,
  menuBtnEvent,
}: ChildProps) => {
  const [selected, setSelected] = useState("");
  // const userData = useSelector((state: RootState) => state.Auth.user);
  // const isLogin = useSelector((state: RootState) => state.Auth.isLogin);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <Box
        className={openMenu === false ? "sidebar" : "sidebar sidebar--active"}
      >
        <Box>
          <Box className="sidebar__logo">AgencyFlow</Box>
          <Box className="sidebar__menu">
            {SidebarData?.map((el: any) => {
              return (
                <SingleTab
                  label={el.label}
                  path={el.path}
                  selected={selected}
                  setSelected={setSelected}
                  key={el.name}
                />
              );
            })}
          </Box>
        </Box>

        <Box className="sidebar__footer">
          <Button
            onClick={menuBtnEvent}
            sx={{
              minWidth: "0px",
              padding: "0px",
            }}
          >
            {openMenu ? (
              <KeyboardDoubleArrowLeftIcon />
            ) : (
              <KeyboardDoubleArrowRightIcon />
            )}

            Collapse
          </Button>
        </Box>
        
      </Box>
    </>
  );
};
export default Sidebar;
