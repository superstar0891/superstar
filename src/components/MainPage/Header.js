import React, { useState } from 'react';
import styled from 'styled-components';


const Navbar = styled.div`
  height: 80px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 20px 60px;
`;


const Logo = styled.img`
  height: 30px;
`;

// const Hamburger = styled.div`
//   display: none;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;
const Form = styled.form`
    margin-left:3vw;
    display: flex;
    border-radius: 50px;
    border: 1px solid #ebe9e9;
    height: 40px;
    padding: 10px 27px;    
    box-shadow: 0 3px 7px rgb(0 0 0 / 0.1);
    &:hover{
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
      border: 2px solid #ebe9e9;
    }
`;

const Link = styled.a`
      color: #000;
      text-decoration: none;
      font-size: 16px;
      margin-right: 10px;

`;


const Input = styled.input`
      border: 0px;
      width:30vw;   
      outline:none;       
     
`;
const StyledSVG = styled.svg`
  & path {
    fill: ${props => props.color};
  }
`;
const TooltipText = styled.div`
  
  cursor: pointer;
  /* margin:5px; */
`;
const TooltipBox = styled.div`
  visibility: hidden;
  color: transparent;
   background-color: transparent;
   width: 100px;
   padding: 3px;
   border-radius: 0px;
   transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s, padding 0.5s ease-in-out;
   position: absolute;
   top: calc(100% + 15px);
   left: -45px;
   font-size: 12px;
   &:before {
      content: "";
      /* width: 3px;
      height: 3px; */
      left: 50%;
      top: -5px;
      position: absolute;
      border: 5px solid transparent;
      transform: rotate(135deg);
      transition: border 0.4s ease-in-out;
   }
`;
const TooltipCard = styled.div`
   margin: 5px;
   position: relative;
   & ${TooltipText}:hover + ${TooltipBox} {
      visibility: visible;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.8);
      width: 100px;
      padding: 3px;
      border-radius: 4px;
      &:before {
         border-color: transparent transparent rgba(0, 0, 0, 0.8) rgba(0, 0, 0, 0.8);
      }
   }
`;
export default function Header() {
  const [input, setInput] = useState('');
  const [colorChosen, setColorChosen] = useState("#4285f4");
  return (
    <Navbar>
      <Logo src="/googlelogo.png" />
      <Form>

        <Input value={input} onChange={e => setInput(e.target.value)} />

        <TooltipCard>
          <TooltipText>
            <Link href="/"> <svg style={{ width: "30px" }} focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg></Link>
          </TooltipText>
          <TooltipBox>
          <div>Searh my voice</div>
          </TooltipBox>
        </TooltipCard>
        <TooltipCard>
          <TooltipText>
          <Link href="/"> <svg style={{ width: "30px" }} focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="192" width="192"></rect><g><circle fill="#34a853" cx="144.07" cy="144" r="16"></circle><circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle><path fill="#ea4335" d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"></path><path fill="#fbbc05" d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"></path><path fill="#4285f4" d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"></path></g></svg></Link>
          </TooltipText>
          <TooltipBox>
          <div>Searh my image</div>
          </TooltipBox>
        </TooltipCard>
        <TooltipCard>
          <TooltipText>
          <Link href="/"><StyledSVG color={colorChosen} style={{ width: "30px" }} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></StyledSVG></Link>
          </TooltipText>
          <TooltipBox>
          <div>Searh</div>
          </TooltipBox>
        </TooltipCard>
        {/* <Link href="/"> <svg style={{ width: "30px" }} focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="192" width="192"></rect><g><circle fill="#34a853" cx="144.07" cy="144" r="16"></circle><circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle><path fill="#ea4335" d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"></path><path fill="#fbbc05" d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"></path><path fill="#4285f4" d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"></path></g></svg></Link>
        <Link href="/"><StyledSVG color={colorChosen} style={{ width: "30px" }} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></StyledSVG></Link> */}

      </Form>
      {/* <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <Hamburger /> */}
    </Navbar>
  );
}