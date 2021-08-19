import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";
import axios from "axios";

const TrendingComponent = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [opacities, setOpacities] = React.useState([]);
  const [pause, setPause] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({
    slides: trendingMovies.length,
    loop: true,
    duration: 2000,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    move(s) {
      const new_opacities = s.details().positions.map((slide) => slide.portion);
      setOpacities(new_opacities);
    },
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  const fetchTrendingMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setTrendingMovies(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 4000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  useEffect(() => {
    fetchTrendingMovies();
    // console.log(trendingMovies);
  }, []);

  return (
    <div
      ref={sliderRef}
      style={{ height: "70vh" }}
      className="relative overflow-hidden flex items-center w-full"
    >
      {trendingMovies?.map((movie, index) => (
        <div
          key={index}
          style={{
            // position: "relative",
            // zIndex: 1,
            // backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.poster_path}")`,
            // backgroundSize: "100% 100%",
            // backgroundRepeat: "no-repeat",
            opacity: opacities[index],
          }}
          >
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            style={{
              // transform: "translateY(-50%) translateX(-50%)",
              // webkitTransform: "translateY(-50%) translateX(-50%)",
            }}
            className="absolute top-0 w-full"
          />
        </div>
      ))}
      {slider && (
        <div className="flex absolute px-2 py-0 justify-center z-50 w-screen bottom-6">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={
                  "dot border-none w-3 h-1 bg-gray-100 opacity-80 rounded-lg mx-1 my-0 cursor-pointer focus:outline-none" +
                  (currentSlide === idx ? " active" : "")
                }
              />
            );
          })}
        </div>
      )}
      {/* <div className="flex absolute px-2 py-0 justify-center z-10 w-screen bottom-0 bg-gray-400 h-12 opacity-60"></div> */}
    </div>
  );
};

export default TrendingComponent;
