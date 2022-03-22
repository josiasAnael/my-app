import http from './serviceHttp'
const {Get,Post} = http;
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

export const createCustomer = (data) => {
    return Post('/users/',data)
}
