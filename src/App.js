import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import {VideoPlayer} from "./pages/player";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/player">
                    <VideoPlayer/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;