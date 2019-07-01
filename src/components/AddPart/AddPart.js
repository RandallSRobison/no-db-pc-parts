import React, { Component } from "react";
import "./AddPart.css";

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
    console.log(name, type, make, image);
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
    this.props.handleViewOnAdd();
  };

  render() {
    // console.log(this.props);
    const { name, type, make, image } = this.state;
    return (
      <section className="form-container">
          <form className="form" onSubmit={this.addPart}>
            new part creator
            <input className='input-field'
              name="name"
              type="text"
              placeholder="name"
              onFocus={(e) => e.target.placeholder = ''}
              onBlur={(e) => e.target.placeholder = 'name'}
              onChange={this.handleChange}
              value={name}
            />
            <input className='input-field'
              name="type"
              type="text"
              placeholder="type"
              onFocus={(e) => e.target.placeholder = ''}
              onBlur={(e) => e.target.placeholder = 'type'}
              onChange={this.handleChange}
              value={type}
            />
            <input className='input-field'
              name="make"
              type="text"
              placeholder="company"
              onFocus={(e) => e.target.placeholder = ''}
              onBlur={(e) => e.target.placeholder = 'company'}
              onChange={this.handleChange}
              value={make}
            />
            <input className='input-field'
              name="image"
              type="text"
              placeholder="image url"
              onFocus={(e) => e.target.placeholder = ''}
              onBlur={(e) => e.target.placeholder = 'image url'}
              onChange={this.handleChange}
              value={image}
            />
            <button className="add-part-button">add part</button>
          </form>
        </section>
    );
  }
}

export default AddPart;
