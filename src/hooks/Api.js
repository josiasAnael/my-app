import axios from 'axios';

export const fechApi =async (url, data)=>{
    data = await axios.get(url)
    return {data}

}

