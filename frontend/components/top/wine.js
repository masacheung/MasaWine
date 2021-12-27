import axios from "axios";
import React from "react";

export default class Wine extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPlus: true,
            note: ""
        }
    }

    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/${this.props.wineId}.json`)
            .then(res => {
                console.log(res.data)
                this.setState({note: res.data})
            })
    }

    render() {
        let display = "";

        return(
            <li key={this.props.wineId}>
                <div className="sub-header-rank">{this.props.rank}</div>
                <div className="sub-header-wine">
                    {this.props.wine}
                    {display}
                </div>
                <div className="sub-header-winery">{this.props.winery}</div>
                <div className="sub-header-vintage">{this.props.vintage}</div>
        </li>
        )
    }
}