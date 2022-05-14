import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import "./Businessitem.css";

function Businessitem(props) {
  return (
    <div className="listItem">
      <img src="" alt={props.name}/>
      <h4>{props.name}</h4>
      <h6>{props.address}</h6>
      <h5>{props.score}</h5>
      <Link to={`/Businessprofile/${props.url}`}>
      <Button variant="contained">Ver</Button>
      </Link>
    </div>
  );
}

export default Businessitem;
