import * as Types from "../types/globalTypes";

const initialState = {
    theme: 'dark',
};

export default function GlobalReducer(state = initialState, action) {
    switch (action.type) {
        case Types.TOGGLE_THEME:
            return {
                ...state,
                theme: action.payload,
            };
        case Types.GET_DEFAULT_THEME:
            return {
                ...state,
                theme: action.payload,
            };
        default:
            break;
    }
    return state;
}