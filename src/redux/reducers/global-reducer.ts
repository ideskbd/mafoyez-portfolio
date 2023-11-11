import { IGlobal } from "../interfaces";
import * as Types from "./../types/global-type";

const initialState: IGlobal = {
    isOpenSidebar: false,
    sideMenuList: []
};

function globalReducer(state = initialState, action: any) {
    switch (action.type) {
        case Types.OPEN_SIDEBAR:
            return {
                ...state,
                isOpenSidebar: action.payload,
            };
        default:
            break;
    }
    return state;
}

export default globalReducer;
