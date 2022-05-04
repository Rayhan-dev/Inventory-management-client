import React from "react";

const Loading = () => {
  return (
    <div className="my-5 py-5 d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
