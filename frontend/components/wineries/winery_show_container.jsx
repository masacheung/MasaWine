import { connect } from 'react-redux';
import { fetchWines } from "../../actions/wine_action";
import { fetchWineries } from '../../actions/winery_actions';
import WineryShow from "./winery_show";

const mSTP = (state, ownProps) => {
    return {
        winery: state.entities.wineries[ownProps.match.params.wineryId],
        wines: Object.values(state.entities.wines)
    }
}

const mDTP = dispatch => {
    return {
        fetchWines: () => dispatch(fetchWines()),
        fetchWineries: () => dispatch(fetchWineries()),
    }
}

export default connect(mSTP, mDTP)(WineryShow);