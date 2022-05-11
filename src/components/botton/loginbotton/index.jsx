import  {Container100_btn, Btn} from './styles.jsx'

export const Loginbt = () => {
 
    return (
            <Container100_btn>
                <Btn primary="true" style={{marginTop: "30px"}}>
                    Inicio Sesion
                </Btn>
            
            </Container100_btn>
    )
}

export const SendEmail = () => {
 
    return (
            
                <Btn primary="true">
                    Enviar Email
                </Btn>
            
           
    )
}

export const CodigoVerificacion = () => {
 
    return (
            <Container100_btn>
                <Btn primary>
                    Ingrese Codigo
                </Btn>
            
            </Container100_btn>
    )
}

//recuperar contraseña
export const Recuperarpass = () => {
    return(
    <>
    
    <div className="container-fluid " style={{marginBlock: "10px"}}>
        <div className="forgot-password">
            <a href="#">
                <label className="forgot-password-label">
                    ¿Olvidaste tu contraseña?
                </label>
            </a>
        </div>
    </div>
    </>
    )
}