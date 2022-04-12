
import styled , { css } from 'styled-components'

export const Container100_btn= styled.div`
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`



export const Btn = styled.button`
${({primary})=> primary && css`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    cursor: pointer;
    
    margin-top: 60px;
    outline: none !important;
    border: none;
    background: transparent;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    min-width: 160px;
    height: 42px;
    border-radius: 10px;

     position: relative;
    z-index: 1;
    background-color: #004CBE;
 
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;

&::selection{
    color: black;
}
&::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: #2e18d4;
    background: -webkit-linear-gradient(left, #1f7f9a, #196ea2, #004CBE);
    background: -o-linear-gradient(left, #1f7f9a, #196ea2, #004CBE);
    background: -moz-linear-gradient(left, #1f7f9a, #196ea2, #004CBE);
    background: linear-gradient(left, #1f7f9a, #196ea2, #004CBE);

  top: 0;
  left: 0;
  opacity: 0;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}
&:hover {
  background-color: transparent;
}

&:hover:before {
  opacity: 1;
}

`

}

`

