import React, { Component } from "react";

class Part extends Component {
  render() {
    return (
      <div className="part-container">
        <img src={this.props.part.image} alt="pic" />
        <div className="part-card">SKU: {this.props.part.name}</div>
        <div className="part-card">Type: {this.props.part.type}</div>
        <div className="part-card">Make:{this.props.part.make}</div>
        <button className="part-card">fav{this.props.part.favStatus}</button>
      </div>
    );
  }
}

export default Part;
