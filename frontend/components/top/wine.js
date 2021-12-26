import React from "react";

export default class Wine extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <img className="bottle" src={window.bottle}/>
                <div className="info">
                    <div className="namePlus">
                        <h1 className="name">Wine: {this.props.wine}</h1>
                    </div>
                    <h2>Winery: {this.props.winery}</h2>
                    <h2>Vintage: {this.props.vintage}</h2>
                    <h2>Color: {this.props.color}</h2>
                    <h2>Country: {this.props.country}</h2>
                    <h2>Region: {this.props.region}</h2>
                    <h2>Bottle Size: {this.props.size}</h2>
                    <h2>Rank: {this.props.rank} {this.props.year}</h2>
                </div>
                <hr/>
            </div>
        )
    }
}