import React,{useEffect , useState} from 'react'
import "./Player.css"
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import {useParams , useNavigate} from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Zjc3MGFmNWZiNWY1NjU4ODBkMDg4NDQ5Y2E2MTk2MiIsIm5iZiI6MS43NDYyODAzNDAzOTgwMDAyZSs5LCJzdWIiOiI2ODE2MWY5NDQyMjJkOTljMzIwODljY2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GcohrzFE9bNo-npt-18BjZ8rPXvGxF9pR5-AvBE7Em0'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.response.results[0]))
    .catch(err => console.error(err));
  },[])
  


  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
//18-24 ,27-31