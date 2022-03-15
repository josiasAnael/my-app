import useSWR from "swr";
import {fecherUser} from "../services/authService";

export const useUser=()=>{
    const {data ,isValidating,mutate} = useSWR('/auth',fecherUser);

    console.log('data', data);
    return {
        loading:!data || isValidating,
        token:data?.token,
        setUser:mutate,
    }
}