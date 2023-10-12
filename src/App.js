import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import MovieList from './component/movies/MovieList';
import MovieFilter from './component/search/MovieFilter';
import MovieAdd from './component/add/MovieAdd';
import data from './component/data';

import {Routes ,Route} from 'react-router-dom'
import Navigation from './component/navbar/Navigation';
import { useNavigate } from 'react-router-dom';
import Trailer from './component/Trailer';
import Home from './component/home/Home';
import Profil from './component/profile/Profil';
function App() {
  
  const[movie,setMovie]=useState(data)
  const[inputTitle,setInputTitle]=useState('')
   const[inputRate,setInputRate]=useState('')
  const navigate =useNavigate()
   //fonction pour ajouter movie film
  const ajout=(newMovie)=>{
    setMovie([...movie,newMovie])
    navigate('/movielist')
  }
   // fonction pour supprimer  movie film 
const handelDelet=(id)=>{
setMovie(movie.filter((el)=> el.id!==id))
}
 //fonction pour checked movie film
  const handelCheck=(id)=>{
    setMovie(movie.map((el)=> el.id===id ?{...el,checked: !el.checked}  : el))
  }     
  
  return (
    <>
     <header>
      <Navigation/>
      </header>
    <div className='App'>
    
    
    <br/>
    <div >
        <div> 
          <MovieFilter   setInputTitle={setInputTitle} setInputRate={setInputRate}/>
        </div>
     </div>
    <hr/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/movielist' element={<MovieList  handelDelet={handelDelet} handelCheck={handelCheck} inputTitle={inputTitle} inputRate={inputRate} movie={movie}/>}/>
      <Route path='/add'element={<MovieAdd  ajout={ajout}/>}/>
      <Route path='/trailer/:id' element={<Trailer movie={movie}/>}/>
      <Route path='/profile' element={<Profil/>}/>
    </Routes>
    <div ></div>  
     <hr/>
     <div>
          
        </div>
    </div>
    </>
  );
}

export default App;
