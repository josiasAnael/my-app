import useSWR from "swr";
import {fecherUser} from "../services/authService";

export const useUser=()=>{
    const {data ,isValidating,mutate} = useSWR('/auth',fecherUser);
    return {
        loading:!data || isValidating,
        token:data?.token,
        user:data?.user,
        isadmin:data?.user?.roles.name==='admin',
        setUser:mutate
        
    }
}