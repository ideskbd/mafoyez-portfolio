import * as Types from "../types/AuthTypes";
import { Toaster } from "@/components/toaster";
import { KEY_ACCESS_TOKEN, KEY_USER_DATA } from "@/utils/keys";
import axios from "@/utils/axios";
export const changeInputValue = (name: string, value: any) => (dispatch: any) => {
    let data = {
        name: name,
        value: value,
    }

    dispatch({ type: Types.CHANGE_AUTH_INPUT_VALUE, payload: data });
};

export const changeOtpInputValue = (name: string, value: any) => (dispatch: any) => {
    let data = {
        name: name,
        value: value,
    }

    dispatch({ type: Types.CHANGE_OTP_INPUT_VALUE, payload: data });
};

export const handleLogin = (loginInput: { email: string; password: string; }) => (dispatch: any) => {
    if (loginInput.email === "") {
        Toaster("error", "Please give email.");
        return false;
    }
    if (loginInput.password === "") {
        Toaster("error", "Please give password.");
        return false;
    }

    let responseData = {
        status: false,
        message: "",
        isLoading: true,
        userData: null,
        accessToken: "",
        otpStatus: false,
        otpExpireTime: null
    };
    dispatch({ type: Types.SUBMIT_LOGIN, payload: responseData });

    axios.post(`/login`, loginInput)
        .then((res: any) => {
            responseData.status = true;
            responseData.isLoading = false;
            responseData.message = res.message;
            responseData.accessToken = res.data.access_token;
            responseData.userData = res.data.user;
            if (responseData.status == true) {
                sendOtp(responseData.userData.phone, responseData.userData.id).then((data) => {
                    responseData.message = data.data.original.message;
                    responseData.otpStatus = data.data.original.status;
                    responseData.otpExpireTime = data.data.original.expire_date;
                    Toaster('success', responseData.message);
                    dispatch({ type: Types.OTP_LOGIN, payload: responseData });
                })
            } else {
                responseData.isLoading = false;
                Toaster('error', responseData.message);
                dispatch({ type: Types.SUBMIT_LOGIN, payload: responseData });
            }
        }).catch((error) => {
            responseData.isLoading = false;
            dispatch({ type: Types.SUBMIT_LOGIN, payload: responseData })
        });
}

export const handleOtpLogin = (loginInput: { email: string; password: string; }, otpInput: { otp: string; }) => (dispatch: any) => {

    if (otpInput.otp === "") {
        Toaster("error", "Please give OTP.");
        return false;
    }

    let responseData = {
        status: false,
        message: "",
        isLoading: true,
        userData: null,
        accessToken: "",
        otpStatus: false,
        otpExpireTime: null
    };
    dispatch({ type: Types.SUBMIT_LOGIN, payload: responseData });
    let otpData = {
        otp: otpInput.otp,
        email: loginInput.email
    }
    axios.post(`/otp-check`, otpData)
        .then((res: any) => {
            if (res.data === false) {
                Toaster('error', 'Invalid OTP');
                responseData.isLoading = false;
                dispatch({ type: Types.SUBMIT_LOGIN, payload: responseData })
            } else {
                responseData.status = true;
                responseData.isLoading = false;
                responseData.message = res.message;
                responseData.accessToken = res.data.access_token;
                responseData.userData = res.data.user;
                Toaster('success', responseData.message);
                localStorage.setItem(KEY_ACCESS_TOKEN, JSON.stringify(responseData.accessToken));
                localStorage.setItem(KEY_USER_DATA, JSON.stringify(responseData.userData));
                dispatch({ type: Types.SUBMIT_LOGIN, payload: responseData });
                window.location.href = '/';
            }

        }).catch((error) => {
            responseData.isLoading = false;
            dispatch({ type: Types.SUBMIT_LOGIN, payload: responseData })
        });
}

export const sendOtp = async (phone: string, id: number) => {
    return await axios.post(`/otp`, {
        phone_no: phone,
        id: id
    });
}


export const getAuthData = () => {
    const getToken = localStorage.getItem(KEY_ACCESS_TOKEN);
    const getUserData = localStorage.getItem(KEY_USER_DATA);

    const authData = {
        accessToken: "",
        userData: null
    }

    if ((typeof getToken !== "undefined" && getToken !== null) && (typeof getUserData !== "undefined" && getUserData !== null)) {
        authData.accessToken = JSON.parse(getToken);
        authData.userData = JSON.parse(getUserData);
    }
    return authData;
}


export const handleChangeResentPasswordInput = (name: string, value: any) => (dispatch: any) => {
    let data = {
        name: name,
        value: value,
    }

    dispatch({ type: Types.CHANGE_RESET_PASSWORD_INPUT_VALUE, payload: data });
};


export const checkUser = (user_address: any) => (dispatch: any) => {
    if (user_address === "") {
        Toaster("error", "Email or Phone can't be blank!");
        return false;
    }

    let responseData = {
        message: "",
        isLoading: true,
        otpStatus: false,
        otpExpireTime: null
    };
    dispatch({ type: Types.CHECK_VALID_USER, payload: responseData });

    axios.post(`/user-check`, { user_address })
        .then((res: any) => {
            responseData.message = res.data.original.message;
            responseData.otpStatus = res.data.original.status;
            responseData.otpExpireTime = res.data.original.expire_date;
            responseData.isLoading = false;
            Toaster('success', responseData.message);
            dispatch({ type: Types.CHECK_VALID_USER, payload: responseData });
        }).catch((error) => {
            responseData.isLoading = false;
            dispatch({ type: Types.CHECK_VALID_USER, payload: responseData });
        });
}


export const changePassword = (resetPasswordInput: any) => (dispatch: any) => {

    if (resetPasswordInput.password !== resetPasswordInput.confirmPassword) {
        Toaster("error", "Passwords do not match!");
        return false;
    }

    let responseData = {
        status: false,
        message: "",
        isLoading: true,
        userData: null,
        accessToken: "",
    };
    dispatch({ type: Types.SUBMIT_CHANGE_PASSWORD, payload: responseData });

    axios.post(`/reset-password`, resetPasswordInput)
        .then((res: any) => {
            if (res.data === false) {
                Toaster('error', 'Invalid OTP');
                responseData.isLoading = false;
                dispatch({ type: Types.SUBMIT_CHANGE_PASSWORD, payload: responseData })
            } else {
                responseData.status = true;
                responseData.isLoading = false;
                responseData.message = res.message;
                responseData.accessToken = res.data.access_token;
                responseData.userData = res.data.user;
                Toaster('success', responseData.message);
                localStorage.setItem(KEY_ACCESS_TOKEN, JSON.stringify(responseData.accessToken));
                localStorage.setItem(KEY_USER_DATA, JSON.stringify(responseData.userData));
                dispatch({ type: Types.SUBMIT_CHANGE_PASSWORD, payload: responseData });
                window.location.href = '/';
            }
        }).catch((error) => {
            responseData.isLoading = false;
            dispatch({ type: Types.SUBMIT_CHANGE_PASSWORD, payload: responseData });
        });
}
