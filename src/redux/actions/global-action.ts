import { Dispatch } from "@reduxjs/toolkit";
// import axios from "@/utils/axios";
import * as Types from "./../types/global-type";

export const handleSidebar = (isToggle: boolean = false) => (dispatch: Dispatch) => {
    dispatch({ type: Types.OPEN_SIDEBAR, payload: !isToggle });
}

// export const getSidebarMenuList = () => (dispatch: Dispatch) => {
//     axios.get('menu')
//         .then(res => {
//             dispatch({ type: Types.SIDEBAR_MENU_LIST, payload: res.data ?? [] });
//         })
//         .catch(error => {
//             dispatch({ type: Types.SIDEBAR_MENU_LIST, payload: [] });
//         });
// }