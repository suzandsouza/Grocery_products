import React from "react";
import styled from "styled-components"
import { useStateValue } from "../StateProvider";
import { Rate, Col, Row } from "antd"
function Card({id, image, name, slug, brand, category, price, quantity}){
 const [{basket},dispatch] = useStateValue()
    console.log("basket--> ",basket)
    const addToBasket = (e)=>{
        e.preventDefault()

        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id,
                name,
                slug,
                category,
                price,
                image,
                quantity,
                brand
            },
        })
    };
    return(
     
     
            <Container>
            <br /> 
            <Image>
                <img src={image} alt=""/>
            </Image>
            <Description>
            
                <h3>{name}</h3>
                <h4>{brand}</h4>
                <p> ₹{price}</p>
                <button onClick={addToBasket}>Add to Cart</button>
                
            </Description>

        </Container>
      
    );
}

const Container = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  
  flex-direction: column;
  background-color: #fff;
  z-index: 5;
  margin: 2px;
  border-radius: 4px;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
`;
const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  transition: transform ease-in-out 0.3s;
  &:hover{
    transform: scale(1.2); 
    cursor:pointer;
  }
  flex: 0.3;
  img {
    width: 180px;
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.85);
    height: 200px;
    border-radius:4px;
  }

`;
const Rating=styled.div`shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.85);`
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  flex: 2;
  h3 {
    text-align: center;
    font-weight: 600;
    color:  #00008B;
  }
  p {
    font-weight: 600;
  }
  button {
    width: 100%;
    height: 33px;
    background-color: #009CBA;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight:200;
    color: #FFFFFF;
    transition: 0.2s all;
    outline: none;
    transition: transform ease-in-out 0.3s;
    &:hover:{
      background-color:#FFFFFF;
      transform: scale(1.2); 
    }
    &:active{
      transfrom:scale(2);
      box-shadow:3px 2px 22px 1px rgba(0,0,0,0.24);
    }
  }
`;

export default Card;