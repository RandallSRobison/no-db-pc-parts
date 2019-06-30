import React, { Component } from "react";
import Part from "../Part/Part";
import './FavoriteParts.css'

class FavoriteParts extends Component {
  render() {
    let filteredArray = this.props.partsArr.filter(part => part.favStatus);
    const favoriteParts = filteredArray.length ? (
      filteredArray.map(part => (
        <Part
          part={part}
          key={part.id}
          updateFavStatus={this.props.updateFavStatus}
          deletePart={this.props.deletePart}
        />
        )
      )
    ) : (
      <div>Loading...</div>
    )
    return (
      <div className="fav-parts-container">
        {favoriteParts}
      </div>
    );
  }
}

export default FavoriteParts;
