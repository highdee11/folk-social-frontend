import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { ThemeConst } from "../data/const";
import { ThemeSliceActions } from "../../store/slices/ThemeSlice";
import { useEffect } from "react";

const useTheme = ()=> {
    const dispatch = useDispatch()
    const darkMode = useSelector((state: RootState)=> state.theme.mode) == ThemeConst.DARK
    
    const toggleTheme = () => {
        dispatch(ThemeSliceActions.setMode(!darkMode? ThemeConst.DARK: ThemeConst.LIGHT))
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode])

    return { 
        darkMode,
        toggleTheme,
    }
}

export default useTheme