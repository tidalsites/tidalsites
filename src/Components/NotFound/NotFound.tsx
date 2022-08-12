import { FC } from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

export const NotFound: FC = () => {
  return (
    <div className="NotFound">
      <p>We're sorry. The page you are looking for was not found.</p>
      <Link to="/">Return Home</Link>
    </div>
  );
};
