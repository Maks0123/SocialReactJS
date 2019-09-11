import * as axios from 'axios';

const instance = axios.create({
       withCredentials: true,
       baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
       headers: {
        "API-KEY" : "adace478-4707-456d-b6b8-9b7fa9b7e65e"
       }


});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
       return response.data;
       });
    }
} 

