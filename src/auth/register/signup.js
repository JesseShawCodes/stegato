import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import Input from '../input'

export default function Signup() {
    return (
        <section className="signup-form-section">
        <h2>Sign Up</h2>
        <div className="signup-form">
            <form>
                <label htmlFor="fname">First Name</label>
                <Field component={Input} id="fname" name="firstname" placeholder="Your name.." />
                <label htmlFor="lname">Last Name</label>
                <Field component={Input} id="lname" name="lastname" placeholder="Your last name.." />
                <label htmlFor="fname">Username</label>
                <Field component={Input} id="fname" name="firstname" placeholder="Your username.." />
                <label htmlFor="lname">Email</label>
                <Field component={Input} id="lname" name="lastname" placeholder="Your email.." />
                <label htmlFor="fname">Password</label>
                <Field component={Input} id="fname" name="firstname" placeholder="Your password.." />
                <label htmlFor="lname">Confirm Password</label>
                <Field component={Input} id="lname" name="lastname" placeholder="Your password again.." />
                <input type="submit" value="Submit" />
            </form>
        </div>
        </section>
    );
}
