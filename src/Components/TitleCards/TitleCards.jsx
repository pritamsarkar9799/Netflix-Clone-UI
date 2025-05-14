import React, { useRef, useEffect,useState } from 'react'
import "./TitleCards.css"
import cards_data from "../../assets/cards/Cards_data"
import {Link} from 'react-router-dom'


const TitleCards = ({ title, category }) => {

  const [apiData , setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Zjc3MGFmNWZiNWY1NjU4ODBkMDg4NDQ5Y2E2MTk2MiIsIm5iZiI6MS43NDYyODAzNDAzOTgwMDAyZSs5LCJzdWIiOiI2ODE2MWY5NDQyMjJkOTljMzIwODljY2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GcohrzFE9bNo-npt-18BjZ8rPXvGxF9pR5-AvBE7Em0'
    }
  };


  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category: "now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
            
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
//12-18 , 28-31