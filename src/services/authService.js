import data from './serviceHttp';
const { Post } = data;
export const login = (data) => {
  return Post('/auth/signin', data).then(res => {
    document.cookie = `token=${res.token}`;
    console.log(document.cookie);
    return res;
  }).catch(err => {
    console.log(err);
  })
};

export const register = (data) => Post('/auth/signup', data);


export const fecherUser = () => {

  if (document.cookie.includes("token=")) {
    const token = document.cookie.split("token=")[1];
    console.log('token fecht', token);
    if(!token){
      const error = new Error("Not authorized!");
      error.status = 403;
      throw error;
    }
    return {
        token: document.cookie.split("token=")[1],
    }
  }
  // not authorized
  const error = new Error("Not authorized!");
  error.status = 403;
  throw error;
};

export const logOut = () => {
  console.log('se esta borrando a la verga',  document.cookie);
  document.cookie='token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}