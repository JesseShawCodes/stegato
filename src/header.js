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
                    <a href="">Account</a>
                    <a href="">Login</a>
                </nav>
            </div>
        </header>
    );
}
