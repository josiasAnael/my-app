 import  * as compontL from './styles.jsx'
import  {Loginbt} from '../botton/loginbotton'

export const LoginC = () => {
 
    return (
        <>
            
            <compontL.Loginlimiter limiter>
                <compontL.containerlogin100 containerlogin100>
                        <compontL.form_title loginformtitle>
                            Inicio de sesion
                        </compontL.form_title>
                            <compontL.login100_form login100_form>
                                <compontL.wrap_input101 wrap_input101>
                                    <compontL.input100 input100  type='text' name="username" id="floatingInput" placeholder="Usuario"/>
                                    <compontL.focus_input100 focus_input100 data-placeholder=""/>
                                </compontL.wrap_input101>

                                <compontL.wrap_input101 wrap_input101>
                                    <compontL.input100 input100  type="password" name="password" id="floatingPassword" placeholder="Contraseña"/>
                                    <compontL.focus_input100 focus_input100 data-placeholder=""/>
                                    
                                </compontL.wrap_input101>

                            <Loginbt/>
                                                              
                            </compontL.login100_form>

                <compontL.p>
                    No tienes Usuario?
                <compontL.a  href='' type='submit'> 
                    &nbsp; Registrate
                </compontL.a>
                </compontL.p>
                
                </compontL.containerlogin100>
            </compontL.Loginlimiter>
       

        
        </>
    )
}