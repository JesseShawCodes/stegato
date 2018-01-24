import React from 'react';
import './login.css';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {Redirect} from 'react-router-dom';

export class Login extends React.Component {
    onSubmit(values) {
        console.log("Logging in from Login Component")
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        console.log(this.props.loggedIn)
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        if (this.props.loggedIn) {
            return <Redirect to="/search" />;
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="username" className="username-label">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Login);
