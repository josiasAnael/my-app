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

export const createCustomer=()=>{
    const {data ,error ,isValidating} = useSWR('/users/createUser',createCustomer);
    return {
        loading:!data || isValidating,
        error,
        data,
    }
}

export const UpdateCustomer=()=>{
    const {data ,error ,isValidating} = useSWR('/users/updateUser',updateCustomers);
    return {
        loading:!data || isValidating,
        error,
        data,
    }
}

/// actualizar la contraseña del usuario logeado
export const UpdatePassword=()=>{
    const {data ,error ,isValidating} = useSWR('/users/updatePassword',updateCustomers);
    return {
        loading:!data || isValidating,
        error,
        data,
    }
}

