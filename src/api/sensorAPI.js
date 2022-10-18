import axiosClient from "./axiosClient"
import qs from 'qs';

const sensorAPI = {

    // [GET] agent/_id_agent/warehouse/:id_warehouse/sensor/get_all
    // [POST] agent/:id_agent/warehouse/:id_warehouse/sensor/:id_sensor/assign
    path_sensor_assign : `[POST] agent/:id_agent/warehouse/:id_warehouse/sensor/:id_sensor/assign`,
    sensor_assign: async (id_agent, id_warehouse, id_sensor, position) => {
        const body = {
            position
        }
        const data = await axiosClient.post(`agent/${id_agent}/warehouse/${id_warehouse}/sensor/${id_sensor}/assign`, qs.stringify(body))
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },

    // [POST] agent/:id_agent/warehouse/:id_warehouse/sensor/:id_sensor/update_position
    path_sensor_update_position : `[POST] agent/:id_agent/warehouse/:id_warehouse/sensor/:id_sensor/update_position`,
    sensor_update_position: async (id_agent, id_warehouse, id_sensor, position) => {
        const body = {
            position
        }
        const data = await axiosClient.post(`agent/${id_agent}/warehouse/${id_warehouse}/sensor/${id_sensor}/update_position`, qs.stringify(body))
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
    // [DELETE] agent/:id_agent/warehouse/:id_warehouse/sensor/:id_sensor/remove
    path_remove_sensor : `[POST] agent/:id_agent/warehouse/:id_warehouse/sensor/:id_sensor/remove`,
    remove_sensor: async (id_agent, id_warehouse, id_sensor) => {
       
        const data = await axiosClient.delete(`agent/${id_agent}/warehouse/${id_warehouse}/sensor/${id_sensor}/remove`)
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },

}

export default sensorAPI