import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

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
            modal: false,
            renameModal: false,
            rename: null,
            renameWineFull: "",
            renameVintage: "",
            renameColor: "",
            renameCountry: "",
            renameRegion: "",
            renameAlternateBottleSize: "",
            renameWineryId: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenRenameModal = this.handleOpenRenameModal.bind(this);
        this.handleCloseRenameModal = this.handleCloseRenameModal.bind(this);
        this.handleRename = this.handleRename.bind(this);
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
            wine_full: this.state.wineFull,
            vintage: this.state.vintage,
            color: this.state.color,
            country: this.state.country,
            region: this.state.region,
            alternate_bottle_size: this.state.alternateBottleSize,
            winery_id: this.state.wineryId
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

    handleDelete(wineId){
        this.props.deleteWine(wineId)
    }

    handleOpenModal() {
        this.setState({modal: true})
    }

    handleCloseModal() {
        this.setState({modal: false})
    }

    handleOpenRenameModal(wine){
        this.setState({rename: wine, renameWineFull: wine.wine_full, 
                    renameCountry: wine.country, renameColor: wine.color,
                    renameRegion: wine.region, renameAlternateBottleSize: wine.alternate_bottle_size,
                    renameWineryId: wine.winery_id, renameVintage: wine.vintage,
                    renameModal: true})
    }

    handleCloseRenameModal(){
        this.setState({renameModal: false})
    }

    handleRename(){
        let wine = this.state.rename;
        wine.wine_full = this.state.renameWineFull;
        wine.country = this.state.renameCountry;
        wine.vintage = this.state.renameVintage;
        wine.region - this.state.renameRegion;
        wine.alternate_bottle_size = this.state.renameAlternateBottleSize;
        wine.winery_id = this.state.renameWineryId;
        wine.color = this.state.renameColor;

        this.props.updateWine(wine)
            .then(() => this.props.fetchWines());
        this.handleCloseRenameModal();
    }

    render() {
        let display;

        if(this.state.search.length > 0){
            display = this.props.wines.filter(wine =>{
                let name = wine.winery_id + " " + wine.wine_full;
                let revName = wine.wine_full + " " + wine.winery_id;
                return name.toLowerCase().includes(this.state.search.toLowerCase()) || revName.toLowerCase().includes(this.state.search.toLowerCase())
            })
        }else {
            display = this.props.wines;
        }

        return (
            <div className="splash">
                <div className="splash-slogan">
                    {display.length <= 1 ? <div className="slogan">Wine Page</div> : <div className="slogan">Wines Page</div>}
                </div>
                <div className="wines-list">
                <div className="search">
                        <form>
                            <input 
                                type="text"
                                placeholder="Search by wine / winery"
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
                        {display.map(wine => 
                            <li key={wine.id}>
                                <div className="sub-header-wine">
                                    <Link to={`/wines/${wine.id}`}><b>{wine.winery_id}</b>&nbsp;{wine.wine_full}</Link>
                                </div>
                                <div className="sub-header-country">{wine.country}</div>
                                <div className="sub-header-country">{wine.region}</div>
                                <div className="sub-header-vintage">{wine.vintage}</div>
                                <div className="sub-header-vintage"> {wine.color}</div>
                                {wine.alternate_bottle_size === "" ? <div className="sub-header-vintage">N/A</div> : <div className="sub-header-vintage">{wine.alternate_bottle_size} mL</div>}
                                <div className="sub-header-actions">
                                    <button className="update-button" onClick={() => this.handleOpenRenameModal(wine)}>Update</button>
                                    <button className="delete-button" onClick={() => this.handleDelete(wine.id)}>Delete</button>
                                </div>
                            </li>
                            )}
                    </ul>
                </div>
                <Modal isOpen={this.state.modal} className="overlay">
                    <div className="my-modal">
                            <h2 className="modal-title">Create New Wine</h2>
                            <lable className="modal-name">Wine Name: </lable>
                            <input className="modal-input" type="text" placeholder="Wine Name" value={this.state.wineFull} onChange={this.update("wineFull")}/>
                            <lable className="modal-name">Winery Name: </lable>
                            <input className="modal-input" type="text" placeholder="Winery Name" value={this.state.wineryId} onChange={this.update("wineryId")}/>
                            <lable className="modal-name">Country: </lable>
                            <input className="modal-input" type="text" placeholder="Country" value={this.state.country} onChange={this.update("country")}/>
                            <lable className="modal-name">Region: </lable>
                            <input className="modal-input" type="text" placeholder="Region" value={this.state.region} onChange={this.update("region")}/>
                            <lable className="modal-name">Vintage: </lable>
                            <input className="modal-input" type="text" placeholder="Vintage" value={this.state.vintage} onChange={this.update("vintage")}/>
                            <lable className="modal-name">Color: </lable>
                            <input className="modal-input" type="text" placeholder="Color" value={this.state.color} onChange={this.update("color")}/>
                            <lable className="modal-name">Size(mL): </lable>
                            <input className="modal-input" type="text" placeholder="Size" value={this.state.alternateBottleSize} onChange={this.update("alternateBottleSize")}/>
                            <div className="modal-buttons">
                                <button className="cancel" onClick={this.handleCloseModal}>Cancel</button>
                                <button className="continue" onClick={this.handleSubmit}>Create</button>
                            </div>
                        </div>
                </Modal>
                <Modal isOpen={this.state.renameModal} className="overlay">
                    <div className="my-modal">
                            <h2 className="modal-title">Update Wine</h2>
                            <lable className="modal-name">Wine Name: </lable>
                            <input className="modal-input" type="text" placeholder="Wine Name" value={this.state.renameWineFull} onChange={this.update("renameWineFull")}/>
                            <lable className="modal-name">Winery Name: </lable>
                            <input className="modal-input" type="text" placeholder="Winery Name" value={this.state.renameWineryId} onChange={this.update("renameWineryId")}/>
                            <lable className="modal-name">Country: </lable>
                            <input className="modal-input" type="text" placeholder="Country" value={this.state.renameCountry} onChange={this.update("renameCountry")}/>
                            <lable className="modal-name">Region: </lable>
                            <input className="modal-input" type="text" placeholder="Region" value={this.state.renameRegion} onChange={this.update("renameRegion")}/>
                            <lable className="modal-name">Vintage: </lable>
                            <input className="modal-input" type="text" placeholder="Size" value={this.state.renameVintage} onChange={this.update("renameVintage")}/>
                            <lable className="modal-name">Color: </lable>
                            <input className="modal-input" type="text" placeholder="Color" value={this.state.renameColor} onChange={this.update("renameColor")}/>
                            <lable className="modal-name">Size(mL): </lable>
                            <input className="modal-input" type="text" placeholder="Size" value={this.state.renameAlternateBottleSize} onChange={this.update("renameAlternateBottleSize")}/>
                            <div className="modal-buttons">
                                <button className="cancel" onClick={this.handleCloseRenameModal}>Cancel</button>
                                <button className="continue" onClick={this.handleRename}>Update</button>
                            </div>
                        </div>
                </Modal>
            </div>
        )
    }
}