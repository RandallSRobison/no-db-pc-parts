import React, { Component } from "react";
import "./Part.css";

class Part extends Component {
  render() {
    return (
      <>
        <div className="part-cards">
          <img src={this.props.part.image} alt="part-pic" id="images"/>
          <div className='row-details'>
            <p className="card-text">Name:</p>
            <p className="card-text">{this.props.part.name}</p>
          </div>
          <div className='row-details'>
            <p className="card-text">Type:</p>
            <p className="card-text">{this.props.part.type}</p>
          </div>
          <div className='row-details'> 
            <p className="card-text">Make:</p>
            <p className="card-text">{this.props.part.make}</p>
        </div>
          <div className='row-details'>
          <button className='fav-button'
            style={{
              background: "none",
              border: "none",
              outline: "none",
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
                  color: "#F46036"
                }}
              />
            ) : (
              <i className="far fa-heart" />
            )}
          </button>
          <button className="delete-button"
            style={{
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
      </>
    );
  }
}

export default Part;
