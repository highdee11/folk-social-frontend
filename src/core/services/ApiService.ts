import { ApiServiceInterface } from "../interfaces/ApiServiceInterface"
import axios, { AxiosError, AxiosInstance, AxiosResponse }  from 'axios'
import AuthService from "./AuthService";
import { StorageConst } from "../data/const";
import { NotificationService } from "./NotificationService";

export default class ApiService implements ApiServiceInterface{

    private client:AxiosInstance;
    private shouldNotify:boolean = false
    private token = localStorage.getItem(StorageConst.AUTH_TOKEN) || null

    public setShouldNotify(v: boolean){
        this.shouldNotify = v
    }

    constructor(){
        let headers:Record<string, any> = {
            "Content-Type": "application/json",
        }

        if(this.token){headers["Authorization"] = `Bearer ${this.token}`}

        this.client = axios.create({
            baseURL: import.meta.env.VITE_BASE_URL,
            timeout: 1000,
            headers
        })
    }

    async get<T>(url: string, params?: Record<string, any>): Promise<T>{
        // Compute query params
        const query = params != null ? new URLSearchParams(params): ''
         
        return new Promise((resolve, reject)=> {
            // Send GET HTTP Request
            this.client.get(`${url}${query.toString()}`)
            .then((result:AxiosResponse)=> {
                // Return data
                return resolve(result.data as T);
            })
            .catch((e:any)=> {
                this.handleError(e)
                return reject(e)
            })
}       );
         
    }


    async post<T , U>(url: string, body: U, params?: Record<string, any>): Promise<T>{
        // Compute query params
        const query = params != null ? new URLSearchParams(params): ''
        
        return new Promise((resolve, reject)=> {
            // Send GET HTTP Request
            this.client.post(`${url}${query.toString()}`, body)
            .then((result:AxiosResponse)=> {
                // Return data
                return resolve(result.data as T);
            })
            .catch((e:any)=> {
                this.handleError(e)
                return reject(e)
            })
}       );
    }
    
    handleError(result:AxiosResponse){  
        let message = result.data?.message || result.message || "Error occured while fetching data!";
 
        if(result.status == 401){
            AuthService.logout()
        }else if(result.status == 422){
            for(let err in result.data.data){
                message += `${err} <br />`
            }
        }

        if(this.shouldNotify) 
        NotificationService.error(message)
    }

}