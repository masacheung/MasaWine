import React from "react";
import Modal from "react-modal";

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
            wineryId: "",
            search: "",
            modal: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
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
        let wine = {
            wine_full: this.state.wine_full,
            vintage: this.state.vintage,
            color: this.state.color,
            country: this.state.country,
            region: this.state.region,
            alternate_bottle_size: this.state.alternateBottleSize,
            wineryId: this.state.wineryId
        }

        this.props.createWine(wine);
        this.setState({wineFull: "",
                    vintage: "",
                    color: "",
                    country: "",
                    region: "",
                    alternateBottleSize: "",
                    wineryId: ""})
    }

    handleOpenModal() {
        this.setState({modal: true})
    }

    handleCloseModal() {
        this.setState({modal: false})
    }

    render() {
        console.log(this.props.wines);

        return (
            <div className="splash">
                <div className="splash-slogan">
                    <div className="slogan">Wines Page</div>
                </div>
                <div className="wines-list">
                <div className="search">
                        <form>
                            <input 
                                type="text"
                                placeholder="Search by wine"
                                onChange={this.update("search")}
                                value={this.state.search}
                            />
                        </form>
                    </div>
                    <button className="create-winery" type="submit" >Create Winery</button>
                    <ul className="wines-ul">
                        <li>
                            <div>Wine</div>
                            <div>Vintage</div>
                            <div>Color</div>
                            <div>Country</div>
                            <div>Region</div>
                            <div>Size</div>
                        </li>
                    </ul>
                </div>
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