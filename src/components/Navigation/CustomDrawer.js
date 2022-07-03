import React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import ListIcon from "@mui/icons-material/List";
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Avatar from '@mui/material/Avatar';
import "./CustomDrawer.scss";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSearchQuery, setSelectedMovie } from "../../reducers/movieList.slice";

const CustomDrawer = () => {
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(setSelectedMovie({}));
    dispatch(setSearchQuery(""));
  }
  return (
    <div className="customDrawer">
      <div className="avatarContainer" onClick={reset}>
        <Avatar
          className="avatar"
          size={16}
          alt="Eric Hoffman"
        >
          EH
        </Avatar>
        <Typography variant="h6" className="avatarName"> Eric Hoffman </Typography>
      </div>
      <Divider className="hrStyles" />
      <List className="">
        <ListItem disablePadding sx={{ borderRight: "5px solid #00E0FF", paddingLeft: "24px" }}>
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon className="listItem selected" />
            </ListItemIcon>
            <ListItemText primary="Discover" className="listItem selected" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{  paddingLeft: "24px" }}>
          <ListItemButton>
            <ListItemIcon>
              <PlaylistPlayIcon className="listItem" />
            </ListItemIcon>
            <ListItemText primary="Playlist" className="listItem" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{  paddingLeft: "24px" }}>
          <ListItemButton>
            <ListItemIcon>
              <LiveTvIcon className="listItem" />
            </ListItemIcon>
            <ListItemText primary="Movie" className="listItem" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{  paddingLeft: "24px" }}>
          <ListItemButton>
            <ListItemIcon>
              <MusicNoteIcon className="listItem" />
            </ListItemIcon>
            <ListItemText primary="Music" className="listItem" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{  paddingLeft: "24px" }}>
          <ListItemButton>
            <ListItemIcon>
              <DesktopWindowsIcon className="listItem" />
            </ListItemIcon>
            <ListItemText primary="TV Shows" className="listItem" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{  paddingLeft: "24px" }}>
          <ListItemButton>
            <ListItemIcon>
              <ListIcon className="listItem" />
            </ListItemIcon>
            <ListItemText primary="My List" className="listItem" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider className="hrStyles" />
      <List className="px-4">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <WatchLaterOutlinedIcon className="listItem" />
            </ListItemIcon>
            <ListItemText primary="Watch Later" className="listItem" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteBorderOutlinedIcon className="listItem" />
            </ListItemIcon>
            <ListItemText primary="Recommended" className="listItem" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider className="hrStyles" />
      <List className="px-4">
      <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsOutlinedIcon className="listItem" />
            </ListItemIcon>
            <ListItemText primary="Settings" className="listItem" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutOutlinedIcon className="listItem" />
            </ListItemIcon>
            <ListItemText primary="Logout" className="listItem" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default CustomDrawer;
