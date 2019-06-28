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
    const { val, name } = e.target;
    this.setState({
      [name]: val
    });
  };

  addPart = e => {
    e.preventDefault();

    const { name, type, make, image } = this.state;

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
    console.log(this.props);
    const { name, type, make, image } = this.state;
    return (
      <div className="form container">
        <form className="form"
            onSubmit={this.addPart}>
            <h1>new part creator</h1>
            <input
            name='name'
            type='text'
            placeholder={`new part name: i.e. 9900K `}
            onChange={this.handleChange}
            value={name}
            />
            <input
            name='type'
            type='text'
            placeholder='type of part: i.e. CPU'
            onChange={this.handleChange}
            />
            <input 
            name='make'
            type='text'
            placeholder=''
            />

        </form>
      </div>
    );
  }
}

export default AddPart;
