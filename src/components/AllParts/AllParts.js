import React, { Component } from "react";
import Part from "../Part/Part";
import './AllParts.css';

class AllParts extends Component {
  render() {
    const allParts = this.props.partsArr.length ? (
        this.props.partsArr.map(part => (
            <Part part={part} key={part.id} updateFavStatus={this.props.updateFavStatus} deletePart={this.props.deletePart}/>
        ))
    ) : (
        <div>Oops! Nothing to show.. yet? Um.. wow this is embarrassing. Please don't look at me.</div>
    )
    return (
      <div className="all-parts-container">
        {allParts}
      </div>
    );
  }
}

export default AllParts;
