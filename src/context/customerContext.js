import useSWR from "swr";
import {getCustomer} from "../services/customerServices";

export const useCustomer=()=>{
    const {data ,error ,isValidating} = useSWR('/users',getCustomer);
    return {
        loading:!data || isValidating,
        error,
        data,
    }

}