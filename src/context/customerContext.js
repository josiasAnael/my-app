import useSWR from "swr";
import {getCustomer, createCustomers, updateCustomers} from "../services/customerServices";

export const useCustomer=()=>{
    const {data ,error ,isValidating} = useSWR('/users',getCustomer);

    return {
        loading:!data || isValidating,
        error,
        data,
    }

}

export const createCustomer=()=>{
    const {data ,error ,isValidating} = useSWR('/users/createCustomer',createCustomer);
    return {
        loading:!data || isValidating,
        error,
        data,
    }
}

export const UpdateCustomer=()=>{
    const {data ,error ,isValidating} = useSWR('/users/updateCustomer',updateCustomers);
    return {
        loading:!data || isValidating,
        error,
        data,
    }
}

{/* actualizar la contraseña del usuario logeado */}