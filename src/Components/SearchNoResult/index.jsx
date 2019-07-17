import React from "react";
import PageNotResult from "./search_no_result.png";

function NotFound() {
  return (
    <div className="text-center">
      <img src={PageNotResult} alt="NoImg" width="50%" height="50%" />
    </div>
  );
}

export default NotFound;
