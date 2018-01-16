import React from 'react';
import './signup.css';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

export default function Signup() {
    return (
        <section className="signup-form-section">
        <h2>Sign Up</h2>
        <div className="signup-form">
            <form>
                <label htmlFor="fname">First Name</label>
                <Field component={Input} id="fname" name="firstname" placeholder="Your name.."></input>
                <label htmlFor="lname">Last Name</label>
                <Field component={Input} id="lname" name="lastname" placeholder="Your last name.."></input>
                <label htmlFor="fname">Username</label>
                <Field component={Input} id="fname" name="firstname" placeholder="Your username.."></input>
                <label htmlFor="lname">Email</label>
                <Field component={Input} id="lname" name="lastname" placeholder="Your email.."></input>
                <label htmlFor="fname">Password</label>
                <Field component={Input} id="fname" name="firstname" placeholder="Your password.."></input>
                <label htmlFor="lname">Confirm Password</label>
                <Field component={Input} id="lname" name="lastname" placeholder="Your password again.."></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
        </section>
    );
}
