import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../image/header.png';
import logo from '../../image/logo2.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { SpaceBar } from '@material-ui/icons';

const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/home"><img className="logo" src={logo} alt="" /></Link>
                    </li>
                    <li className="news">
                        <Link to="/home">News</Link>
                    </li>
                    <li className="destination">
                        <Link to="/home">Destination</Link>
                    </li>
                    <li className="blog">
                        <Link className="btn-book">Blog</Link>
                    </li>
                    <li className="contact">
                        <Link>Contact</Link>
                    </li>
                    <li>
                        <button className="btn-login"><Link to="/login"><b className="login-text">Login</b></Link></button>
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <h1>TRAVEL GURU</h1>
                <h2 className="text-style">Travel Guru offers Quality Travelling All Over Bangladesh. If You Are A Passionate Traveler, Travel Guru Will Be The Best Website For Your Travelling. Travel Now With Us!</h2>
            </div>
            <div>
                <button className="booking-btn"><Link to="/schedule"><h4 className="booking-text">Booking</h4></Link><p className="arrow"><Link to="/schedule"><b className="login-text"><ArrowForwardIcon></ArrowForwardIcon></b></Link></p></button> 
            </div>
        </div>
    );
};

export default Header;