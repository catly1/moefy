import React from 'react';
import { Link } from 'react-router-dom';
import { MdExpandMore } from "react-icons/md";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            username_validation: false,
            password: '',
            password_validation: false,
            email: '',
            email_validation: false,
            email2: '',
            email2_validation: false,
            gender: '',
            month: '',
            day: '',
            day_validation: false,
            year: '',
            year_validation: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkIfValid = this.checkIfValid.bind(this);
        this.renderEmailError = this.renderEmailError.bind(this);
        this.renderEmailNotAMatchError = this.renderEmailNotAMatchError.bind(this);
        this.renderPasswordError = this.renderPasswordError.bind(this);
        this.renderDayError = this.renderDayError.bind(this);
        this.renderYearError = this.renderYearError.bind(this);
        this.renderUsernameError = this.renderUsernameError.bind(this);
        this.renderMonthError= this.renderMonthError.bind(this);
    }

    update(field) {

        // let elementId = `${field}` + "-error"
        // let element = document.getElementById(elementId)
        // if (element) {
        //     element.classList.remove("active")
        // }

        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        // const errors = Array.from(document.getElementsByClassName("error"))
        // if (errors) errors.forEach(error => error.style.display = "none");

        // const postErrors = Array.from(document.getElementsByClassName("post-error"))
        // if (postErrors) postErrors.forEach(error => this.removeElement(error.id));

        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            gender: this.state.gender,
            dob: `${this.state.month} ${this.state.day}, ${this.state.year}`,
        }
        this.props.processForm(user);
    }

    componentDidUpdate(prevProps, prevState){

        //Removes old post-errors when there's a change to state
        if (this.state.email) {
            let element = document.getElementById("email-error")
            if (element) {
                element.classList.remove("active")
            }
        }
        if (this.state.email2) {
            let element = document.getElementById("email2-error")
            if (element) {
                element.classList.remove("active")
            }
        }
        if (this.state.password) {
            let element = document.getElementById("password-error")
            if (element) {
                element.classList.remove("active")
            }
        }
        if (this.state.username) {
            let element = document.getElementById("username-error")
            if (element) {
                element.classList.remove("active")
            }
        }

        if (this.state.day) {
            let element = document.getElementById("day-error")
            if (element) {
                element.classList.remove("active")
            } 
        }

        if (this.state.year) {
            let element = document.getElementById("year-error")
            if (element) {
                element.classList.remove("active")
            }
        }

        if (this.state.month) {
            let element = document.getElementById("month-error")
            if (element) {
                element.classList.remove("active")
            }
        }

    

        if (this.props.errors != prevProps.errors) {
            //Removes old post-errors when there's a change to props

            // const errors = Array.from(document.getElementsByClassName("error"))
            // if (errors) errors.forEach(error => this.removeElement(error.id))


            if (!prevState.email2 && !this.state.email2) {
                let element = document.getElementById("email2-error")
                if (element) {
                    element.textContent = "Please enter your email."
                    element.classList.add("active")
                    this.addRedBorder('email2')
                }
            } 

            //creates new post-errors
            const states = Object.keys(this.state).filter(key => !key.includes("validation"))
            this.props.errors.forEach(error => {
            states.forEach(state => {
                const cap = state[0].toUpperCase() + state.substr(1)
                if (error.includes(cap)){

                    let elementId = `${state}` + "-error"
                    let element = document.getElementById(elementId)
                    if(element) {
                        element.textContent = error
                        element.classList.add("active")
                        this.addRedBorder(state)
                        }
                    

                }



                if (error.includes("Dob")){
                    console.log(error)
                    this.handleDobAfter(prevState)
                }


            })
        })
        } 


    }

    handleDobAfter(prevState){
        if (!prevState.day) {
            this.addRedBorder("day")
            let dayElement = document.getElementById("day-error")
            dayElement.textContent = "Please enter a valid day of the month."
            dayElement.classList.add("active")
        }

        if (!prevState.year) {
            this.addRedBorder("year")
            let yearElement = document.getElementById("year-error")
            yearElement.textContent = "Please enter a valid year."
            yearElement.classList.add("active")
        }

        if (!prevState.month) {
            this.addRedBorder("month")
            let monthElement = document.getElementById("month-error")
            monthElement.textContent = "Please enter your birth month."
            monthElement.classList.add("active")
        }
    }

    renderErrors() {
        // return (
        //     <ul>
        //         {this.props.errors.map((error, i) => (
        //             <li key={`error-${i}`}>
        //                 {error}
        //             </li>
        //         ))}
        //     </ul>
        // );
    }

    checkIfValid(e){
        const elementId = e.currentTarget.id
        let validation = `${elementId}` + "_validation"
        this.setState({[validation]: true})
    }

    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    renderEmailError(){
        if (this.state.email_validation && !this.validateEmail(this.state.email)) {
            this.addRedBorder("email")
            return (
                    <label className="error" id="email-error">The email address you supplied is invalid.</label>
            );
        }
        if(this.state.email) this.removeRedBorder('email')
        return <label className="error hidden" id="email-error"></label>
    }

    renderEmailNotAMatchError(){
        if (this.state.email2 && (this.state.email != this.state.email2)) {
            this.addRedBorder("email2")
            return (
                <label className="error">Email address doesn't match.</label>
            );
        }

        if (this.state.email2_validation && !this.validateEmail(this.state.email2)) {
            this.addRedBorder("email2")
            return (
                <label className="error">The email address you supplied is invalid.</label>
            );
        }
        if (this.state.email2) this.removeRedBorder('email2')
        return <label className="error hidden" id="email2-error"></label>
    }

    renderPasswordError(){
        if (this.state.password_validation && this.state.password.length < 6) {
            this.addRedBorder("password")
            return(
                <label className="error">Your password is too short.</label>
            );
        }

        if (this.state.password) this.removeRedBorder('password')
        return <label className="error hidden" id="password-error"></label>

    }

    renderUsernameError() {

        if (this.state.username) this.removeRedBorder('username')
        return <label className="error hidden" id="username-error"></label>
    }

    renderMonthError(){

        return <label className="error hidden" id="month-error"></label>
    }

    renderDayError(){
        if (this.state.day_validation && (this.state.day > 32 || this.state.day < 0)) {
            this.addRedBorder("day")
            return (
                <label className="error">Please enter a valid day of the month.</label>
            );
        }

        if (this.state.day) this.removeRedBorder('day')
        return <label className="error hidden" id="day-error"></label>
    }

    renderYearError(){
        const currentTime = new Date()

        if (this.state.year_validation && (this.state.year < 1900 || this.state.year > 9999)) {
            this.addRedBorder("year")
            return (
                <label className="error">Please enter a valid year.</label>
            );
        }

        if (this.state.year_validation && (this.state.year > (currentTime.getFullYear() - 13) && this.state.year < 9999)) {
            this.addRedBorder("year")
            return (
                <label className="error">Sorry, but you don't meet Spotify's age requirements.</label>
            );
        }

        if (this.state.year) this.removeRedBorder('year')
        return <label className="error hidden" id="year-error"></label> 
    }


    removeElement(elementId){
        const element = document.getElementById(elementId)
        if (element) element.style.display = 'none'
    }

    addRedBorder(elementId){
        const element = document.getElementById(elementId)
        if (element) element.classList.add("red-border")
    }

    removeRedBorder(elementId){
        const element = document.getElementById(elementId)
        if (element) element.classList.remove("red-border")
    }

    render() {
        const signup = (
        <form onSubmit={this.handleSubmit} className="login-form-box">
            {/* {this.renderErrors()} */}
            <h2>Sign up with your email address</h2>
            <div className="login-form">
                <div className="login-form-details">
                    <div>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            onBlur={this.checkIfValid}
                            className="login-input"
                            placeholder="Email"
                            id="email"
                        />
                    {this.renderEmailError()}
                    
                    </div>
                    <div>
                        <input type="text"
                            value={this.state.email2}
                            onChange={this.update('email2')}
                            onBlur={this.checkIfValid}
                            className="login-input"
                            placeholder="Confirm email"
                            id="email2"
                        />
                    {this.renderEmailNotAMatchError()}
                    </div>
                    <div>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                            placeholder="Password"
                            onBlur={this.checkIfValid}
                            id="password"
                        />
                    {this.renderPasswordError()}
                    </div>
                    <div>
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="login-input"
                            placeholder="What should we call you?"
                            id="username"
                        />
                        {this.renderUsernameError()}
                    </div>
                </div>
                <div className="dob">
                    <label className="dob-first-line">Date of birth</label>
                    <div className="dob-second-line">
                    
                    <div className="months">
                        <select name="DOBMonth" value={this.state.month} id="month" onChange={this.update("month")}>
                            <option>Month</option>
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
                    </div>
                    <div className="day">
                        <input type="number"
                            value={this.state.day}
                            onChange={this.update('day')}
                            placeholder="Day"
                            onBlur={this.checkIfValid}
                            id="day"
                        />
                    </div>
                    <div className="year">
                        <input type="number"
                            value={this.state.year}
                            onChange={this.update('year')}
                            placeholder="Year"
                            onBlur={this.checkIfValid}
                            id="year"
                        />
                    </div>
                    </div>
                    {this.renderMonthError()}
                    {this.renderDayError()}
                    {this.renderYearError()}
                </div>

                <div className="gender">
                    <label><input type="radio" name="gender" value="male" onChange={this.update('gender')} /> Male</label>
                    <label><input type="radio" name="gender" value="female" onChange={this.update('gender')} /> Female</label>
                    <label><input type="radio" name="gender" value="other" onChange={this.update('gender')} /> Non-binary</label>
                    <label><input type="radio" name="gender" value="weeb" onChange={this.update('gender')} /> Weeb</label>
                </div>
                    <div className="share-data">
                        <label><input type="checkbox" />
                        <div>
                        Share my registration data with Moefy's content providers for marketing purposes.</div></label>
                    </div>
                    
                    <p className="legal-stuff">
                        By clicking on Sign up, you agree to Moefy's <a href="">Terms and Conditions of Use</a>.
                        <br/>
                        <br/>
                        To learn more about how Moefy collects, uses, shares and protects your personal data please read Moefy's <a href="">Privacy Policy</a>.
                    </p>
                    <button type="submit" className="splash-grn-button splash-grn-button-sign-up">Sign up</button>
                    <p className="sign-up-form-redirect">Already have an account? {this.props.navLink }</p>
            </div>
        </form>
        )


        const login = (
        <form onSubmit={this.handleSubmit} className="login-form-box">
            <br />
            <h2>To continue, log in to Moefy.</h2>
            {/* {this.renderErrors()} */}
            <div className="login-form">
                <br />
                <label>Username:
                            <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
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
                <div className="login-form-header">
                    <Link to="/"><img src="./assets/logo-blk.png" alt="Moefy" /></Link>
                </div>
                {display}
            </div>
        );
    }
}

export default SessionForm;
