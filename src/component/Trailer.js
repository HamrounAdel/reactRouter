import React from 'react'
import { useParams } from 'react-router-dom'
import data from './data'
function Trailer() {
    const {id}=useParams()
    const films=data.find((el)=>el.id===id)
    console.log('trai',films)
    if (!films) {
      return <div>Chargement...</div>; // Ou tout autre affichage de chargement ou d'erreur approprié
    }
  return (
    <div style={{display:'flex',justifyContent:'space-between'}}> 
    <div>
    <img    variant="top" src={`.${films.imageSrc}`}  style={{width:'290px',height:'350px'}}/><br/>
    </div>
     <div> {films.title}<br/>
      Rate:{films.rate}<br/>
      
      Date de sortie:{films.sortie}<br/>
        Genre:{films.genre}<br/>
        Description:{films.description}<br/><br/>
        <button style={{ borderRadius: '10px',backgroundColor: 'rgb(21, 17, 224)',
      height: '2.5rem'}} >watch film</button>
        
        </div>
    </div>
  )
}

export default Trailer
