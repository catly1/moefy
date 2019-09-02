import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            gender: '',
            month: '',
            day: '',
            year: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            gender: this.state.gender,
            dob: `${this.state.month} ${this.state.day}, ${this.state.year}`
        }
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const signup = (
        <form onSubmit={this.handleSubmit} className="login-form-box">
            <br />
            <h2>Sign up with your email address</h2>
            {this.renderErrors()}
            <div className="login-form">
                <br />
                <label>Email:
                            <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                    />
                </label>
                <br />
                <label>Password:
                            <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                    />
                </label>
                <br />
                <label>Username:
                                <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        className="login-input"
                    />
                </label>
                <br />
                <div>
                    <label>Date of birth</label>
                    <select name="DOBMonth" value={this.state.month} onChange={this.update("month")}>
                        <option>- Month -</option>
                        <option value="January">January</option>
                        <option value="Febuary">Febuary</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    <input type="text"
                        value={this.state.day}
                        onChange={this.update('day')}
                    />
                    <input type="text"
                        value={this.state.year}
                        onChange={this.update('year')}
                    />
                </div>
                <br />
                <label><input type="radio" name="gender" value="male" onChange={this.update('gender')} /> Male</label>
                <label><input type="radio" name="gender" value="female" onChange={this.update('gender')} /> Female</label>
                <label><input type="radio" name="gender" value="other" onChange={this.update('gender')} /> Non-binary</label>
                <label><input type="radio" name="gender" value="weeb" onChange={this.update('gender')} /> Weeb</label>
                <br />

                    <p className="notice">By clicking on Sign up, you agree to Moefy's <a href="#">Terms and Conditions of Use</a>.</p>
                <button type="submit" className="signup-button">Sign up</button>
                    <p>Already have an account? {this.props.navLink }</p>
            </div>
        </form>
        )


        const login = (
        <form onSubmit={this.handleSubmit} className="login-form-box">
            <br />
            <h2>To continue, log in to Moefy.</h2>
            {this.renderErrors()}
            <div className="login-form">
                <br />
                <label>Email:
                            <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                    />
                </label>
                <br />
                <label>Password:
                            <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                    />
                </label>
                <br />
                <button type="submit" className="login-button">Log in</button>
                <div><a href="#">Forgot your password?</a>
                </div>
                    
                <div className="showSignup">
                    <h2>Don't have an account?</h2>
                    {this.props.navLink}
                </div>
            </div>
        </form>
        )


        let display

        if (this.props.formType === "signup") {
            display = signup
        } else if (this.props.formType === "login") {
            display = login
        }

        return (
            <div className="login-form-container">
                {display}
            </div>
        );
    }
}

export default SessionForm;
