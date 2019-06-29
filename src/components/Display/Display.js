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
      partsArr: []
    };
    this.deletePart = this.deletePart.bind(this);
    this.updateFavStatus = this.updateFavStatus.bind(this);
    this.handleChangeView = this.handleChangeView.bind(this);
    this.addPart = this.addPart.bind(this);
    this.handleViewOnAdd = this.handleViewOnAdd.bind(this)
  }

  componentDidMount() {
    axios.get("/api/parts").then(res => {
      this.setState({
        partsArr: res.data
      });
    });
  }

  addPart(part) {
    axios.post("/api/part", part).then(res => {
      this.setState({
        partsArr: res.data
      });
    });
  }

  deletePart(id) {
      console.log('hit delete')
    axios.delete(`/api/part/${id}`).then(res => {
      this.setState({
        partsArr: res.data
      });
    });
  }

  updateFavStatus(id, status) {
    axios.put(`/api/part/${id}`, { status }).then(res => {
      this.setState({
        partsArr: res.data
      });
    });
  }

  handleChangeView(view) {
    this.setState({
      view: view
    });
  }

handleViewOnAdd(view) {
    this.setState({
        view: "AllParts"
    })
}

  render() {
    return (
      <div>
        <Header handleChangeView={this.handleChangeView} />
        {this.state.view === "AllParts" ? (
          <AllParts
            updateFavStatus={this.updateFavStatus}
            partsArr={this.state.partsArr}
            deletePart={this.deletePart}
          />
        ) : this.state.view === "FavoriteParts" ? (
          <FavoriteParts
            updateFavStatus={this.updateFavStatus}
            partsArr={this.state.partsArr}
            deletePart={this.deletePart}
          />
        ) : (
          <AddPart addPart={this.addPart} handleViewOnAdd={this.handleViewOnAdd}/>
        )}
      </div>
    );
  }
}

export default Display;
