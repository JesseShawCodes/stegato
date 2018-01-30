import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import Input from '../input'
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';


export class Signup extends React.Component {
    onSubmit(values) {
        console.log(values)
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="firstName" className="form-label">First name</label>
                <Field component={Input} type="text" name="firstName" validate={[required, nonEmpty, isTrimmed]}/>
                <label htmlFor="lastName" className="form-label">Last name</label>
                <Field component={Input} type="text" name="lastName" validate={[required, nonEmpty, isTrimmed]}/>
                <label htmlFor="username" className="form-label">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password" className="form-label">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, length({min: 10, max: 72}), isTrimmed]}
                />
                <label htmlFor="passwordConfirm" className="form-label">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matches('password')]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(Signup);