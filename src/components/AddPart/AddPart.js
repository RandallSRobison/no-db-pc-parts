import React, { Component } from "react";

class AddPart extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      type: "",
      make: "",
      image: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  addPart = e => {
    e.preventDefault();

    const { name, type, make, image } = this.state;
    console.log(name, type, make, image)
    let newPart = {
      name,
      type,
      make,
      image
    };

    this.props.addPart(newPart);

    this.setState({
      name: "",
      type: "",
      make: "",
      image: ""
    });
  };

  render() {
    // console.log(this.props);
    const { name, type, make, image } = this.state;
    return (
      <div className="form container">
        <form className="form" onSubmit={this.addPart}>
          <h1>new part creator</h1>
          <input
            name="name"
            type="text"
            placeholder={`new part name: i.e. 9900K `}
            onChange={this.handleChange}
            value={name}
          />
          <input
            name="type"
            type="text"
            placeholder="type of part: i.e. CPU"
            onChange={this.handleChange}
            value={type}
          />
          <input
            name="make"
            type="text"
            placeholder="company: i.e. Intel"
            onChange={this.handleChange}
            value={make}
          />
          <input
            name="image"
            type="text"
            placeholder="image of part"
            onChange={this.handleChange}
            value={image}
          />
          <button className='add-part-button'>
              add part
          </button>
        </form>
      </div>
    );
  }
}

export default AddPart;
