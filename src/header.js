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
                    <a href="/">Home</a>
                    <a href="/search">Search</a>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                    <a href="/logout">Logout</a>
                </nav>
            </div>
        </header>
    );
}
