import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

export default class WineriesIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            country: "",
            search: "",
            modal: false,
            renameModal: false,
            rename: null,
            renameWinery: "",
            renameCountry: ""
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
        this.props.fetchWineries();
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        let winery = {
            name: this.state.name,
            country: this.state.country
        }

        this.props.createWinery(winery)
            .then(() => this.props.fetchWineries());
        this.setState({name: "", country: ""})
        this.handleCloseModal();
    }

    handleDelete(wineryId){
        this.props.deleteWinery(wineryId)
    }

    handleOpenModal() {
        this.setState({modal: true})
    }

    handleCloseModal() {
        this.setState({modal: false})
    }
    
    handleOpenRenameModal(winery){
        this.setState({rename: winery, renameWinery: winery.name, 
                    renameCountry: winery.country, renameModal: true})
    }

    handleCloseRenameModal(){
        this.setState({renameModal: false})
    }

    handleRename(){
        let winery = this.state.rename;
        winery.name = this.state.renameWinery;
        winery.country = this.state.renameCountry;
        this.props.updateWinery(winery)
            .then(() => this.props.fetchWineries());
        this.handleCloseRenameModal();
    }

    render() {
        let display;

        if(this.state.search.length > 0){
            display = this.props.wineries.filter(winery => {
                let name = winery.name + " " + winery.country;
                let revName = winery.country + " " + winery.name;
                return name.toLowerCase().includes(this.state.search.toLowerCase()) || revName.toLowerCase().includes(this.state.search.toLowerCase())
            })
        }else {
            display = this.props.wineries;
        }

        return (
            <div className="splash">
                <div className="splash-slogan">
                    <div className="slogan">Wineries Page</div>
                </div>
                <div className="wineries-list">
                    <div className="search">
                        <form>
                            <input 
                                type="text"
                                placeholder="Search by winery / country"
                                onChange={this.update("search")}
                                value={this.state.search}
                            />
                        </form>
                    </div>
                    <button className="create-winery" onClick={this.handleOpenModal} type="submit" >Create Winery</button>
                    <ul className="wineries-ul">
                        <li>
                            <div className="sub-header-winery">
                                Winery
                            </div>

                            <div className="sub-header-country">
                                Country
                            </div>
                            <div className="sub-header-actions">Actions</div>
                        </li>
                        {display.map(winery => 
                                <li key={winery.id}>
                                    <div className="sub-header-winery">
                                        <Link to={`/wineries/${winery.id}`}>{winery.name}</Link>
                                    </div>
                                    <div className="sub-header-country">{winery.country}</div>
                                    <div className="sub-header-actions">
                                        <button className="update-button" onClick={() => this.handleOpenRenameModal(winery)}>Update</button>
                                        <button className="delete-button" onClick={() => this.handleDelete(winery.id)}>Delete</button>
                                    </div>
                                </li>
                            )}
                    </ul>
                    </div>
                    <Modal isOpen={this.state.modal} className="overlay">
                        <div className="my-modal">
                            <h2 className="modal-title">Create New Winery</h2>
                            <lable className="modal-name">Name: </lable>
                            <input className="modal-input" type="text" placeholder="Winery Name" value={this.state.name} onChange={this.update("name")}/>
                            <lable className="modal-name">Country: </lable>
                            <input className="modal-input" type="text" placeholder="Winery Country" value={this.state.country} onChange={this.update("country")}/>
                            <div className="modal-buttons">
                                <button className="cancel" onClick={this.handleCloseModal}>Cancel</button>
                                <button className="continue" onClick={this.handleSubmit}>Create</button>
                            </div>
                        </div>
                    </Modal>
                    <Modal isOpen={this.state.renameModal} className="overlay">
                        <div className="my-modal">
                            <h2>Update Winery</h2>
                            <lable className="modal-name">Name: </lable>
                            <input className="modal-input" type="text" placeholder="Winery Name" value={this.state.renameWinery} onChange={this.update("renameWinery")}/>
                            <lable className="modal-name">Country: </lable>
                            <input className="modal-input" type="text" placeholder="Winery Country" value={this.state.renameCountry} onChange={this.update("renameCountry")}/>
                            <div className="modal-buttons">
                                <button className="cancel" onClick={this.handleCloseRenameModal}>Cancel</button>
                                <button className="continue" onClick={this.handleRename}>Create</button>
                            </div>
                        </div>

                    </Modal>
            </div>
        )
        
    }
}