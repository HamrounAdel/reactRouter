import React, { useState } from 'react'
import './MovieAdd.css'
import { v4 as uuidv4 } from 'uuid';
function MovieAdd({ajout}) {
    const[titles,setTitles]=useState('')
    const[descriptions,setDescriptions]=useState('');
    const[imageSrcs,setImageSrcs]=useState('')
    const[rates,setRates]=useState(null)
    const[genres,setGenres]=useState('')
    const[videoUrls,setVideoUrls]=useState('')

    //test sur title
    const handleInputTitle = (e) => {
      const TitleValue = e.target.value;
      const synb = TitleValue.replace(/[^a-zA-Z0-9]/g, '');
      setTitles(synb );
    };
    //test sur rates: pour accepts only numbers et '.'
    const handleChange = (event) => {
      const { value } = event.target;

      const num = value.replace(/[^0-9.]/g, '');
        setRates(num);
      }
    const add=()=>{
      if(titles.length>0 && genres.length>0 && descriptions.length>0 
        && imageSrcs.length>0 && rates.length >0 && videoUrls.length>0 ) 
       {
      ajout({
          id:uuidv4(),
          title:titles,
          genre:genres,
          checked:false,
          description:descriptions,
          rate:rates,
          sortie:2023,
          imageSrc:imageSrcs,
          videoUrl:videoUrls
  
      },setTitles(''),setDescriptions(''),setImageSrcs(''),
      setRates(''),setGenres(''),setVideoUrls('') )}
      else{alert('Champs obligatoires')}
}
  return (
  <>
  <h4 style={{color:' rgb(34 197 94)'}}>Add movies</h4><br/>
  
<div style={{display: 'grid', gap: '24px',gridTemplateColumns: 'repeat(4, 1fr)'}}>
  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>Title:</p>
  <input  placeholder='entre titre' value={titles}
      onChange={handleInputTitle}/>
  </form ><br/>

  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>Description:</p>
    <input  placeholder='entre her....' value={descriptions}
      onChange={(e)=>setDescriptions(e.target.value)}/>
  </form><br/>

  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>imageSrc:</p>
  <input  placeholder='entre her.... ' value={imageSrcs}
      onChange={(e)=>setImageSrcs(e.target.value)}/>
  </form ><br/>

  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>Rate:</p>
  <input  placeholder='entre her.... ' value={rates}
      onChange={handleChange}/>
  </form ><br/>

 
  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>VideoUrl:</p>
  <input  placeholder='entre her.... ' value={videoUrls}
      onChange={(e)=>setVideoUrls(e.target.value)}/>
  </form ><br/>

  <form style={{display:'flex',justifyContent:'space-between'}}>
  <p>Genre:</p>
  <input  placeholder='entre her.... ' value={genres}
      onChange={(e)=>setGenres(e.target.value)}/>
  </form ><br/>
  <button className='btn' onClick={()=>add()} >Add</button>
  
  </div>
    </>
  )
}

export default MovieAdd
