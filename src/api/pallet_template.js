import axiosClient from "./axiosClient"
import qs from 'qs';

const pallet_template = {
    
    // [GET] pallet_template/get_all
    path_get_all_pallet_template: '[GET] pallet_template/get_all',
    get_all_pallet_template: async () => {
        const data = await axiosClient.get('pallet_template/get_all')
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },




}

export default pallet_template