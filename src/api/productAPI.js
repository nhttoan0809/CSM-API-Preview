import axiosClient from "./axiosClient"
import qs from 'qs';

const productAPI = {

    // [GET] agent/:id_agent/warehouse/:id_warehouse/prodcut/get_all
    // [POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/add_to_pallet
    path_add_product_to_pallet : `[POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/add_to_pallet`,
    add_product_to_pallet: async (id_agent, id_warehouse, id_product, pallet_id, position) => {
        const body = {
            pallet_id, position
        }
        const data = await axiosClient.post(`agent/${id_agent}/warehouse/${id_warehouse}/product/${id_product}/add_to_pallet`, qs.stringify(body))
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
    // [POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/remove_from_pallet
    path_remove_product_from_pallet : `[POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/add_to_pallet`,
    remove_product_from_pallet: async (id_agent, id_warehouse, id_product) => {
        const data = await axiosClient.post(`agent/${id_agent}/warehouse/${id_warehouse}/product/${id_product}/remove_from_pallet`)
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
    // [POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/update_information
    path_update_product_information : `[POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/update_information`,
    update_product_information: async (id_agent, id_warehouse, id_product, description, width, length, height) => {
        const body = {
            description, width, length, height
        }
        const data = await axiosClient.post(`agent/${id_agent}/warehouse/${id_warehouse}/product/${id_product}/update_information`, qs.stringify(body))
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
    // [POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/update_position
    path_update_product_position : `[POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/update_position`,
    update_product_position: async (id_agent, id_warehouse, id_product, position) => {
        const body = {
            position
        }
        const data = await axiosClient.post(`agent/${id_agent}/warehouse/${id_warehouse}/product/${id_product}/update_position`, qs.stringify(body))
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
        

}

export default productAPI