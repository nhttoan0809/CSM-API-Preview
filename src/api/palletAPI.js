import axiosClient from "./axiosClient"
import qs from 'qs';

const palletAPI = {

    // [GET] agent/:id_agent/warehouse/:id_warehouse/pallet/get_all
    path_get_all_pallet: '[GET] agent/:id_agent/warehouse/:id_warehouse/pallet/get_all',
    get_all_pallet: async (id_agent,id_warehouse) => {
        const data = await axiosClient.get(`agent/${id_agent}/warehouse/${id_warehouse}/pallet/get_all`)
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
    // [POST] agent/:id_agent/warehouse/:id_warehouse/pallet/import
    path_import : `[POST] agent/:id_agent/warehouse/:id_warehouse/pallet/import`,
    import: async (id_agent, id_warehouse, pallet_template_id, description, created_date) => {
        const body = {
            pallet_template_id, description, created_date
        }
        const data = await axiosClient.post(`agent/${id_agent}/warehouse/${id_warehouse}/pallet/import`, qs.stringify(body))
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
    // [DELETE] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/delete
    path_delete : `[DELETE] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/delete`,
    deleta_pallet: async (id_agent, id_warehouse, id_pallet) => {
        const data = await axiosClient.delete(`agent/${id_agent}/warehouse/${id_warehouse}/pallet/${id_pallet}/delete`)
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
    // [POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/add_to_warehouse
    path_add_pallet_to_warehouse : `[POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/add_to_warehouse`,
    add_pallet_to_warehouse: async (id_agent, id_warehouse, id_pallet, position, storage) => {
        const body = {
            position, storage
        }
        const data = await axiosClient.post(`agent/${id_agent}/warehouse/${id_warehouse}/pallet/${id_pallet}/add_to_warehouse`, qs.stringify(body))
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
    // [POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/remove_from_warehouse
    path_remove_pallet_from_warehouse: `[POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/remove_from_warehouse`,
    remove_pallet_from_warehouse: async (id_agent, id_warehouse, id_pallet) => {
        const data = await axiosClient.post(`agent/${id_agent}/warehouse/${id_warehouse}/pallet/${id_pallet}/remove_from_warehouse`)
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
    // [POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/update_information
    path_update_pallet_information : `[POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/update_information`,
    update_pallet_information: async (id_agent, id_warehouse, id_pallet, description) => {
        const body = {
            description
        }
        const data = await axiosClient.post(`agent/${id_agent}/warehouse/${id_warehouse}/pallet/${id_pallet}/update_information`, qs.stringify(body))
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
    // [POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/update_position
    path_update_pallet_position : `[POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/update_position`,
    update_pallet_position: async (id_agent, id_warehouse, id_pallet, position) => {
        const body = {
            position
        }
        const data = await axiosClient.post(`agent/${id_agent}/warehouse/${id_warehouse}/pallet/${id_pallet}/update_position`, qs.stringify(body))
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
    

}

export default palletAPI