import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import PlayerContainer from './player/player_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from "../components/home_splash/splash_container";

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={SplashContainer}/>
        </Switch>
        <ProtectedRoute path="/player" component={PlayerContainer} />
    </div>
);

export default App;