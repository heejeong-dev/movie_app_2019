import React from "react";
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sory_by=rating');
    
    if(movies){
      this.setState( { isLoading : false , movies } );
    }
  }
  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return <section className = "container">
      {isLoading ? 
      (  
        <div className = "loader">
        <span className = "loader_text">Loading ...</span>
        </div>
      ) : 
      ( 
        <div className = "movies">
          {movies.map(movie => (
            <Movie
              key = {movie.id}
              id = {movie.id} 
              year = {movie.year} 
              summary = {movie.summary} 
              title = {movie.title} 
              poster = {movie.medium_cover_image}
              genres = {movie.genres} />
          ))}
        </div>
      )}
    </section>
  };
}

export default App;
