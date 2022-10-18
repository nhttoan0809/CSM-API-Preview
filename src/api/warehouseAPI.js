import axiosClient from "./axiosClient"
import qs from 'qs';

const warehouseAPI = {

    // [GET] agent/:id_agent/warehouse/get_all
    // [POST] agent/:id_agent/warehouse/add
    path_warehouse_add : `[POST] agent/:id_agent/warehouse/add`,
    warehouse_add: async (id_agent, warehouse_name, address, length, width, height) => {
        const body = {
            warehouse_name, address, length, width, height
        }
        const data = await axiosClient.post(`agent/${id_agent}/warehouse/add`, qs.stringify(body))
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },


    // [POST] agent/:id_agent/warehouse/:id_warehouse/update
    path_warehouse_update_information : `[POST] agent/:id_agent/warehouse/:id_warehouse/update`,
    warehouse_update_information: async (id_agent, id_warehouse, warehouseName, address, length, width, height) => {
        const body = {
            warehouseName, address, length, width, height
        }
        const data = await axiosClient.post(`agent/${id_agent}/warehouse/${id_warehouse}/update`, qs.stringify(body))
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
    // [POST] agent/:id_agent/warehouse/:id_warehouse/import
    path_warehouse_import : `[POST] agent/:id_agent/warehouse/:id_warehouse/import`,
    warehouse_import : async (id_agent, id_warehouse, description, width, length, height) => {
        const body = {
            description, width, length, height
        }
        const data = await axiosClient.post(`agent/${id_agent}/warehouse/${id_warehouse}/import`, qs.stringify(body))
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
    // [DELETE] agent/:id_agent/warehouse/:id_warehouse/export
    path_warehouse_export : `[DELETE] agent/:id_agent/warehouse/:id_warehouse/export`,
    warehouse_export : async (id_agent, id_warehouse) => {
        const data = await axiosClient.delete(`agent/${id_agent}/warehouse/${id_warehouse}/export`)
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
    // [DELETE] agent/:id_agent/warehouse/:id_warehouse/delete
    path_warehouse_delete : `[DELETE] agent/:id_agent/warehouse/:id_warehouse/delete`,
    warehouse_delete : async (id_agent, id_warehouse) => {
        const data = await axiosClient.delete(`agent/${id_agent}/warehouse/${id_warehouse}/delete`)
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },

}

export default warehouseAPI
