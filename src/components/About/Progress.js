import React from "react";

const Progress = (props) => {
  return (
    <div className="skill-content-each">
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={props.styles}
        />
      </div>
      <div className="progressbar-name">
        <span>{props.skillName}</span>
      </div>
    </div>
  );
};

export default Progress;