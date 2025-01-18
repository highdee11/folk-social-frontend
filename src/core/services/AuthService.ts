import {StorageConst} from "../data/const";
import { routes } from "../data/route";

export default class AuthService {
    public static logout(){
        localStorage.removeItem(StorageConst.AUTH_TOKEN)
        window.location.href = routes.login;
    }
}