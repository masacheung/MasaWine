import React from 'react';

export default class WineryShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchWineries(this.props.match.params.winery_id);
        this.props.fetchWines();
    }


    render(){
        let display;
        if(this.props.wines){
            display = this.props.wines.filter(wine => wine.winery_id === this.props.winery.name);
        }

        if(display.length === 0 && this.props.winery){
            return (<div>
                        <div className="splash-slogan">
                            <div className="slogan">{this.props.winery.name} Winery</div>
                            <div className="slogan">No Wine!!!</div>
                        </div>
                    </div>);
        }
        return(
            <div className="splash">
            <div className="splash-slogan">
                <div className="slogan">{this.props.winery.name} Winery</div>
            </div>
            <div className="wines-list">
                <ul className="wines-ul">
                    <li>
                        <div className="sub-header-wine">Wine</div>
                        <div className="sub-header-country">Country</div>
                        <div className="sub-header-country">Region</div>
                        <div className="sub-header-vintage">Vintage</div>
                        <div className="sub-header-vintage"> Color</div>
                        <div className="sub-header-vintage">Size</div>
                    </li>
                    {display.map(wine => 
                        <li key={wine.id}>
                            <div className="sub-header-wine"><b>{wine.winery_id}</b>&nbsp;{wine.wine_full}</div>
                            <div className="sub-header-country">{wine.country}</div>
                            <div className="sub-header-country">{wine.region}</div>
                            <div className="sub-header-vintage">{wine.vintage}</div>
                            <div className="sub-header-vintage"> {wine.color}</div>
                            {wine.alternate_bottle_size === "" ? <div className="sub-header-vintage"></div> : <div className="sub-header-vintage">{wine.alternate_bottle_size} mL</div>}
                        </li>
                        )}
                </ul>
            </div>
            </div>
        )
    }
}