import React,{useEffect, useState} from 'react'
import {useParams } from 'react-router'
import {BackBtn} from './App'
import * as mui from '@mui/material'
import * as Icons from '@mui/icons-material';
import {Link} from 'react-router-dom'
import {Counter} from './App'
import TopIcon from '@mui/icons-material/KeyboardArrowUp';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Button = mui.Button
function MovieDetail({movies}) {
    const [show, setShow] = useState(false)
    const {movieId} = useParams()
    let idVal = movieId<= movies.length? [{...movies[movieId], id: movieId}] : [{id:"",name:"", poster:"",trailer:"", category:"", watchOn:"", summary:"", releaseDate:"", genre:"", counts:""}]
    
    const [movie, setMovie] = useState(idVal)

    useEffect(() => {    
        setMovie(idVal)
     }, [movieId])

    const [{id,name, poster,trailer, category, watchOn, summary, releaseDate, genre, counts}] = movie
     console.log(movieId<=movies.length)
    return (<div>
       {movieId <= movies.length ? <div id={id} className="App" >
       <h2 style={{margin: '1px', padding:'0px', textAlign:"left"}} ><BackBtn/> {name}</h2>
       {/* video   */}
      
   <div  key={id}>
     <h1 className="name">{name}</h1>
     <div  className="movieCon-in-detail "> 
       <div className="container">
       <Link className="App-link" to={`./${id}`}>
           <img src={poster} className="contentImg" alt={name} title={name} />
       </Link>       
       </div>        
       <div className="content-in-detail ">           
         
         <p> <a href={`https:youtu.be/${trailer.split("/")[trailer.split("/").length-1]}`} className="App-link"> Watch Trailer  </a></p>
         <p> category :  {category} </p>
         <p> Release Date : {releaseDate} </p>
         <p> Genre : {genre.join(", ")}</p>
         {/* <details><summary> Description </summary> <p >{summary}</p></details>  */}
         <p> Description : {!show ? <span>{summary.substring(0, 50)}... 
         <Button 
         variant = "text"
         sx={{color:"#61dafb"}}
         onClick = {(e)=>setShow(true)}
         >
          <Icons.KeyboardArrowDown /> Read More</Button> </span> : <span>{summary} 
           <Button
           variant="text"
           color = "warning"
           onClick = {(e)=>setShow(false) }
           >
          <TopIcon/> Read Less</Button></span> } </p>
         <p> Watch On <a className="App-link" href={watchOn.link} target="_blank" rel="noopener noreferrer" > {watchOn.name} </a></p>
       </div>
      
     </div>
   </div>

   </div>
: <div><p>ID not Found</p></div>
}</div>)
}

export default MovieDetail
