const title = document.querySelector("title");
title.innerHTML = "Promesas";

// The Movie Database API: https://developers.themoviedb.org/3/getting-started/introduction
const apiKey = '20f7445d6af833362f24dae5ca60cb90';

async function getMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

async function getTopMoviesIds(n = 3) {
  const popularMovies = await getPopularMovies();
  const ids = popularMovies.slice(0,n).map(movie => movie.id);
  return ids;

}

function renderMovies(movies) {
  const movieList = document.getElementById('movies');
  movieList.innerHTML = '';

  movies.forEach(movie => {
    const listItem = document.createElement('li');
    
    listItem.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" />
      <h5>${movie.title}</h5>
      <p>Released on <em>${movie.release_date}</em></p>
    `;

    movieList.appendChild(listItem);
    }
  );
}

async function getTopMoviesInSequence() {
  const ids = await getTopMoviesIds();
  console.log("IDS: ", ids);
  let movies = []
  for(const id of ids) {
    const movie = await getMovie(id);
    movies.push(movie);
  }
  return movies;
}

async function getTopMoviesInParallel() {
  const ids = await getTopMoviesIds();
  const moviePromises = ids.map(id => getMovie(id));
  
  const movies = await Promise.all(moviePromises);
  return movies;
}

async function getFastestTopMovie() {
  const ids = await getTopMoviesIds();
  const moviesPromises = ids.map(id => getMovie(id));

  const movie = await Promise.race(moviesPromises);
  return movie;
}

document.getElementById('sequence').onclick = async function() {
  const movies = await getTopMoviesInSequence();
  renderMovies(movies);
};

document.getElementById('parallel').onclick = async function() {
  const movies = await getTopMoviesInParallel();
  renderMovies(movies);
};
document.getElementById('fastest').onclick = async function() {
  const movie = await getFastestTopMovie();
  renderMovies([movie]);
};