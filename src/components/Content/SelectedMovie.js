import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import "./SelectedMovie.scss";

const SelectedMovie = ({ selectedMovie }) => {
  const progressWidth = `${selectedMovie.imdbRating / 10 * 100}%`;
  const progressStyle = {
    width: progressWidth,
  }

  return (
    <div className="showmovie my-3 mx-4 d-flex flex-row">
      <Box
        component="img"
        className="imageContainer"
        alt={selectedMovie.Title}
        src={selectedMovie.Poster}
      />
      <div className="showInfo d-flex flex-column">
        <Typography
          variant="h6"
          sx={{
            color: "#D4D7DD",
            fontSize: "2em",
            margin: "0px 0px",
          }}
        >
          {selectedMovie.Title}
        </Typography>
        <div className="d-flex flex-row align-items-center">
          <div className="progress">
            <div
              className="progressColor"
              role="progressbar"
              style={progressStyle}
            ></div>
          </div>
          <Typography
          variant="h6"
          sx={{
            color: "#D4D7DD",
            fontSize: "1.2vw",
            margin: "0px 10px",
          }}
        >
          {`${selectedMovie.imdbRating}/10`}
        </Typography>
        </div>
        
        <div className="d-flex flex-row movieDetails">
          <div className="d-flex flex-column detailLabel">
            <span>Year: </span>
            <span>Running Time: </span>
            <span>Directed By: </span>
            <span>Language: </span>
          </div>
          <div className="d-flex flex-column">
            <span>{selectedMovie.Year}</span>
            <span>{selectedMovie.Runtime}</span>
            <span>{selectedMovie.Director}</span>
            <span>{selectedMovie.Language}</span>
          </div>
        </div>
        <p className="movieDesc">{selectedMovie.Plot}</p>
        <div className="d-flex">
          <Button variant="contained" sx={{
            color: "black",
            backgroundColor: "#00E0FF",
            width: "10vw",
            height: "2vw",
            fontSize: "1vw",
            padding: "0.1vw"
          }}>Play Movie</Button>
          <Button variant="outlined" sx={{
            color: "#00E0FF",
            border: "1px solid #00E0FF",
            width: "10vw",
            height: "2vw",
            fontSize: "1vw",
            padding: "0.1vw",
            marginLeft: "1vw",
          }}>Watch Trailer</Button>
        </div>
      </div>
    </div>
  );
};

export default SelectedMovie;
