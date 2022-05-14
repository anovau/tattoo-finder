import { useParams } from "react-router";
import Searchbar from "../components/Searchbar";

function Businessprofile() {
  let profileId = useParams();
  console.log(profileId);
    return (
      <>
      <Searchbar/>
      <p>Perfil del tatuador</p>
      </>
    );
  }
  
  export default Businessprofile;
  