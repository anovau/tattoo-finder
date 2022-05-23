import {useParams } from "react-router";
import {useState, useEffect} from "react";
import axios from "axios";
import Searchbar from "../../components/Searchbar/Searchbar";
import Review from "../../components/Review/Review";
import Rating from '@mui/material/Rating';
import "./Businessdetails.css";

function Businessdetails() {
  let {profileId} = useParams();
  const [business, setBusiness] = useState();
  const apiKey = "";
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  let urlDetails = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${profileId}&key=${apiKey}`;
  
  useEffect(() => {
    axios.get(proxyurl + urlDetails).then((res) => {
      setBusiness(res.data);
    });

  }, []);

    return (
      <>
      <Searchbar/>
      <div className="main-container">
      <div className="business-container">
      <h1 className="business-name">{business?.result.name}</h1>
      <p><b>Dirección: </b>{business?.result.formatted_address}</p>
      <p><b>Web: </b>{business?.result.website}</p>
      <p><b>Teléfono: </b>{business?.result.formatted_phone_number}</p>
      <p><b>Horario: </b>{business?.result.opening_hours.weekday_text}</p>
      <hr/>
      <div className="score-container">
      <Rating value={business?.result.rating} readOnly />
      <p>{business?.result.rating}</p>
      <p>{business?.result.user_ratings_total} reseñas</p>
      </div>
      <hr/>
      </div>
      <h4>Últimas reseñas:</h4>
      <Review 
      image={business?.result.reviews[1].profile_photo_url} 
      name={business?.result.reviews[1].author_name}
      rating={business?.result.reviews[1].rating}
      reviewdate={business?.result.reviews[1].relative_time_description}
      text={business?.result.reviews[1].text}/>

      <Review 
      image={business?.result.reviews[2].profile_photo_url} 
      name={business?.result.reviews[2].author_name}
      rating={business?.result.reviews[2].rating}
      reviewdate={business?.result.reviews[2].relative_time_description}
      text={business?.result.reviews[2].text}/>

      <Review 
      image={business?.result.reviews[3].profile_photo_url} 
      name={business?.result.reviews[3].author_name}
      rating={business?.result.reviews[3].rating}
      reviewdate={business?.result.reviews[3].relative_time_description}
      text={business?.result.reviews[3].text}/>

      <Review 
      image={business?.result.reviews[4].profile_photo_url} 
      name={business?.result.reviews[4].author_name}
      rating={business?.result.reviews[4].rating}
      reviewdate={business?.result.reviews[4].relative_time_description}
      text={business?.result.reviews[4].text}/>
      </div>
      </>
    );
  }
  
  export default Businessdetails;