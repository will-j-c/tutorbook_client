import StarRating from './StarRating';

function ReviewCard(props) {
  const { review } = props;
  return (
    <blockquote className="text-titleText p-4 bg-primary rounded">
      <header className="sm:flex sm:items-center">
        <StarRating stars={review?.rating} />
      </header>

      <p className="mt-2 text-gray-700">
        {review?.review_text}
      </p>

      <footer className="mt-4">
        <p className="text-xs">John Doe - 12th January, 2024</p>
      </footer>
    </blockquote>
  );
}

export default ReviewCard;
