import { ApiServiceInterface } from "../interfaces/ApiServiceInterface"
import axios, { AxiosInstance, AxiosResponse }  from 'axios'
import AuthService from "./AuthService";
import { StorageConst } from "../data/const";

export default class ApiService implements ApiServiceInterface{

    private client:AxiosInstance;

    constructor(){
        this.client = axios.create({
            baseURL: import.meta.env.VITE_BASE_URL,
            timeout: 1000,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem(StorageConst.AUTH_TOKEN)}`
            }
        })
    }

    async get<T>(url: string, params?: Record<string, any>): Promise<T>{
        // Compute query params
        const query = params != null ? new URLSearchParams(params): ''
        
        // Send GET HTTP Request
        const result:AxiosResponse = await this.client.get(`${url}${query.toString()}`)

        // Handle Error
        if(result.status != 200) this.handleError(result)

        // Return data
        return result.data as T;
    }


    async post<T , U>(url: string, body: U, params?: Record<string, any>): Promise<T>{
        // Compute query params
        const query = params != null ? new URLSearchParams(params): ''
        
        // Send POST HTTP Request
        const result:AxiosResponse = await this.client.post(`${url}${query.toString()}`, body)
    
        // Handle Error
        if(result.status != 200) this.handleError(result)

        // Return data
        return result.data as T;
    }
    
    handleError(result:AxiosResponse){
        let message = result.data.message ?? "Error occured while fetching data!";

        if(result.status == 401){
            AuthService.logout()
        }else if(result.status == 422){
            for(let err in result.data.data){
                message += `${err} <br />`
            }
        }
        throw new Error(message)
    }

}