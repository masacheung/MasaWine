import React from "react";

export default class WinesIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchWines();
    }

    render() {
        console.log(this.props.wines);

        return (
            <div>
                Wines Page
            </div>
        )
    }
}