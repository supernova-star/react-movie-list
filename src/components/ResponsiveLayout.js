import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import Navigation from "./Navigation/Navigation";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Content from "./Content/Content";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../thunks/movieList.thunk";
import "./ResponsiveLayout.scss";
import { setSearchQuery, setSelectedMovie } from "../reducers/movieList.slice";

const ResponsiveDrawer = (props) => {
  const dispatch = useDispatch();
  const search = useRef(null);
  const drawerWidth = 250;
  const list = useSelector((state) => state.movieList.movieList);
  const query = useSelector((state) => state.movieList.searchQuery);
  const { windowProp } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const container =
    windowProp !== undefined ? () => windowProp().document.body : undefined;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderedList = list.filter((item) =>
    item.Title.toLowerCase().includes(query.toLowerCase())
  );
  const openInput = () => {
    search.current.focus();
  };

  const handleOnchange = (event) => {
    const { value } = event.target;
    dispatch(setSearchQuery(value));
    dispatch(setSelectedMovie({}));
  };

  useEffect(() => {
    dispatch(getMovieList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#273244",
          minHeight: "75px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, mt:2   }}
          >
            <MenuIcon />
          </IconButton>
          <div className="d-flex flex-row justify-content-between w-100 searchContainer">
            <div className="d-flex position-relative">
              <IconButton
                color="inherit"
                aria-label="open input"
                onClick={openInput}
                sx={{ position: "absolute", top: "20px", left: "0px" }}
              >
                <SearchIcon />
              </IconButton>
              <input
                className="searchBox"
                placeholder="Title, Movies, Keyword"
                onChange={handleOnchange}
                value={query}
                ref={search}
              />
            </div>
            <div className="align-self-center mt-3  ">
              <WbSunnyIcon className="me-3" />
              <MoreVertIcon />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Navigation
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        container={container}
        handleDrawer={handleDrawerToggle}
      />
      <Content drawerWidth={drawerWidth} list={renderedList} />
    </Box>
  );
};

ResponsiveDrawer.propTypes = {
  windowProp: PropTypes.func,
};

export default ResponsiveDrawer;
