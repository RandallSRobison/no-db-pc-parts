import React, { Component } from "react";
import Part from "../Part/Part";

class FavoriteParts extends Component {

  render() {
    let filteredArray = this.props.partsArr.filter(part => part.favStatus);
    return (
      <div>
        <h2>favorite parts</h2>
        {filteredArray.length ? (
          filteredArray.map(part => {
            return <Part part={part} key={part.id} />;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default FavoriteParts;
