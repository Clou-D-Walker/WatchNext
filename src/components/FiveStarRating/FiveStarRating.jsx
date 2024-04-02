import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

function FiveStarRating({ rating }) {
  // create the rating array
  const StarList = [];
  // store number of filled stars
  const starFillCount = Math.floor(rating);
  // Stores yes or no if there is half star
  const HalfStar = rating - parseInt(rating) >= 0.5;
  // Store the number of empty stars
  const emptyStarCount = 5 - starFillCount - (HalfStar ? 1 : 0);
  // Push the filled star icons
  for (let i = 1; i <= starFillCount; i++) {
    StarList.push(<StarFill key={"star-fill" + i} />);
  }
  // push the half star if necessary
  if (HalfStar) {
    StarList.push(<StarHalf key={"star-half"} />);
  }
  // push the empty star if necessary
  for (let i = 1; i <= emptyStarCount; i++) {
    StarList.push(<StarEmpty key={"star-empty" + i} />);
  }
  // render the star icon array

  return <div>{StarList}</div>;
}

export default FiveStarRating;
