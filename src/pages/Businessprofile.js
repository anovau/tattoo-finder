import {useParams } from "react-router";
import {useState, useEffect} from "react";
import axios from "axios";
import Searchbar from "../components/Searchbar";

function Businessprofile() {
  let {profileId} = useParams();
  const [profile, setProfile] = useState();
  console.log(profile);

  console.log("profileId: ", profileId);

  useEffect(() => {
    axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${profileId}&key=XXX`).then((res) => {
      setProfile(res.data);
    });
  }, []);

    return (
      <>
      <Searchbar/>
      <p>Perfil del tatuador{profile}</p>
      </>
    );
  }
  
  export default Businessprofile;
  