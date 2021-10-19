import React, { useState, useEffect } from "react";
import axios from "axios";

const Series = () => {
  const [UpcomingTV, setUpcomingTV] = useState([]);

  const fetchUpcomingTV = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    console.log(data);
    setUpcomingTV(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchUpcomingTV();
  }, []);

  return (
    <div>
      <div>
        <span>Popular Series</span>

        <div className="container mx-auto">
          {UpcomingTV?.map((movie) => (
            <div className="inline-block px-2 w-72 h-64">
              <div
                className="bg-white rounded-lg overflow-hidden shadow-xl my-8 py-4"
                key={movie.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt="movieimage"
                  className="w-full h-64"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Series;
