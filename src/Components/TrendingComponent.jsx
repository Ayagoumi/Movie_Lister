// import React, { useState, useEffect } from "react";
// import Glide from "@glidejs/glide";
// import axios from "axios";
// import "../Scss/glide.scss";

// const TrendingComponent = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);

//   const fetchTrendingMovies = async () => {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
//     );
//     setTrendingMovies(data.results);
//     console.log(data.results);
//   };

//   useEffect(() => {
//     fetchTrendingMovies();
//     console.log(trendingMovies);
//   }, []);

//   useEffect(() => {
//     const options = {
//       type: "carousel",
//       startAt: 0,
//       perView: 1,
//       autoplay: "5000",
//       direction: "rtl",
//       gap: "30",
//       classs: {
//         slider: "glide--slider",
//         carousel: "glide--carousel",
//         swipeable: "glide--swipeable",
//         dragging: "glide--dragging",
//         cloneSlide: "glide__slide--clone",
//         activeNav: "glide__bullet--active",
//         activeSlide: "glide__slide--active",
//         disabledArrow: "glide__arrow--disabled",
//       },
//     };
//     new Glide(".glide").mount(options);
//   }, []);

//   return (
//     <div className="w-screen h-screen bg-gray-500">
//       <div className="w-screen glide h-1/2">
//         <div className="h-full glide__track" data-glide-el="track">
//           <ul className="h-full glide__slides">
//             {trendingMovies.map((movie, i) => (
//               <li className="glide__slide" key={i}>
//                 <img
//                   src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
//                   alt={movie.title}
//                   className="relative top-0 left-0 w-full h-full"
//                   style={{}}
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="glide__arrows" data-glide-el="controls">
//           <button
//             className="glide__arrow glide__arrow--left"
//             data-glide-dir="<"
//           >
//             prev
//           </button>
//           <button
//             className="glide__arrow glide__arrow--right"
//             data-glide-dir=">"
//           >
//             next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrendingComponent;
