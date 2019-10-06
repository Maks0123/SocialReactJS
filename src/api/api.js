import * as axios from 'axios';

const instance = axios.create({
       withCredentials: true,
       baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
       headers: {
        "API-KEY" : "9b0281c0-75a4-4ff3-8d22-6468e4408964"
       }


});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
       return response.data;
       });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        return instance.get(`profile/` + userId ) ;   
    }

} 




export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
} 

