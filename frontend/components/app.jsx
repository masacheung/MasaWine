import React from "react";
import { Route, Routes } from "react-router-dom";
import RoutingError from "./routing_error";

import SplashPages from "./splash_page";

const App = () => (
    <div>
        <Routes>
            {/* <Route path="*" element={<RoutingError/>} /> */}
            <Route exact path="/" element={<SplashPages/>}/>
        </Routes>
    </div>
)

export default App;