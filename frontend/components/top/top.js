import React from "react";
import axios from "axios";

export default class Top extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            top: []
        }
    }

    componentDidMount(){
        axios.get("https://top-100-example.s3.amazonaws.com/t100_2021_full.json")
            .then(res => {
                console.log(res.data);
                this.setState({top: res.data})
            })
    }

    render() {
        return(
            <div>
                TOP 100
            </div>
        )
    }
}