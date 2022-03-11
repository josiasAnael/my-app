import styled , { css } from 'styled-components'


export const Loginlimiter= styled.div`
${({limiter})=> limiter && css`
  width: 100%;
  margin: 0 auto;
` 
}
`
///
export const containerlogin100= styled.div`
${({containerlogin100})=> containerlogin100 && css`
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
    background-color: rgba(0,0,0,0.65);
`
}
`

export const form_title= styled.span`
${({loginformtitle})=> loginformtitle && css`
  font-family: Ubuntu-Bold;
  font-size: 28px;
  color: #fff;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  display: block;
  padding-bottom: 41px;
`
}
`

export const login100_form= styled.form`
${({login100_form})=> login100_form && css`
    padding-bottom: 33px;
    border-radius: 10px;
    background-color: #fff;
`
}
`

export const wrap_input101= styled.div`
${({wrap_input101})=> wrap_input101 && css`

    width: 100%;
    position: relative;
    border-bottom: 1px solid #e6e6e6;
    padding: 28px 0;
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
    font-family: Linearicons-Free;
    font-size: 18px;
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

export const input100= styled.input`
${({input100})=> input100 && css`
    font-family: Ubuntu-Regular;
    font-size: 20px;
    color: #555555;
    line-height: 1.2;
    display: block;
    height: 50px;
    background: transparent;
    padding: 0 10px 0 80px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    outline: none;
    border: none;

&:focus{
  padding-left: 60px;
}

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
    font-family: Ubuntu-Regular;
    font-size: 16px;
    line-height: 1.7;
    color: #312c2c;
    margin: 0px;
`
