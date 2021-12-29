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
                    <input className="createName" type="text" placeholder="Name" value={this.state.wineFull} onChange={this.update("wineFull")}/>
                    <input className="createCounrty" type="text" placeholder="Vintage" value={this.state.vintage} onChange={this.update("vintage")}/>
                    <input className="createCounrty" type="text" placeholder="Color" value={this.state.color} onChange={this.update("color")}/>
                    <input className="createCounrty" type="text" placeholder="Country" value={this.state.country} onChange={this.update("country")}/>
                    <input className="createCounrty" type="text" placeholder="Region" value={this.state.region} onChange={this.update("region")}/>
                    <input className="createCounrty" type="text" placeholder="Size" value={this.state.alternateBottleSize} onChange={this.update("alternateBottleSize")}/>
                    <input className="createForm" type="submit" value="Create"/>
                </form>
            </div>
        )
    }
}