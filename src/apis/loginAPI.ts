import axios from './axiosInstance.ts'

export const LoginAPI = async (url:string,payload:any) => {
try {
    const restData = axios.post(url,payload)
    .then((data) => {return data})
    .catch((error:any) => {return error});
        console.log(restData);
    
    return restData;
} catch (err) {
    return err;
}
}

export default LoginAPI;