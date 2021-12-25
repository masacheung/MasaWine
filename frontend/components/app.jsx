import React from "react";
import { Route, Switch } from "react-router-dom";
import RoutingError from "./routing_error";

import SplashPages from "./splash_page";
import WineriesIndexContainer from "./wineries/wineries_index_container";
import WinesIndexContainer from "./wines/wines_index_container";

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={SplashPages}/>
            <Route exact path="/wines" component={WinesIndexContainer}/>
            <Route exact path="/wineries" component={WineriesIndexContainer} />
            <Route component={RoutingError} />
        </Switch>
    </div>
)

export default App;