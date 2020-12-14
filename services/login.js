import Api from './api'; 
import { BASE_URL } from './config';

export const login = async(data) => {
    try{
        const resp = await Api.login(`${BASE_URL}/auth/local`, data);
        return resp;
    } catch( err ){
        console.log(err)
        return err
    }
} 
