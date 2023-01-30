//Address Form
//this comes after user has confirmed his products on checkout

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { useStateValue } from "../StateProvider"
import Navbar from "./Navbar"

function Address(){
    const[{}, dispatch] = useStateValue()
    const[fullName, setFullName] = useState("")
    const[phone, setPhone] = useState("")
    const[apartment, setApartmentName] = useState("")
    const[locality, setLocality] = useState("")
    const[landmark, setLandmark] = useState("")
    const[city, setCity] = useState("")
    const[state, setState] = useState("")
    
    const navigate = useNavigate()
    const deliver = (e)=>{
        e.preventDefault()
        dispatch({
            type: "SET_ADDRESS",
            item:{
                fullName,
                phone,
                apartment,
                locality,
                landmark,
                city,
                state,
            }
        })
        navigate("/payment")
    }
    return(
        <Container>
            <Navbar />
            <Main>
            <FormContainer>
          <InputContainer>
            <p>Full Name</p>
            <input
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Your Name"
              value={fullName}
            />
          </InputContainer>
          <InputContainer>
            <p>Phone Number</p>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </InputContainer>
          <InputContainer>
            <p>Flat, House no. Building, Company</p>
            <input
              type="text"
              onChange={(e) => setApartmentName(e.target.value)}
              value={apartment}
            />
          </InputContainer>
          <InputContainer>
            <p>Locality</p>
            <input
              type="text"
              onChange={(e) => setLocality(e.target.value)}
              value={locality}
            />
          </InputContainer>
          <InputContainer>
            <p>Landmark</p>
            <input
              type="text"
              onChange={(e) => setLandmark(e.target.value)}
              value={landmark}
            />
          </InputContainer>
          <InputContainer>
            <p>Town/City</p>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </InputContainer>
          <InputContainer>
            <p>State/Province</p>
            <input
              type="text"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </InputContainer>

          <button onClick={deliver}>Deliver to this Address</button>
        </FormContainer> 
            </Main>
        </Container>
    )
}

const Container = styled.div`
width:100%;
height:fit-content;
max-width:1400px
margin:auto
background-color: #009CBA
position: relative;
`;

const Main = styled.div`
padding:15px;
`
const InputContainer = styled.div`
width: 100%;
  padding: 10px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    outline: none;
    margin-top: 5px;
    &:hover {
      border: 1px solid blue;
    }
    &:active{
      transfrom:scale(2);
      box-shadow:3px 2px 22px 1px rgba(0,0,0,0.24);
    }
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.2);
  }`;

const FormContainer = styled.div`
border: 1px solid lightgray;
width:55%;
min-width:500px;
height: fit-content;
  display: flex;
  flex-direction: column;
  ${'' /* align-items: center; */}
  ${'' /* justify-content: center; */}
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  margin: auto;
  button {
    align-self: flex-start;
    height: 33px;
    width: 250px;
    margin-top: 20px;
    background-color: #009CBA;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    &:active{
      transfrom:scale(2);
      box-shadow:3px 2px 22px 1px rgba(0,0,0,0.24);
    }
  }
`;

export default Address  //inorder to reuse a particular component in other places we make use of export