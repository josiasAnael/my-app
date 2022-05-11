import http from './serviceHttp'
const {Get,Post,Put} = http;
//documents

export const createDocument = (data) => {
    return Post(`${url}/createDocument`,data).then(res => {
        return res;
    }).catch(err => {
        console.log(err);
    })
}

export const getDocument = (url) => {
    return Get(`${url}`).then(res => {
        return res;
    }).catch(err => {
        console.log(err);
    })
}

export const getDocumentById = (id) => {
    return Get(`/documents/${id}`).then(res => {
        return res;
    }
    ).catch(err => {
        console.log(err);
    }
    )
}

export const updateDocument = (data) => {
    return Put( `${url}/updateDocument`,data).then(res => {
        return res;
    }).catch(err => {
        console.log(err);
    })
}

export const updateStateDocument = (data) => {
    return Put( `${url}/updateDocumentState`,data).then(res => {
        return res;
    }).catch(err => {
        console.log(err);
    })
}

