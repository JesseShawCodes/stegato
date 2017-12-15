import React from 'react';
import './login.css';

export default function Login() {
    return (
        <section className="login-form-section">
        <h2>Login</h2>
        <div className="login-form">
            <form>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                <label for="fname">Username</label>
                <input type="text" id="fname" name="firstname" placeholder="Your username.."></input>
                <label for="lname">Email</label>
                <input type="text" id="lname" name="lastname" placeholder="Your email.."></input>
                <label for="fname">Password</label>
                <input type="text" id="fname" name="firstname" placeholder="Your password.."></input>
                <label for="lname">Confirm Password</label>
                <input type="text" id="lname" name="lastname" placeholder="Your password again.."></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
        </section>
    );
}
