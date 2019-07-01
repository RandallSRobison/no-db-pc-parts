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
        <h2>Oops! Nothing to show.. yet? Um.. wow this is embarrassing. Please don't look at me.</h2>
    )
    return (
      <section className="all-parts-container">
        {allParts}
      </section>
    );
  }
}

export default AllParts;
