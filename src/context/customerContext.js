import useSWR from "swr";
import {getCustomer} from "../services/customerServices";

export const useCustomer=()=>{
    const {data ,isValidating} = useSWR('/customer',getCustomer);
    return {
        loading:!data || isValidating,
        data,
    }

}