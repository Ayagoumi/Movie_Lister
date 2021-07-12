const MoviesMethods = {
  getImages: (Movies, getMovieImg) => {
    return new Promise((resolve, reject) => {
      Movies.forEach((element) => {
        getMovieImg(element);
      });
    });
  },
};

export default MoviesMethods;
