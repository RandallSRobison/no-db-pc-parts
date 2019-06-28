import React, { Component } from "react";
import Part from "../Part/Part";

class AllParts extends Component {

  render() {
    return (
      <div>
        <h2>all parts</h2>
        {this.props.partsArr.length ? (
          this.props.partsArr.map(part => {
            return <Part part={part} key={part.id} />;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default AllParts;
