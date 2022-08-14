import { FC, useEffect } from "react";
import "./LoadingSpinner.scss";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const LoadingSpinner: FC = () => {
  return (
    <div className="LoadingSpinner">
      <span>
        Searching...
        <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
      </span>
    </div>
  );
};
