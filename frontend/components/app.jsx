import React from "react";
import {Routes} from "react-router-dom";
import RoutingError from "./routing_error";
import { Route } from "react-router";

const App = () => (
    <div>
        <Routes>
            <Route exact path="/" component={SplashPages}/>
            <Route component={RoutingError} />
        </Routes>
    </div>
)

export default App;