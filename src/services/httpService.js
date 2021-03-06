import axios from 'axios';
import {toast} from "react-toastify";
import * as Sentry from "@sentry/react";

axios.interceptors.response.use(null,error=>{

    const expectedError = error.response && error.response.status>=400 && error.response.status<500;

    if(!expectedError){
        console.log("Logging the error.",error);
        //toast.error or toast.success
        toast("An unexpected error has occured.");
    }

    return Promise.reject(error);
});

export default{
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put
};