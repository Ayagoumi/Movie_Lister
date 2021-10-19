import React, { useEffect } from "react";

const Card = (props) => {
  return (
    <div className="relative overflow-hidden text-white transition duration-500 ease-in-out transform rounded-md shadow-md">
      <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-gray-900 via-gray-600 to-transparent"></div>
      <div
        className="relative z-10 p-10 space-y-6 cursor-pointer group movie_info"
        href="https://www.youtube.com/embed/aSHs224Dge0"
      >
        {/* <div className="w-full poster__info align-self-end">
          <div className="h-32"></div>
          <div className="space-y-6 detail_info">
            <div className="flex flex-col space-y-2 inner">
              <h3 className="text-2xl font-bold text-white">
                {props.movie.original_title}
              </h3>
              <div className="mb-0 text-lg text-gray-400">
                Beyond fear, destiny awaits.
              </div>
            </div>
            <div className="flex flex-row justify-between datos">
              <div className="flex flex-col datos_col">
                <div className="popularity">440.052</div>
                <div className="text-sm text-gray-400">Popularity:</div>
              </div>
              <div className="flex flex-col datos_col">
                <div className="release">2021-09-15</div>
                <div className="text-sm text-gray-400">Release date:</div>
              </div>
              <div className="flex flex-col datos_col">
                <div className="release">155 min</div>
                <div className="text-sm text-gray-400">Runtime:</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <img
        className="absolute inset-0 w-full transform -translate-y-4 filter grayscale-0"
        src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
        alt="lol"
      />
    </div>
  );
};

export default Card;
