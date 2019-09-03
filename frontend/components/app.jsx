import React from 'react';
import HeaderContainer from "./greeting/Header_container";
import { Route, Switch } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from "../components/footer/footer"
import Splash from "../components/home/splash"

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route path="/" component={Splash}/>
        </Switch>
    </div>
);

export default App;