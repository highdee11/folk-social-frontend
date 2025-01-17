import {StorageConst} from "../data/const";

export default class AuthService {

    public static logout(){
        localStorage.removeItem(StorageConst.AUTH_TOKEN)
        window.location.href = "/login";
    }
}