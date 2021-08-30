import MovieCard from './MovieCard';
import React/*{useEffect}*/ from 'react';


function MovieList({movies , copymovies}){
     const style={
         display : 'flex' ,
         flexWrap : 'wrap',
         marginTop: '50px',
         border : '10',
         borderColor: 'white',
         alignText : 'center',
         color:'#61DAFB'
     }

        
     
     var films= movies.map((movie, id) => 
     <MovieCard key={id} title={movie.title} description={movie.description} posterUrl={movie.posterUrl} rating={movie.rating}/>
     );

     
     /*useEffect(() => {
        films= movies.map((movie, id) => 
        <MovieCard key={id} title={movie.title} description={movie.description} posterUrl={movie.posterUrl} rating={movie.rating}/>
        );                      
     }, [])
     */
     

    return(
        <div className='container border p-2 ' style={style}>
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