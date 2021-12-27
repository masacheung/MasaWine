import React from "react";
import axios from "axios";

export default class Top extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            top: [],
            search: "",
            sortedRank: true,
            sortedName: false,
            sortedWinery: false,
            sortedScore: false,
            sortedPrice: false
        }
        this.sortByRank = this.sortByRank.bind(this);
        this.sortByWine = this.sortByWine.bind(this);
        this.sortByWinery = this.sortByWinery.bind(this);
        this.sortByScore = this.sortByScore.bind(this);
        this.sortByPrice = this.sortByPrice.bind(this);
    }

    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/t100_2021_full.json`)
            .then(res => {
                this.setState({top: res.data})
            })
    }

    sortByRank(){
        let arr = this.state.top;
        arr = arr.sort((a,b) => {
            return b.top100_rank - a.top100_rank;
        })
        if(!this.state.sortedRank){
            arr = arr.reverse();
        }
        this.setState({top: arr, 
                    sortedRank: !this.state.sortedRank, 
                    sortedName: false,
                    sortedWinery: false,
                    sortedScore: false,
                    sortedPrice: false});
    }

    sortByWine(){
        let arr = this.state.top;
        arr = arr.sort((a,b) => {
            let a_name = a.wine_full.toLowerCase(),
                b_name = b.wine_full.toLowerCase()
            if (a_name < b_name){
                return -1;
            }
            if (a_name > b_name){
                return 1;
            }
            return 0;
        })
        
        if(this.state.sortedName){
            arr = arr.reverse();
        }

        this.setState({top: arr, 
                    sortedName: !this.state.sortedName, 
                    sortedRank: false,
                    sortedWinery: false,
                    sortedScore: false,
                    sortedPrice: false});
    }

    sortByWinery(){
        let arr = this.state.top;
        arr = arr.sort((a,b) => {
            let a_name = a.winery_full.toLowerCase(),
                b_name = b.winery_full.toLowerCase()
            if (a_name < b_name){
                return -1;
            }
            if (a_name > b_name){
                return 1;
            }
            return 0;
        })
        
        if(this.state.sortedWinery){
            arr = arr.reverse();
        }

        this.setState({top: arr, 
                    sortedWinery: !this.state.sortedWinery, 
                    sortedRank: false,
                    sortedName: false,
                    sortedScore: false,
                    sortedPrice: false});
    }

    sortByScore(){
        let arr = this.state.top;
        arr = arr.sort((a,b) => {
            return b.score - a.score;
        })
        if(!this.state.sortedScore){
            arr = arr.reverse();
        }
        this.setState({top: arr, 
                    sortedScore: !this.state.sortedScore,
                    sortedRank: false,
                    sortedName: false,
                    sortedWinery: false,
                    sortedPrice: false});
    }

    sortByPrice(){
        let arr = this.state.top;
        arr = arr.sort((a,b) => {
            return b.price - a.price;
        })
        if(!this.state.sortedPrice){
            arr = arr.reverse();
        }
        this.setState({top: arr, 
                    sortedPrice: !this.state.sortedPrice, 
                    sortedRank: false,
                    sortedName: false,
                    sortedWinery: false,
                    sortedScore: false});
    }

    update(field){
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    render() {
        let display;

        if(this.state.search.length > 0){
            display = this.state.top.filter(wine =>
                wine.wine_full.toLowerCase().includes(this.state.search.toLowerCase()) ||
                wine.winery_full.toLowerCase().includes(this.state.search.toLowerCase()))
        }else {
            display = this.state.top;
        }

        return(
            <div className="list">
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
                <ul className="top100-ul">
                    <li>
                        <button className="sub-header-rank" onClick={this.sortByRank}>
                            Rank
                            <img className="sortImg" src={window.sort}/>
                        </button>
                        <button className="sub-header-wine" onClick={this.sortByWine}>
                            Wine
                            <img className="sortImg" src={window.sort}/>
                        </button>
                        <button className="sub-header-winery" onClick={this.sortByWinery}>
                            Winery
                            <img className="sortImg" src={window.sort}/>
                        </button>
                        <div className="sub-header-vintage">Vintage</div>
                        <button className="sub-header-score" onClick={this.sortByScore}>
                            Score
                            <img className="sortImg" src={window.sort}/>
                        </button>
                        <button className="sub-header-score" onClick={this.sortByPrice}>
                            Price
                            <img className="sortImg" src={window.sort}/>
                        </button>

                    </li>
                    {display.map(wine => 
                            <li key={wine.id}>
                                <div className="sub-header-rank">{wine.top100_rank}</div>
                                <div className="sub-header-wine">
                                    {wine.wine_full}
                                </div>
                                <div className="note">
                                    Tasting Note<br/><br/>
                                    {wine.note}
                                </div>

                                <div className="sub-header-winery">{wine.winery_full}</div>
                                <div className="sub-header-vintage">{wine.vintage}</div>
                                <div className="sub-header-score">{wine.score}</div>
                                <div className="sub-header-score">${wine.price}</div>
                            </li>
                       )}
                </ul>
            </div>
        )
    }
}