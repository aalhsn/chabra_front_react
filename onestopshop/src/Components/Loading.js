import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

const Loading = () => (
  <div className="spinner mx-automt-5 text-center">
    <FontAwesomeIcon icon={faSeedling} spin size="4x" />
  </div>
);

export default Loading;