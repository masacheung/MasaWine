import { connect } from 'react-redux';
import { fetchWineries, updateWinery, deleteWinery, createWinery } from '../../actions/winery_actions';
import WineriesIndex from './wineries_index';

const mSTP = (state) => {
    return {
        wineries: Object.values(state.entities.wineries)
    }
}

const mDTP = dispatch => {
    return {
        fetchWineries: () => dispatch(fetchWineries()),
        createWinery: (winery) => dispatch(createWinery(winery)),
        updateWinery: (winery) => dispatch(updateWinery(winery)),
        deleteWinery: (wineryId) => dispatch(deleteWinery(wineryId))
    }
}

export default connect(mSTP, mDTP)(WineriesIndex);