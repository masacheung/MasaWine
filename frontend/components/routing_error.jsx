import React from "react";
import { Link } from 'react-router-dom';

const RoutingError = props => {
    return (
        <div className="notfound">
            <img src={window.notfoundimg} className="notfoundimg"/>
            <Link to="/">Back To MasaWine!!!</Link>
        </div>
    )
}

export default RoutingError;