import { useEffect,useState  } from "react";
import {getCustomer } from "../services/customerServices";

export const useCustomer=()=>{
    const [customers, setCustomers] = useState([]);
    // loading
    const [loading, setLoading] = useState(false);
    // updateing
    const [update, setUpdate] = useState(false);
    // error
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        getCustomer('/users').then(data => {
            setCustomers(data);
        }
        ).catch(err => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        });
    } , [update]);

    const handleUpdate = () => {
        setUpdate(!update);
    }
    return {
        loading,
        error,
        customers,
        handleUpdate
    }
}


