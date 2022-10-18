import axiosClient from "./axiosClient"
import qs from 'qs';

const stationAPI = {

    // [GET] agent/_id_agent/warehouse/:id_warehouse/station/connect
    path_station_connect : `[GET] agent/_id_agent/warehouse/:id_warehouse/station/:id_station/connect`,
    station_connect  : async (id_warehouse, id_station) => {
        const data = await axiosClient.get(`agent/_id_agent/warehouse/${id_warehouse}/station/${id_station}/connect?iot_username=${iot_username}&${iot_password}`)
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },
    // [DELETE] agent/_id_agent/warehouse/:id_warehouse/station/:id_station/disconnect
    path_station_disconnect : `[DELETE] agent/_id_agent/warehouse/:id_warehouse/station/:id_station/disconnect`,
    station_disconnect  : async (id_warehouse, id_station) => {
        const data = await axiosClient.delete(`agent/_id_agent/warehouse/${id_warehouse}/station/${id_station}/disconnect`)
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },

}

export default stationAPI