import React, { Component } from "react";

import "./ParticipateStyle.css";

class ParticipateApp extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Curbmap Participate App</h1>
        <div className="container">
          <div className="item">
            <p>
              <i>Picture area</i>
            </p>
          </div>
          <div className="item">
            <p>
              <i>Times area (?)</i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ParticipateApp;
