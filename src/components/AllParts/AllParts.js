import React, { Component } from "react";
import Part from "../Part/Part";

class AllParts extends Component {

  render() {
    return (
      <div>
        {this.props.partsArr.length ? (
          this.props.partsArr.map(part => {
            return <Part part={part} key={part.id} updateFavStatus={this.props.updateFavStatus}
            deletePart={this.props.deletePart}/>;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default AllParts;
