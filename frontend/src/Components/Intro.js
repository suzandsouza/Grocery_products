import React from "react"
// import styles from "../styles/Home.module.scss"
import Navbar from "../Components/Navbar"
import styled from "styled-components"
import { useStateValue } from "../StateProvider"
import {Button, Card, Col, Divider, Row} from "antd"
import Link from "antd/es/typography/Link"
export default function Intro(){
    return(
        <div>
        <HomeContainer>
        <Navbar />
        <Col>
        <ContainerController>
                  <Col>
                  <Text>
                  <Heading>
                  <h1>
              Grocery Store
            </h1>
                  </Heading>
            
          <h4>Scroll to view our products in stock</h4>
            </Text>
          </Col>
          </ContainerController>

        </Col>
        
      
        </HomeContainer>
      </div>
    );
}

const HomeContainer = styled.div`

`;

const ContainerController = styled.div` background-image: url("");
height: 92.8vh;
display: flex;
justify-content: center;
border: 3px;
`;

const Heading = styled.div`font-size: 1.4rem;
padding-top: 6rem;
color: 	#00008B;
margin: 0; `;

const CardD=styled.div` width: 25%;
box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
border-radius: 20px;
text-align: center;`;

const Buttons =styled.div` height: 3rem;
font-weight: 600;
margin: 0;
border-radius: 8px;
margin-top: 2rem;
width: 20rem;`;


const Text=styled.div`width: 80%;
margin: auto;`;
const CardController=styled.div`background-image:no-repeat; content:fit`;
const Features=styled.div``;