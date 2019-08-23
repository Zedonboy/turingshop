import * as React from "react";

export default class ScrollUpBtn extends React.Component {
  render() {
    return (
      <div className="btn-back-to-top" id="myBtn" style={{ display: "none" }}>
        <span className="symbol-btn-back-to-top">
          <i className="zmdi zmdi-chevron-up" />
        </span>
      </div>
    );
  }
}
