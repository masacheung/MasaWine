import React from 'react';

export default class WineShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchWines(this.props.match.params.wineId);
    }

    render(){
        return (
            <div>
                HELLO
            </div>
        )
    }
}