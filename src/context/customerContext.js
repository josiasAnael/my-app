import useSWR from "swr";
import {getCustomer, createCustomers, updateCustomers, deleteCustomer} from "../services/customerServices";

export const useCustomer=()=>{
    const {data ,error ,isValidating} = useSWR('/users',getCustomer);
    return {
        loading:!data || isValidating,
        error,
        data,
    }
}


