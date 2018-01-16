import React from 'react';
import './login.css';

export default function Login() {
    return (
        <section className="login-form-section">
        <h2>Login</h2>
        <div className="login-form">
            <form>
                <label>Username</label>
                <input type="text" id="fname" name="firstname" placeholder="Your username.."></input>
                <label>Password</label>
                <input type="text" id="fname" name="firstname" placeholder="Your password.."></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
        </section>
    );
}
