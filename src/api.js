var options = {
  method: "GET",
  url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
  params: { type: "get-popular-movies", page: "1", year: "2020" },
  headers: {
    "x-rapidapi-key": "4ccc11616emsha0ff93487313f1ep1528a9jsnf24cc1750061",
    "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
