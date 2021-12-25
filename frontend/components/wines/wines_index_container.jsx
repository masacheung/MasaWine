import { connect } from 'react-redux';
import { fetchWines, updateWine, deleteWine, createWine } from "../../actions/wine_action";
import WinesIndex from "./wines_index";

const mSTP = (state) => {
    return {
        wines: Object.values(state.entities.wines)
    }
}

const mDTP = dispatch => {
    return {
        fetchWines: () => dispatch(fetchWines()),
        createWine: (wine) => dispatch(createWine(wine)),
        updateWine: (wine) => dispatch(updateWine(wine)),
        deleteWine: (wineId) => dispatch(deleteWine(wineId))
    }
}

export default connect(mSTP, mDTP)(WinesIndex);