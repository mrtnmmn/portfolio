import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

import './StarRating.css'

function StarRating(props) {

  const [stars, setStars] = useState([])

  useEffect(() => {
    
    let auxList = []

    for(let i = 0; Math.floor(props.rating) > i; i++) {
      auxList.push(<FontAwesomeIcon icon={faStar} />)
    }

    if (props.rating % 1 !== 0) {
      auxList.push(<FontAwesomeIcon icon={faStarHalfStroke} />)
    }

    while(auxList.length < 5) {
      console.log("adding")
      auxList.push(<FontAwesomeIcon icon={faStarRegular} />)
    }

    setStars(auxList)

  }, [props.rating])

  return (  
    <div>
      <span className="label">{props.label}:</span>
      {stars.map((item) => (item))}
    </div>
  );
}

export default StarRating;