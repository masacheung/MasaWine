import React from "react";

export default class WineriesIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            country: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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

        this.props.createWinery(winery);
        this.setState({name: "", country: ""})
    }

    handleDelete(){

    }

    render() {

        return (
            <div className="list">
                Wineries Page
                <form onSubmit={this.handleSubmit}>
                    <input className="createName" type="text" placeholder="Name" value={this.state.name} onChange={this.update("name")}/>
                    <input className="createCounrty" type="text" placeholder="Country" value={this.state.country} onChange={this.update("country")}/>
                    <input className="createForm" type="submit" value="Create"/>
                </form>
                <ul className="wineries-ul">
                    <li>
                        <div className="sub-header-winery">
                            Winery
                            <img className="sortImg" src={window.sort}/>
                        </div>

                        <div className="sub-header-country">
                            Country
                            <img className="sortImg" src={window.sort}/>
                        </div>
                        <div className="sub-header-actions">ACTIONS</div>
                    </li>
                    {this.props.wineries.map(winery => 
                            <li key={winery.id}>
                                <div className="sub-header-winery">
                                    {winery.name}
                                </div>
                                <div className="sub-header-country">{winery.country}</div>
                                <div className="sub-header-actions">
                                    <button>Update</button>
                                    <button>Delete</button>
                                </div>
                            </li>
                        )}
                </ul>
            </div>
        )
        
    }
}