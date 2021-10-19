import React, { useState, useEffect } from "react";
import axios from "axios";
import MoviesMethods from "../Helpers/MoviesHelper";
import InfiniteScroll from "react-infinite-scroll-component";

const MovieList = (props) => {
  const [poster, setPoster] = useState("");
  //   const [isloading, setIsloading] = useState(true);

  const getMovieImg = async (element) => {
    const options = {
      method: "GET",
      url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
      params: { type: "get-movies-images-by-imdb", imdb: element.imdb_id },
      headers: {
        "x-rapidapi-key": "4ccc11616emsha0ff93487313f1ep1528a9jsnf24cc1750061",
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        setPoster(res.data.poster);
        Object.assign(element, { img: res.data.poster });
        // setIsloading(false);
      })
      .catch(function (error) {
        console.error(error);
        // setPoster("http://placehold.jp/150x150.png");
        Object.assign(element, { img: "http://placehold.jp/150x150.png" });
      });
  };

  const getMovies = () => {
    MoviesMethods.getImages(props.movies, getMovieImg);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <InfiniteScroll
        dataLength={props.movies.length} //This is important field to render the next data
        next={getMovies}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        scrollThreshold="200px"
      >
        {props.movies?.map((movie, index) => (
          <div className="flex justify-center items-center" key={index}>
            <img src={movie.img} alt={movie.Title} className="rounded-xl"></img>
            <h2>{movie.Title}</h2>
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default MovieList;
