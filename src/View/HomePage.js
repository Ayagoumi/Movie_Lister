import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import SearchBar from "../Components/SearchBar";
import MovieList from "../Components/MovieList";
import InfiniteScroll from "react-infinite-scroll-component";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(true);
  let [page, setPage] = useState(1);

  const getMovies = useCallback(async () => {
    console.log(page);
    const options = {
      method: "GET",
      url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
      params: { type: "get-popular-movies", page: page, year: "2020" },
      headers: {
        "x-rapidapi-key": "4ccc11616emsha0ff93487313f1ep1528a9jsnf24cc1750061",
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(movies.length);
        movies === []
          ? setMovies(response.data.movie_results)
          : setMovies([...movies, ...response.data?.movie_results]);

        setIsloading(false);
        if (page < 10) setPage((prev) => prev + 1);
        console.log(movies);
        console.log(isloading);
      })
      .catch(function (error) {
        setIsloading(true);
        console.error(error);
      });
  }, [page]);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <div className="min-h-screen w-screen bg-gray-300">
        {/* <div className="flex flex-row items-center justify-between px-16 h-16 bg-red-50 w-full">
          <h1>Movie Lister</h1>
          <SearchBar />
        </div> */}
        <div className="min-w-auto grid grid-flow-row grid-cols-5 gap-4 items-center justify-center mt-5">
          <div className="w-screen bg-red-50">
            <InfiniteScroll
              dataLength={movies.length} //This is important field to render the next data
              next={getMovies}
              hasMore={true}
              scrollThreshold={1}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
              scrollThreshold="200px"
            >
              {!isloading && <MovieList movies={movies} />}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
