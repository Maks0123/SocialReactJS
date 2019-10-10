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
        console.warn("Obsolete method. Please profileAPI object.")
        return profileAPI.getProfile(userId);  
    }

} 


export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId ) ;   
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId ) ;   
    },
    updateStatus(status){
        return instance.put(`profile/status`, { status: status }) ;   
    },
} 



export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    },
    login(email, password, rememerMe = false){
        return instance.post(`auth/login`, {email, password, rememerMe });
    },
    logout(email, password, rememerMe = false){
        return instance.delete(`auth/login`);
    }
} 





