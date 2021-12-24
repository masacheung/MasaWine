import React from "react";
import {Switch} from "react-router-dom";
import RoutingError from "./routing_error";
import { Route } from "react-router";

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={SplashPages}/>
            <Route component={RoutingError} />
        </Switch>
    </div>
)

export default App;