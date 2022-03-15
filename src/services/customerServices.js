import http from './serviceHttp'

const { Delete,Get,Post,Put } = http;


export const getCustomer = (data) => {
    return Get('/users/',data)
}

export const getCustomerById = (id) => {
    return Get(`/users/${id}`)
}

export const createCustomer = (data) => {
    return Post('/users/',data)
}
