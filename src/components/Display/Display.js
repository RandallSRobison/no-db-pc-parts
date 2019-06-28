import React, { Component } from "react";
import Header from "../Header/Header";
import AllParts from "../AllParts/AllParts";
import AddPart from "../AddPart/AddPart";
import FavoriteParts from "../FavoriteParts/FavoriteParts";

import axios from "axios";

class Display extends Component {
  constructor() {
    super();
    this.state = {
      view: "AllParts",
      partsArr: [],
      favoritedPart: {},
      favStatus: false,
      part: {}
    };
    this.deletePart = this.deletePart.bind.bind(this)
    this.updateFavStatus = this.updateFavStatus.bind(this)
    this.handleChangeView = this.handleChangeView.bind(this)
    this.addPart = this.addPart.bind(this)
  }

  componentDidMount() {
    axios.get("/api/parts").then(res => {
      console.log(res.data);
      this.setState({
        partsArr: res.data
      });
    });
  }

  addPart(part) {
    axios.post("/api/part", part).then(res => {
      console.log(res.data);
      this.setState({
        partsArr: res.data
      });
    });
  }

  deletePart(id) {
    axios.delete(`/api/part/${id}`).then(res => {
      console.log(res.data);
      this.setState({
        partsArr: res.data
      });
    });
  }

  updateFavStatus(id, part) {
    axios.put(`/api/part/${id}`, part).then(res => {
      console.log(res.data);
      this.setState({
        partsArr: res.data,
        favoritedPart: {}
      });
    });
  }

  handleChangeView(view) {
  this.setState({
      view: view
  })
}
// NEXT ON TO DO: COMPONENTS. THEY DO NOT HAVE EXPORTS, THAT IS WHAT IS CAUSING ERROR.
  render() {
    return (
      <div>
        <Header handleChangeView={this.handleChangeView} />
        {this.state.view === "AllParts" ? (
          <AllParts partsArr={this.state.partsArr}/>
        ) : this.state.view === "FavoriteParts" ? (
          <FavoriteParts partsArr={this.state.partsArr}/>
        ) : (
          <AddPart />
        )}
      </div>
    );
  }
}

export default Display;
