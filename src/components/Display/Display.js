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
        .catch(err => {
          console.log('error', err);
        })
      });
    });
  }

  addPart(part) {
    axios.post("/api/part", part).then(res => {
      this.setState({
        partsArr: res.data
        .catch(err => {
          console.log('error', err);
        })
      });
    });
  }

  deletePart(id) {
      console.log('hit delete')
    axios.delete(`/api/part/${id}`).then(res => {
      this.setState({
        partsArr: res.data
        .catch(err => {
          console.log('error', err);
        })
      });
    });
  }

  updateFavStatus(id, status) {
    axios.put(`/api/part/${id}`, { status }).then(res => {
      this.setState({
        partsArr: res.data
        .catch(err => {
          console.log('error', err);
        })
      });
    });
  }

  handleChangeView(view) {
    this.setState({
      view: view
      .catch(err => {
        console.log('error', err);
      })
    });
  }

handleViewOnAdd(view) {
    this.setState({
        view: "AllParts"
        .catch(err => {
          console.log('error', err);
        })
    })
}

  render() {
    return (
      <div className="display-col">
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
