import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./Content.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMovie } from "../../reducers/movieList.slice";
import SelectedMovie from "./SelectedMovie";

const Content = ({ drawerWidth, list }) => {
  const dispatch = useDispatch();
  const movieListContainerRef = useRef(null);
  const selectedMovie = useSelector((state) => state.movieList.selectedMovie);
  const selectMovie = async (movie) => {
    await dispatch(setSelectedMovie({}));
    window.scrollTo({ top: 0, behaviour: "smooth" });
    dispatch(setSelectedMovie(movie));
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        padding: "80px 10px 0px 10px",
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        backgroundColor: "#273244",
      }}
    >
      {Object.keys(selectedMovie).length !== 0 && (
        <SelectedMovie selectedMovie={selectedMovie} />
      )}
      <div className="movieListContainer" ref={movieListContainerRef}>
        {list && list.map((movie) => (
          <div key={movie.id} className={`${movie.focused ? "focusMovieContainer" : "notfocusedMovieContainer"} d-flex flex-column pt-2 px-2`} onClick={()=>selectMovie(movie)}>
            <Box
            component="img"
            sx={{
              height: 230,
              width: 160 ,
              borderRadius: "5px",
              alignSelf: "center"
            }}
            alt="The house from the offer."
            src={movie.Poster}
            />
            <Typography variant="h6" sx={{
              fontSize: "16px",
              paddingLeft: "12px",
              marginTop: "5px"
            }}> {movie.Title} </Typography>
            <div className="d-flex flex-row ms-2">
              <PlayCircleOutlineIcon className="mt-1 ms-1 me-2" />
              <AddCircleOutlineIcon className="mt-1" />
            </div>
          </div>
        ))}
        {!list.length && <h5 className="p-3">No results found for your search.</h5>}
      </div>
    </Box>
  );
};

export default Content;
