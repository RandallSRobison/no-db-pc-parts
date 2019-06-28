import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    constructor(){
        super()

        this.state = {
            view: "AllParts"
        }
    }

    render(){
        return(
            <div className="nav-bar">
                <button className="nav-buttons" onClick={() => this.props.handleChangeView('AllParts')}>
                    all parts
                </button>
                <button className="nav-buttons" onClick={() => this.props.handleChangeView('FavoriteParts')}>
                    favorite parts
                </button>
                <button className="nav-buttons" onClick={() => this.props.handleChangeView('AddPart')}>
                    add part
                </button>
            </div>
        )
    }
}

export default Header