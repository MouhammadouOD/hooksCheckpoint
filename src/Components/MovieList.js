import MovieCard from "./MovieCard";
import React, { useState , useEffect } from "react";
//import { store } from "../redux/store";
import { useSelector } from "react-redux";

function MovieList() {
  const style = {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "50px",
    border: "10",
    borderColor: "white",
    alignText: "center",
    color: "#61DAFB",
  };

  const movies = useSelector((state) => state.movies);
  const [gmovies, setGmovies] = useState(movies);

  useEffect(() => {
    setGmovies(movies)
  }, [movies])

  var titlemovies = [...gmovies];
  titlemovies.sort(function compare(a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  var ratemovies = [...gmovies];
  ratemovies.sort(function compare(a, b) {
    if (a.rating < b.rating) return -1;
    if (a.rating > b.rating) return 1;
    return 0;
  });

  const filterMovies = (e) => {
    e.target.value === "title"
      ? setGmovies(titlemovies)
      : setGmovies(ratemovies);
  };

  const films = gmovies.map((movie) => (
    <MovieCard
      title={movie.title}
      description={movie.description}
      posterUrl={movie.posterUrl}
      rating={movie.rating}
    />
  ));
  console.log(gmovies);

  return (
    <div className="container border p-2 " style={style}>
      <select
        className="form-select"
        onChange={(e) => filterMovies(e)}
        aria-label="Default select example"
      >
        <option>Filter by</option>
        <option value="title">title</option>
        <option value="rating">rating</option>
      </select>
      {films}
    </div>
  );
  /*
    return(
        <div className='container border p-2 ' style={style} >
            <MovieCard title={movies[0].title} description={movies[0].description} posterUrl={movies[0].posterUrl} rating={movies[0].rating}/>
            <MovieCard title={movies[1].title} description={movies[1].description} posterUrl={movies[1].posterUrl} rating={movies[1].rating}/>
            <MovieCard title={movies[2].title} description={movies[2].description} posterUrl={movies[2].posterUrl} rating={movies[2].rating}/>
            
        </div>
    );*/
}

export default MovieList;
