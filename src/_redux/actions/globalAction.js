// import axios from "@/utils/axios";
import * as Types from "../types/globalTypes";
import { GetTheme, StoreTheme } from "../../utils/ManageStorage";

export const ToggleTheme = (status) => (dispatch) => {
    const theme = status ? "dark" : "light";
    StoreTheme(status ? "dark" : "light");
    dispatch(GetSelectedTheme());
    dispatch({ type: Types.TOGGLE_THEME, payload: theme });
}

export const GetSelectedTheme = () => (dispatch) => {
    const selectedTheme = GetTheme("theme");
    document.querySelector("body").setAttribute("data-theme", selectedTheme);
    dispatch({ type: Types.GET_DEFAULT_THEME, payload: selectedTheme });
}