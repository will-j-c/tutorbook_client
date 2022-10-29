function StarRating(props) {
  const { stars } = props;
  const roundedStars = Math.round(stars);
  let filledStars = [];
  
  if (roundedStars) {
    filledStars = [...Array(roundedStars).keys()];
  }
  
  const unfilledStars = [...Array(5 - roundedStars).keys()];
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center">
        {filledStars.map((star) => {
          return (
            <svg
              className="mx-1 w-4 h-4 fill-bodyText"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          );
        })}
        {unfilledStars.map((star) => {
          return (
            <svg
              className="mx-1 w-4 h-4 fill-bodyText/50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;
