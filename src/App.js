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
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>

            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>

            <Switch>
                <Route path="/player">
                    <VideoPlayer />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;