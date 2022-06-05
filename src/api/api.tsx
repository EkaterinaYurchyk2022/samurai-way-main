import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "14792c9c-30d1-45c9-8975-ae0b8af25491"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users? page =${currentPage} & count =${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`
        )
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.log("Obsolete method. Please use profileAPI object")
        return profileAPI.getProfile(+userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }
}

export const authAPI(){
    me()
    {
        return instance.get(`auth/me`)
    }
}

