import React from "react";
import axios from "axios";
import Wine from "./wine";

export default class Top extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            top: []
        }
    }

    componentDidMount(){
        axios.get("https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/t100_2021_full.json")
            .then(res => {
                console.log(res.data);
                this.setState({top: res.data})
            })
    }

    render() {
        console.log(this.state.top)
        return(
            <div>
                TOP 100
                <ul className="top100-ul">
                    {this.state.top.map(wine => {
                        return (
                            <li className="top100-li" key={wine.id}>
                                <Wine 
                                    winery={wine.winery_full}
                                    wine={wine.wine_full}
                                    vintage={wine.vintage}
                                    color={wine.color}
                                    country={wine.country}
                                    region={wine.region}
                                    size={wine.alternate_bottle_size}
                                    year={wine.top100_year}
                                    rank={wine.top100_rank}
                                    wineId={wine.id}
                                />
                            </li>                        
                        )
                    })}
                </ul>
            </div>
        )
    }
}