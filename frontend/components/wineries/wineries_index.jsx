import React from "react";

export default class WineriesIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchWineries();
    }

    render() {
        console.log(this.props.wineries);

        return (
            <div>
                Hello World!!!
            </div>
        )
    }
}