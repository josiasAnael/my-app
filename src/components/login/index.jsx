 import  * as compontL from './styles.jsx'
import  {Loginbt} from '../botton/loginbotton'
import { login } from '../../services/authService.js';

import {useUser} from '../../context/authcontext';
import { Navigate, useNavigate } from 'react-router-dom';

export const LoginC = () => {
    let navigate = useNavigate();
    const {loading,token,setUser} = useUser();

    const onsubmit = (e) => {
        e.preventDefault();
        let form = e.target;
        let data = {
            accountnumber: form.username.value,
            password: form.password.value,
        };
        login(data).then((res) => {
            console.log(res);
            if(res){
                setUser({token:res.token, user: res.user}).then((token) => {
                    console.log('token', token)
                    navigate('/');
                });
            }
        }).catch ((err) => {
            console.log(err);
        });
    }
    return (
        <>
            <compontL.Loginlimiter limiter>
                <compontL.containerlogin100 containerlogin100>
                        <compontL.form_title loginformtitle>
                            {/* poner una imagen */}
                            <div className="logo">
                                <compontL.Logo Logo src="https://login.sec.unicah.net/imgs/logounicah.png" alt="logo" />
                            </div>

                        </compontL.form_title>
                            <compontL.login100_form login100_form onSubmit={onsubmit}>
                                <compontL.wrap_input101 wrap_input101>

                                    <compontL.Imput_Label Imput_Label> Usuario:</compontL.Imput_Label>
                                    <compontL.input100 input100 type="text" name="username" id="floatingInput" placeholder="" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px", }} ></compontL.input100>
                                </compontL.wrap_input101>


                                <compontL.wrap_input101 wrap_input101>
                                    <compontL.Imput_Label Imput_Label> Contraseña:</compontL.Imput_Label>
                                    <compontL.input100 input100  type="password" name="password" id="floatingPassword" placeholder=""/>
                                </compontL.wrap_input101>
                            <Loginbt/>                           
                            </compontL.login100_form>
                </compontL.containerlogin100>
            </compontL.Loginlimiter>
        </>
    )
}