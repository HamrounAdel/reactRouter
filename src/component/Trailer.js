import React from 'react'
import { useParams } from 'react-router-dom'
    
function Trailer({movie}) {
    const {id}=useParams()
    const films=movie.find((el)=>el.id===id)
    console.log('trai',films)
    if (!films) {
      return <div>Chargement...</div>; }
  return (
    <div style={{display:'flex',justifyContent:'space-between'}}> 
    <div>
    <img    variant="top" src={`.${films.imageSrc}`}  style={{width:'290px',height:'350px'}}/><br/>
    </div>
     <div> {films.title}<br/>
      Rate:{films.rate}<br/>
      
      Date de sortie:{films.sortie}<br/>
        Genre:{films.genre}<br/>
        Description:{films.description}<br/>
        
      <video controls width="50%" height="60%">
       <source src= {films.videoUrl} type="video/mp4"/>
      </video> 
  
        
        </div>
    </div>
  )
}

export default Trailer
