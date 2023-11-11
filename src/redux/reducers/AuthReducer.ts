import { IAuthReducer } from "../interfaces";
import * as Types from "./../types/AuthTypes";

const initialState: IAuthReducer = {
    isLoading: false,
    isSubmitting: false,
    loginData: null,
    otpStatus: false,
    otpExpireTime: '',
    otpInput: {
        otp: ''
    },
    loginInput: {
        email: "admin@example.com",
        password: "12345678",
    },
    resetPasswordInput: {
        email: "admin@example.com",
        password: "",
        confirmPassword: "",
        otp: ""
    }
};

function AuthReducer(state = initialState, action: any) {
    switch (action.type) {
        case Types.CHANGE_AUTH_INPUT_VALUE:
            const loginInput = { ...state.loginInput };
            // @ts-ignore
            loginInput[action.payload.name] = action.payload.value;
            return {
                ...state,
                loginInput,
            };

        case Types.CHANGE_OTP_INPUT_VALUE:
            const otpInput = { ...state.otpInput };
            // @ts-ignore
            otpInput[action.payload.name] = action.payload.value;
            return {
                ...state,
                otpInput,
            };

        case Types.SUBMIT_LOGIN:
            if (action.payload.status === true) {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                    loginInput: initialState.loginInput
                };
            } else {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                };
            }
        case Types.OTP_LOGIN:
            if (action.payload.otpStatus === true) {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                    otpStatus: action.payload.otpStatus,
                    otpExpireTime: action.payload.otpExpireTime
                };
            } else {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                };
            }

        case Types.OTP_SUBMIT:
            if (action.payload.otpStatus === true) {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                    otp: action.payload.otp
                };
            } else {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                };
            }

        case Types.CHANGE_RESET_PASSWORD_INPUT_VALUE:
            const resetPasswordInput = { ...state.resetPasswordInput };
            resetPasswordInput[action.payload.name] = action.payload.value;
            return {
                ...state,
                resetPasswordInput,
            };

        case Types.CHECK_VALID_USER:
            if (action.payload.otpStatus === true) {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                    otpStatus: action.payload.otpStatus,
                    otpExpireTime: action.payload.otpExpireTime
                };
            } else {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                };
            }

        case Types.SUBMIT_CHANGE_PASSWORD:
            if (action.payload.otpStatus === true) {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                    otp: action.payload.otp
                };
            } else {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                };
            }


        default:
            break;
    }
    return state;
}
export default AuthReducer;

