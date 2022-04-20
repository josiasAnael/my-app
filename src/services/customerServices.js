import http from './serviceHttp'
const {Get,Post,Put} = http;

export const getCustomer = (url) => {
    return Get(`${url}`).then(res => {
        return res;
    }).catch(err => {
        console.log(err);
    })
}

export const getCustomerById = (id) => {
    return Get(`/users/${id}`)
}

export const createCustomers = (data) => {
    return Post( `${url}/createUser`,data).then(res => {
        return res;
    }).catch(err => {
        console.log(err);
    })
}
export const updateCustomers = (data) => {
    return Put( `${url}/updateUser`,data).then(res => {
        return res;
    }).catch(err => {
        console.log(err);
    })
}

///actualizar el estado del customers 

export const updateCustomersState = (data) => {
    return Put( `${url}/updateUserState`,data).then(res => {
        return res;
    }).catch(err => {n 
        console.log(err);
    })
}

//detele customer
export const deleteCustomer = (id) => {
    return Delete( `${url}/deleteUser/${id}`).then(res => {
        return res;
    }).catch(err => {
        console.log(err);
    })
}