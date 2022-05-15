import { useEffect,useState  } from "react";
import {getCustomer } from "../services/customerServices";

export const useCustomer=()=>{
    const [customers, setCustomers] = useState([]);
    // loading
    const [loading, setLoading] = useState(false);

    const [update, setUpdate] = useState(false);
    // error
    const [error, setError] = useState(null);

    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        getCustomer('/users').then(data => {
            setCustomers(data);
            setData(data);
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
    const filter = (text) => {
        if (text === '') {
            setCustomers(data);
            return ;
        }
        setCustomers(data.filter(customer => customer.username.toLowerCase().includes(text.toLowerCase()) || customer.accountnumber.toLowerCase().includes(text.toLowerCase())));  
    }

    return {
        loading,
        error,
        customers,
        handleUpdate,
        filter
    }
   
}


