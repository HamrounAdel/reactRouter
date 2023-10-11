import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
function MovieList({movie,inputTitle,inputRate,handelDelet,handelCheck}) {
  return (
    <div className='grid-container'>
      {movie.filter((el)=> (el.title.toLowerCase().includes(inputTitle.toLowerCase().trim()))
      && el.rate>=inputRate)
      .map((el)=>  <MovieCard el={el} handelCheck={handelCheck} handelDelet={handelDelet}  />)}
    
    </div>
  )
}

export default MovieList
