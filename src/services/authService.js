import data from './serviceHttp';
const { Post } = data;

export const login = (data) => {
  return Post('/auth/signin', data).then(res => {
    if(res.token!=undefined){
      document.cookie = `token=${res.token}`;
      localStorage.setItem('user', JSON.stringify(res.user));
    }
    return res;
  }).catch(err => {
    console.log(err);
  })
};

export const register = (data) => Post('/auth/signup', data);


export const fecherUser = () => {
  if (document.cookie.includes("token=")) {
    const token = document.cookie.split("token=")[1];
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log('token fecht', token);
    if(!token){
      const error = new Error("Not authorized!");
      error.status = 403;
      throw error;
    }
    return {
        token,
        user
    }
  }
  // not authorized
  const error = new Error("Not authorized!");
  error.status = 403;
  throw error;
};

export const logOut = () => {
  document.cookie='token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  localStorage.removeItem('user');
}