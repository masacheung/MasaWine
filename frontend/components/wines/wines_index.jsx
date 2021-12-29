import React from "react";

export default class WinesIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            wineFull: "",
            vintage: "",
            color: "",
            country: "",
            region: "",
            alternateBottleSize: "",
            wineryId: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchWines();
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        let winery = {
            wine_full: this.state.wine_full,
            vintage: this.state.vintage,
            color: this.state.color,
            country: this.state.country,
            region: this.state.region,
            alternate_bottle_size: this.state.alternateBottleSize,
            wineryId: this.state.wineryId
        }

        this.props.createWinery(winery);
        this.setState({wineFull: "",
                    vintage: "",
                    color: "",
                    country: "",
                    region: "",
                    alternateBottleSize: "",
                    wineryId: ""})
    }

    render() {
        console.log(this.props.wines);

        return (
            <div>
                Wines Page
                <form>
                    
                </form>
            </div>
        )
    }
}