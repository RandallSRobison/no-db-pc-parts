import React, { Component } from 'react'
import './Header.css'
import Logo from './no-db-project-logo.png'

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
                <div className="logo">
                    <img src={Logo} alt=""onClick={() => this.props.handleChangeView('AllParts')}/>
                </div>
                <div className="button-container">
                    <button id="grow" onClick={() => this.props.handleChangeView('AllParts')}>all parts</button>
                    <button className="grow" onClick={() => this.props.handleChangeView('FavoriteParts')}>favorite parts</button>
                    <button className="grow" onClick={() => this.props.handleChangeView('AddPart')}>add new part</button>
                </div>
            </div>
        )
    }
}

export default Header