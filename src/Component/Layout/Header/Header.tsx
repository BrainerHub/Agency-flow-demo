import React, { useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  Popover,
  Select,
  Typography,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Photo from "../../../Assests/Images/JPEG/Images2.png"
import "./header.scss";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface MenuProps {
  showMenu: any;
}
const Header: React.FC<MenuProps> = ({ showMenu }: MenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };
  const [select, setSelect] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const [addMember, setAddMember] = useState<HTMLButtonElement | null>(null);
  const [addClient, setClient] = useState<HTMLButtonElement | null>(null);
  const [addField, setAddField] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAddMember(event.currentTarget);
  };
  const handleClose = () => {
    setAddMember(null);
  };
  const open = Boolean(addMember);
  const id = open ? "simple-popover" : undefined;
  const openClient = Boolean(addClient);
  const openAddField = Boolean(addField);
  const idClient = openClient ? "simple-popover" : undefined;
  return (
    <Box
      className="mainHeader"
      p={"16px 25px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderBottom={"1px solid #C4C4C4"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"15px"}
        justifyContent={"space-between"}
        className="mainHeader__heading"
        onClick={showMenu}
      >
        <IconButton
          className="borderBtn menuToggleBtn"
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <MenuOutlinedIcon />
        </IconButton>
        <Button
          aria-describedby={id}
          variant="contained"
          className="borderBtn deskView"
          onClick={handleClick}
        >
          <AddOutlinedIcon /> Add Team Members
        </Button>
        <Popover
          // id={id}
          open={open}
          anchorEl={addMember}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Box width={"100%"}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography>Invite Your Team Member </Typography>
              <Button onClick={handleClose}>
                <CloseIcon />
              </Button>
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "10px 0px",
              }}
            >
              <TextField
                type="text"
                fullWidth
                name="email"
                // value={}
                // onChange={(e) => handleChange(e)}
                placeholder="Email, commas separated"
                focused
              />
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained">Invite</Button>
            </div>
            <Divider />
            <List component="nav" aria-label="mailbox folders">
              <ListItem divider>
                <Avatar alt="Remy Sharp" src="" />
                <ListItemText primary="Rachel z." />
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value="admin">Owner</MenuItem>
                  <MenuItem value="user">Admin</MenuItem>
                </Select>
              </ListItem>
              <ListItem>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <ListItemText primary="Inbox" />
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value="admin">Owner</MenuItem>
                  <MenuItem value="user">Admin</MenuItem>
                </Select>
              </ListItem>
            </List>
          </Box>
          <Button aria-describedby={id} variant="contained" fullWidth>
            Copy Link
          </Button>
        </Popover>
        <AvatarGroup max={4} className="memberGroup deskView">
        <Avatar alt="Remy Sharp" src={Photo} />
          <Avatar alt="Travis Howard" src={Photo} />
          <Avatar alt="Cindy Baker" src={Photo} />
          <Avatar alt="Agnes Walker" src={Photo} />
          <Avatar alt="Trevor Henderson" src={Photo}/>
        </AvatarGroup>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
        gap={"12px"}
      >
        <Box className="mobileAddBtn">
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={(event: any) => {
              setAddField(event.currentTarget);
            }}
            className="borderBtn"
          >
            <AddOutlinedIcon />
          </Button>
          <Popover
            // id={id}
            open={openAddField}
            anchorEl={addField}
            onClose={() => {
              setAddField(null);
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <>
              <Box>
                <Button
                  aria-describedby={id}
                  variant="contained"
                  className="borderBtn"
                  onClick={handleClick}
                >
                  <AddOutlinedIcon /> Add Team Members
                </Button>
                <Popover
                  // id={id}
                  open={open}
                  anchorEl={addMember}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Box width={"100%"}>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography>Invite Your Team Member </Typography>
                      <Button onClick={handleClose}>
                        <CloseIcon />
                      </Button>
                    </Box>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "10px 0px",
                      }}
                    >
                      <TextField
                        type="text"
                        fullWidth
                        name="email"
                        // value={}
                        // onChange={(e) => handleChange(e)}
                        placeholder="Email, commas separated"
                        focused
                      />
                      <FormControl fullWidth>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          label="Age"
                          // onChange={handleChange}
                        >
                          <MenuItem value="admin">Admin</MenuItem>
                          <MenuItem value="user">User</MenuItem>
                        </Select>
                      </FormControl>
                      <Button variant="contained">Invite</Button>
                    </div>
                    <Divider />
                    <List component="nav" aria-label="mailbox folders">
                      <ListItem divider>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                        />
                        <ListItemText primary="Rachel z." />
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          label="Age"
                          // onChange={handleChange}
                        >
                          <MenuItem value="admin">Owner</MenuItem>
                          <MenuItem value="user">Admin</MenuItem>
                        </Select>
                      </ListItem>
                      <ListItem>
                        <Avatar
                          alt="Cindy Baker"
                          src="/static/images/avatar/3.jpg"
                        />
                        <ListItemText primary="Inbox" />
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          label="Age"
                          // onChange={handleChange}
                        >
                          <MenuItem value="admin">Owner</MenuItem>
                          <MenuItem value="user">Admin</MenuItem>
                        </Select>
                      </ListItem>
                    </List>
                  </Box>
                  <Button aria-describedby={id} variant="contained" fullWidth>
                    Copy Link
                  </Button>
                </Popover>
                <AvatarGroup max={4} className="memberGroup">
                  <Avatar alt="Remy Sharp" src={Photo} />
                  <Avatar
                    alt="Travis Howard"
                    src={Photo}
                  />
                  <Avatar alt="Cindy Baker" src={Photo} />
                  <Avatar
                    alt="Agnes Walker"
                    src={Photo}
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src={Photo}
                  />
                </AvatarGroup>
              </Box>
              <Box>
                <Button
                  aria-describedby={id}
                  variant="contained"
                  onClick={(event: any) => {
                    setClient(event.currentTarget);
                  }}
                  className="borderBtn"
                >
                  <AddOutlinedIcon /> New Client/Task
                  <span className="borderBtn__arrow">
                    <KeyboardArrowDownOutlinedIcon />
                  </span>
                </Button>
                <Popover
                  // id={id}
                  open={openClient}
                  anchorEl={addClient}
                  onClose={() => {
                    setClient(null);
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <>
                    <Button>New Task</Button>
                    <Button>New Client</Button>
                  </>
                </Popover>
              </Box>
            </>
          </Popover>
        </Box>
        <Button
          aria-describedby={id}
          variant="contained"
          onClick={(event: any) => {
            setClient(event.currentTarget);
          }}
          className="borderBtn deskView"
        >
          <AddOutlinedIcon /> New Client/Task
          <span className="borderBtn__arrow">
            <KeyboardArrowDownOutlinedIcon />
          </span>
        </Button>
        <Popover
          // id={id}
          open={openClient}
          anchorEl={addClient}
          onClose={() => {
            setClient(null);
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <>
            <Button>New Task</Button>
            <Button>New Client</Button>
          </>
        </Popover>
        <IconButton
          className="borderBtn"
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={7} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Button
          onClick={handleOpenUserMenu}
          sx={{ p: 0 }}
          className="userDropdown"
        >
          <Avatar alt="Remy Sharp" src={Photo} />
          <span className="userDropdown__arrow">
            <KeyboardArrowDownOutlinedIcon />
          </span>
        </Button>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
};
export default Header;
