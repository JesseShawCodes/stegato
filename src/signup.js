import React from 'react';
import './signup.css';

export default function Signup() {
    return (
        <section className="signup-form-section">
        <h2>Sign Up</h2>
        <div className="signup-form">
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                <label htmlFor="fname">Username</label>
                <input type="text" id="fname" name="firstname" placeholder="Your username.."></input>
                <label htmlFor="lname">Email</label>
                <input type="text" id="lname" name="lastname" placeholder="Your email.."></input>
                <label htmlFor="fname">Password</label>
                <input type="text" id="fname" name="firstname" placeholder="Your password.."></input>
                <label htmlFor="lname">Confirm Password</label>
                <input type="text" id="lname" name="lastname" placeholder="Your password again.."></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
        </section>
    );
}
