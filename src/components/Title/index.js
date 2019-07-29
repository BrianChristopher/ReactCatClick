import React from "react";
// import "./style.css";

function Title(props) {
  return (
    <div className="container">
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">Cute Cat Click Conundrum</h1>
          <p className="lead">Pick pussycats purr-fectly.</p>
        </div>
        <div id="scoreboard">
          <div className="row">
            <div className="col-lg-6" />
            <div className="col-lg-3">
              <h2>
                Your score:
                <span className="badge badge-secondary m6">
                  {props.currentScore}
                </span>
              </h2>
            </div>
            <div className="col-lg-3">
              <h2>
                High score:
                <span className="badge badge-secondary">
                  {props.highScore}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
