import useSWR from "swr/immutable";
import {getDocument} from "../services/documenService";

export const useDocument=(id='')=>{
    const {data ,isValidating,mutate} = useSWR(`/documents/${id}`,getDocument);
    return {
        loading:!data || isValidating,
        document:data?.data,
        mutate,
    }
}