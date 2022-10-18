import axiosClient from "./axiosClient"
import qs from 'qs';

const agentAPI = {

    // [POST] agent/add
    path_add_agent: '[POST] agent/add',
    add: async (agentName, agentOwner, companyld) => {
        
        const body = {
            agentName, agentOwner, companyld
        }
        const data = await axiosClient.post('agent/add', qs.stringify(body))
        
        if (data.status === "Successfully") {
            console.log(data.data);
        }
        else {

        }
    },

    
    
    // [POST] agent/:id_agent/update
    path_update_agent_information: '[POST] agent/:id_agent/update',
    update_agent_information : async (id_agent, agentName, agentOwner) => {
        const body = {
            agentName, agentOwner
        }
        const data = await axiosClient.post(`agent/${id_agent}/update`, qs.stringify(body))
        if (data.status === "Successfully") {
            console.log(data.data);
        }
        else {
            
        }
    },
   
    // [DELETE] agent/:id_agent/delete
    path_delete: '[GET] agent/:id_agent/delete',
    delete: async (id_agent) => {
        const data = await axiosClient.delete(`agent/${id_agent}/delete`)
        if (data.status === "Successfully") {
            console.log(data.data)
        }
        else {

        }
    },

}

export default agentAPI




