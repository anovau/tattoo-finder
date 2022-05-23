import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Businessitem.css";
import imgDefault from "../../images/img-default.png";
import Rating from "@mui/material/Rating";

function Businessitem(props) {
  return (
    <div className="listItem">
      <img
        className="logo"
        src={props.image}
        alt={props.name}
        onError={({ target }) => {
          target.src = imgDefault;
        }}
      />
      <div>
        <h4>{props.name}</h4>
        <h6>{props.address}</h6>
        <div className="score">
          <h5>{props.score} / 5</h5>
          <Rating value={props.score} readOnly precision={0.1} size="small" />
        </div>
        <Link to={`/Businessdetails/${props.url}`}>
          <Button className="button-ver" variant="contained">
            Ver
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Businessitem;
