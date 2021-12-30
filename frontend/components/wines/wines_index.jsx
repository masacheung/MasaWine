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
                    wineryId: ""});
        this.handleCloseModal();
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
                    <button className="create-winery" onClick={this.handleOpenModal} type="submit" >Create Winery</button>
                    <ul className="wines-ul">
                        <li>
                            <div className="sub-header-wine">Wine</div>
                            <div className="sub-header-country">Country</div>
                            <div className="sub-header-country">Region</div>
                            <div className="sub-header-vintage">Vintage</div>
                            <div className="sub-header-vintage"> Color</div>
                            <div className="sub-header-vintage">Size</div>
                            <div className="sub-header-actions">Actions</div>
                        </li>
                    </ul>
                </div>
                <Modal isOpen={this.state.modal} className="overlay">
                    <div className="my-modal">
                            <h2 className="modal-title">Create New Wine</h2>
                            <lable className="modal-name">Name: </lable>
                            <input className="modal-input" type="text" placeholder="Wine Name" value={this.state.wineFull} onChange={this.update("wineFull")}/>
                            <lable className="modal-name">Country: </lable>
                            <input className="modal-input" type="text" placeholder="Country" value={this.state.country} onChange={this.update("country")}/>
                            <lable className="modal-name">Region: </lable>
                            <input className="modal-input" type="text" placeholder="Region" value={this.state.region} onChange={this.update("region")}/>
                            <lable className="modal-name">Vintage: </lable>
                            <input className="modal-input" type="text" placeholder="Size" value={this.state.vintage} onChange={this.update("vintage")}/>
                            <lable className="modal-name">Color: </lable>
                            <input className="modal-input" type="text" placeholder="Color" value={this.state.color} onChange={this.update("color")}/>
                            <lable className="modal-name">Size: </lable>
                            <input className="modal-input" type="text" placeholder="Size" value={this.state.alternateBottleSize} onChange={this.update("alternateBottleSize")}/>
                            <div className="modal-buttons">
                                <button className="cancel" onClick={this.handleCloseModal}>Cancel</button>
                                <button className="continue" onClick={this.handleSubmit}>Create</button>
                            </div>
                        </div>
                </Modal>
            </div>
        )
    }
}