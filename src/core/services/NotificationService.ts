import { Bounce, toast } from "react-toastify";
import { StorageConst } from "../data/const";

export class NotificationService {
    public static error(message: string){
        toast(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: localStorage.getItem(StorageConst.THEME) || 'light',
            transition: Bounce,
        });
    }
}