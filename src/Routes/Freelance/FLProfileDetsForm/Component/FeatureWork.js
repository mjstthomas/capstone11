import React from "react";
import { Link } from "react-router-dom";
import Cancel from "../../../../Components/Utilities/DenyButton/DenyButton";
import "./FeatureWork.css";

function FeatureWork(props) {
  return (
    <article className="feature-link">
      <Link to={props.url}>{props.url}</Link>
      <Cancel
        onClick={(e) => {
          e.preventDefault();
          props.removeWork(props.index);
        }}
      />
    </article>
  );
}
export default FeatureWork;
