import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('Error tracked in the interceptors:', error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('Logout the user');
                logOut()
                    .then(() => { 
                        navigate('/login');
                    })
                    .catch(error => console.error(error))
            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;