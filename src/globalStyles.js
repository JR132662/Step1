import styled, {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Fira+Sans:ital,wght@0,500;1,400&family=PT+Serif:ital@1&family=Saira+Semi+Condensed:wght@400;600&display=swap');
*{
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: 'Anton', sans-serif;
font-family: 'Bebas Neue', cursive;
font-family: 'Fira Sans', sans-serif;
font-family: 'PT Serif', serif;
font-family: 'Saira Semi Condensed', sans-serif;
}
`
export const Container = styled.div`
z-index:1;
width: 100%;
max-width: 1300px;
margin: auto;
padding: 0 50px;
border: transparent;



@media screen and (max-width:990px) {
    padding: 0 30px;
}
`

export const Button = styled.button`
border-radius: 4px;
background: ${({primary}) => (primary ? "black" : "#ffe8bb")};
padding: ${({big}) => (big ? "8px 64px" : "1px 70px")};
color: black;
font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
border-radius: 4px;
border: 1px solid black;
cursor: pointer;

&:hover{
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary ? "purple" : "purple")};
}

@media screen and (max-width: 960px) {
}
`
export const Button2 = styled.button`
border-radius: 4px;
background: ${({primary}) => (primary ? "purple" : "#ffe8bb")};
padding: ${({big}) => (big ? "8px 64px" : "10px 70px")};
color: #ffe8bb;
font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
border-radius: 4px;
border: 1px solid black;
cursor: pointer;

&:hover{
    transition: all 0.3s ease-out;
    background: #fff;
    color: black;
    background: ${({primary}) => (primary ? "#ffe8bb" : "purple")};
}

@media screen and (max-width: 960px) {
    display: none;
}
`
export const Button3 = styled.button`
border-radius: 4px;
background: ${({primary}) => (primary ? "purple" : "#ffe8bb")};
padding: ${({big}) => (big ? "8px 64px" : "10px 70px")};
color: black;
font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
border-radius: 4px;
border: 1px solid black;
cursor: pointer;
display: none;

&:hover{
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary ? "purple" : "purple")};
}

@media screen and (max-width: 960px) {
    display: inline-block;
}
`



export default GlobalStyle
