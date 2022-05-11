import styled , { css } from 'styled-components'

export const Loginlimiter= styled.div`
${({limiter})=> limiter && css`
  width: 100%;
  margin: 0 auto;
` 
}
`
///
export const Containerlogin100= styled.div`
${({Containerlogin100})=> Containerlogin100 && css`
    width: 100%;  
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex-direction:column; 
    background-color: transparent;
`
}
`

export const Containeremail= styled.div`
${({Containeremail})=> Containeremail && css`
    width: 100%;  
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex-direction:column; 
    background-color: transparent;
`
}
`

export const Logo= styled.img`
${({Logo})=> Logo && css`

    width: 300px;
    display: block;
    margin: 0 auto;
`
}
`
///

export const Imput_Loging = styled.div`
${({Imput_Loging})=> Imput_Loging && css`

    position: relative;
    border: 1px solid #C1C1C1;
    height: 5rem;
    margin-bottom: -1px
`
}
`

export const Imput_Label = styled.label`
${({Imput_Label})=> Imput_Label && css`

    position: absolute;
    left: 1rem;
    font-size: 16px;
    top: 0.7rem;    
    color: #878787;
`
}
`


export const Form_title= styled.span`
${({loginformtitle})=> loginformtitle && css`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  display: block;
  padding-bottom: 41px;
`
}
`

export const Login100_form= styled.form`
${({Login100_form})=> Login100_form && css`
width: 350px;
height:300px;
    padding-bottom: 33px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(25, 0, 255, 0.24);
`
}
`

export const FormPassword= styled.form`
${({FormPassword})=> FormPassword && css`
width: 400px;
height:330px;
    padding-bottom: 33px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(25, 0, 255, 0.24);
`
}
`

export const Wrap_input101= styled.div`
${({Wrap_input101})=> Wrap_input101 && css`

 
    position: relative;
    border-bottom: 1px solid #e6e6e6;

    padding-block-end: 1px;
    margin-bottom: -1px;
    
    
`
}
`

/// focus 
export const focus_input100= styled.span`
${({focus_input100})=> focus_input100 && css`
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  
    &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
  
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  
    background: #2e18d4;
    background: -webkit-linear-gradient(left, #459ab2, #188cd4, #424bfa);
    background: -o-linear-gradient(left, #459ab2, #188cd4, #424bfa);
    background: -moz-linear-gradient(left, #459ab2, #188cd4, #424bfa);
    background: linear-gradient(left, #459ab2, #188cd4, #424bfa);
  }
  
  &::after {
    font-family: 'Roboto',sans-serif;;
    font-size: 16px;
    color: #999999;
  
    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: 40px;
    left: 35px;
   
  
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

`
}
`

export const Input100= styled.input`
${({Input100})=> Input100 && css`


    margin: 0;
    width: 100%;
    height: 100%;

  

    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    line-height: 1.2;
    display: block;
    padding: 2.5rem 1rem 1rem 1rem;
    background: inherit;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    outline: none;
    border: none;



&:focus + ${focus_input100}::after{
    left: 23px;
    color: #2e18d4;

}

&:focus + ${focus_input100}::before{
    width: 100%;
}


`
}
`
///


export const p= styled.p`
    font-size: 16px;
    margin-top: 32px;
`

export const a = styled.a`
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.7;
    color: #312c2c;
    margin: 0px;
`
