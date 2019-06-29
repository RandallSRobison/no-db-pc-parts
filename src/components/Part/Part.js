import React, { Component } from "react";
import "./Part.css";

class Part extends Component {
  render() {
    return (
      <div className="part-container">
        <div className="part-cards">
          <img src={this.props.part.image} alt="part-pic" id="images"/>
          <div className="card-text">Name: {this.props.part.name}</div>
          <div className="card-text">Type: {this.props.part.type}</div>
          <div className="card-text">Make: {this.props.part.make}</div>
          <button
            style={{
              background: "none",
              border: "none",
              outline: "none"
            }}
            onClick={() => {
              this.props.updateFavStatus(
                this.props.part.id,
                !this.props.part.favStatus
              );
            }}
          >
            {this.props.part.favStatus ? (
              <i
                className="fas fa-heart"
                style={{
                  color: "red"
                }}
              />
            ) : (
              <i className="far fa-heart" />
            )}
          </button>
          <button className="delete-button"
            style={{
              background: "none",
              border: "none",
              outline: "none"
            }}
            onClick={() => {
              this.props.deletePart(this.props.part.id);
            }}
          >
            delete
          </button>
        </div>
      </div>
    );
  }
}

export default Part;
