import React, { Component } from 'react';
import Profile from './profile.jpg'
import './Header.css'

const heroImage = {
    backgroundImage: `url(${Profile})`,
    height: '60vh',
    backgroundSize: 'cover'
}
class Header extends Component {
    render() {
        return (
            <header style={heroImage}>
                <h1>{this.props.title}</h1>
                <p>Développeuse Front-end.</p>
                <a href="#button">Mes Réalisations</a>
            </header>
        )
    }
}

export default Header