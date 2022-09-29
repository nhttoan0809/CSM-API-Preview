import axiosClient from "./axiosClient"
import qs from 'qs';

const authAPI = {

    // [POST] auth/login
    path_login: `[POST] auth/login`,
    login: async (username, password) => {
        const body = {
            username, password
        }
        const data = await axiosClient.post('auth/login', qs.stringify(body))
        if (data.status === "Successfully") {
            const access_token = data.access_token;
            console.log(`token: ${access_token}`);
            localStorage.setItem('accessToken-CSM', access_token);
        }
        else {
            console.log("Login failure");
        }
    },

    // [GET] auth/logout
    path_logout: `[GET] auth/logout`,
    logout: async () => {
        const data = await axiosClient.get('auth/logout')
        if (data.status === "Successfully") {
            
        }
        else {

        }
    },

    // [POST] auth/register
    path_register : `[POST] auth/register`,
    register: async (username, password, rePassword, email, companyName) => {
        const body = {
            username, password, rePassword, email, companyName
        }
        const data = await axiosClient.post('auth/register', qs.stringify(body))
        if (data.status === "Successfully") {

        }
        else {

        }
    },

    // [POST] auth/update
    path_updateInfomation : `[POST] auth/update`,
    updateInformation: async (email, companyName, address) => {
        const body = {
            email, companyName, address
        }
        const data = await axiosClient.post('auth/update', qs.stringify(body))
        if (data.status === "Successfully") {

        }
        else {

        }
    },

    // [POST] auth/company/update
    path_updateCompanyInfomation : `[POST] auth/company/update`,
    updateCompanyInfomation: async (email, companyName, address) => {
        const body = {
            email, companyName, address
        }
        const data = await axiosClient.post('auth/company/update', qs.stringify(body))
        if (data.status === "Successfully") {

        }
        else {

        }
    }
}

export default authAPI