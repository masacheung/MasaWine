import React from "react";
import axios from "axios";

export default class Top extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            top: [],
            showPlus: true,
            order: true        
        }
        this.sortByRank = this.sortByRank.bind(this);
    }

    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/t100_2021_full.json`)
            .then(res => {
                this.setState({top: res.data})
            })
    }

    sortByRank(){
        let arr = this.state.top;

        this.setState({top: arr.reverse()});

    }

    render() {

        return(
            <div className="list">
                <ul className="top100-ul">
                    <li>
                        <button className="sub-header-rank" onClick={this.sortByRank}>
                            Rank
                            <img className="sortImg" src={window.sort}/>
                        </button>
                        <div className="sub-header-wine">Wine</div>
                        <div className="sub-header-winery">Winery</div>
                        <div className="sub-header-vintage">Vintage</div>
                    </li>
                    {this.state.top.map(wine => 
                            <li key={wine.id}>
                                <div className="sub-header-rank">{wine.top100_rank}</div>
                                <div className="sub-header-wine">
                                    {wine.wine_full}
                                </div>
                                <div className="note">
                                    Testing Note<br/><br/>
                                    {wine.note}
                                </div>

                                <div className="sub-header-winery">{wine.winery_full}</div>
                                <div className="sub-header-vintage">{wine.vintage}</div>
                            </li>
                       )}
                </ul>
            </div>
        )
    }
}