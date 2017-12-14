import React from 'react';
import './header.css';

export default function Header() {
    return (
        <header>
            <div className="container clearfix">
                <h1 id="logo">
                    TMRD
                </h1>
                <nav>
                    <a href="">Home</a>
                    <a href="search.html">Search</a>
                    <a href="">Dashboard</a>
                    <a href="">Login</a>
                    <a href="">Logout</a>
                </nav>
            </div>
        </header>
    );
}
