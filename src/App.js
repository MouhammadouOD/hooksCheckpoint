import MovieList from "./Components/MovieList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
//import AddMovie from './Components/addMovief';
//import AddMovie from './Components/addMovief';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Casa De Papel",
      description: "film d'action",
      posterUrl:
        "https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/culture/medias/la-casa-de-papel-les-premieres-images-de-la-saison-5-1741189/28687766-1-fre-FR/La-Casa-de-Papel-les-premieres-images-de-la-saison-5.jpg",
      rating: "4",
    },
    {
      title: "The Revenant",
      description: "film horreur",
      posterUrl:
        "https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/loisirs/cinema/news/j-y-vais-j-y-vais-pas/the-revenant-la-vengeance-animale-de-leonardo-dicaprio-3047311/61177183-1-fre-FR/The-Revenant-la-vengeance-animale-de-Leonardo-DiCaprio.jpg",
      rating: "5",
    },
    {
      title: "Lupin",
      description: "film fantastic",
      posterUrl:
        "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/loisirs/series/netflix-voici-les-nouveautes-films-et-series-qui-debarquent-en-janvier-2021-3896450/94229980-1-fre-FR/Netflix-voici-les-nouveautes-films-et-series-qui-debarquent-en-janvier-2021.jpg",
      rating: "6",
    }
  ]);
  

  let copymovies = [...movies];
  /*

  const [vtitle, setVtitle] = useState("title");
  const [vdescription, setVdescription] = useState("desc");
  const [vposterUrl, setVposterUrl] = useState("url");
  const [vrating, setVrating] = useState(0);

  var newMovie = {
    title: "title",
    description: "description",
    posterUrl: "posterUrl",
    rating: 0,
  };
  var copymovies = movies;



  function addTitle(e) {
    console.log(e.target.value);
    setVtitle(e.target.value);
    newMovie.title = vtitle;
    console.log(newMovie);
    return console.log(vtitle);
  }

  function addDescription(e) {
    console.log(e.target.value);
    return setVdescription(e.target.value);
    //return setNewMovie(newMovie.description=vdescription);
  }

  function addPosterUrl(e) {
    console.log(e.target.value);
    return setVposterUrl(e.target.value);
    //return setNewMovie(newMovie.posterUrl=vposterUrl);
  }

  function addRating(e) {
    console.log(e.target.value);
    return setVrating(e.target.value);
    //return setNewMovie(newMovie.rating=vrating);
  }

  function addMovie(e) {
    e.preventDefault();
    newMovie = {
      title: vtitle,
      description: vdescription,
      posterUrl: vposterUrl,
      rating: vrating,
    };
    copymovies.newMovie = newMovie;
    console.log(copymovies);
    setMovies(copymovies);
    return movies;
  }

  useEffect((vtitle, vdescription, vposterUrl, vrating) => {
    newMovie = {
      title: vtitle,
      description: vdescription,
      posterUrl: vposterUrl,
      rating: vrating,
    };
    //copymovies.newMovie=newMovie;
    //setMovies(copymovies);
  }, []);*/
  const {title , description , posterUrl , rating} = movies;

  const handleChange = (e) => {
      setMovies({...copymovies , [e.target.name] : e.target.value});
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
  }

  useEffect((e) => {
     // handleChange(e);
      }
  )

  return (
    <div className="App container">
      <h1>Movie App</h1>
      <h4 style={{ color: "white" }}>
        I make this app to collect and store my favorite movies.
        <br />
        Let's see it.
      </h4>

      <form className="container m-3">
        <div className="form-group">
          <label htmlFor="title" className="text-white">
            Title:
          </label>
          <input
            type="text"
            onChange={(e)=> handleChange}
            className="form-control"
            placeholder="Enter title"
            id="title"
            name="title"
            value={title}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="text-white">
            Description:
          </label>
          <input
            type="text"
            onChange={(e)=> handleChange}
            className="form-control"
            placeholder="Enter description"
            id="description"
            name="description"
            value={description}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="posterUrl" className="text-white">
            Poster-Url:
          </label>
          <input
            type="text"
            onChange={(e)=> handleChange}
            className="form-control"
            placeholder="Paste the url of the image here"
            id="posterUrl"
            name="posterUrl"
            value={posterUrl}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating" className="text-white">
            Rating:
          </label>
          <input
            type="number"
            onChange={(e)=> handleChange}
            className="form-control"
            placeholder="Give the rate"
            id="email"
            name='rating'
            value={rating}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onSubmit={(e) => handleSubmit(e)}
        >
          Add Film
        </button>
      </form>

      <MovieList
        movies={copymovies}
      />
    </div>
  );
}

export default App;
