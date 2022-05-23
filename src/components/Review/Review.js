import Rating from "@mui/material/Rating";
import "./Review.css";
import defaultUser from "../../images/default-user.jpeg";

function Review({ image, name, rating, reviewdate, text }) {
  return (
    <div className="review-container">
      <div className="user-review">
        <img src={image} onError={({ target }) => {target.src = defaultUser;}}/>
        <p>{name}</p>
      </div>
      <Rating value={rating} readOnly />
      <p>{reviewdate}</p>
      <p>{text}</p>
    </div>
  );
}
export default Review;
