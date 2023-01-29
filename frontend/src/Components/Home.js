import instance from '../axios';
import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import Card from './Card'
import { useStateValue } from '../StateProvider';

import Intro from './Intro';
import GlobalStyles from '../GlobalStyles';
function Home(){
    const[products, setProducts] = useState('')
    useEffect(()=>{
        const fetchdata = async()=>{
            const data = await instance.get("/api/products/get");
            setProducts(data)
        }
        fetchdata();
    },[])

    return(
        <Container>
        <GlobalStyles />
            <Intro /><br></br><br></br>
            <Main>
                {products && products?.data.map((products)=>(
                    <Card id={products._id}
                        image={products.image}
                        slug={products.slug}
                        category={products.category}
                        brand={products.brand}
                        price={products.price}
                        rating={products.rating}
                        name={products.name}
                    />
                ))}
            </Main>
        </Container>
    )
}
const Container = styled.div`
width: 100%;
height:100%;
${'' /* background-color:#131921; */}
max-width: 1400px;
margin:auto;
height: fit-content;

`;
const Main = styled.div`
    display:grid;
    justify-content: center;
    place-items:center;
    width:100%;
    height:100%;
    grid-auto-rows:420px;
    grid-template-columns:repeat(4,280px);
    grid-gap:40px;
    
`;
const Banner = styled.div`
width: 100%
img{
   
    width: 100%;
    -webkit-mask-image: linear-gradient(
        to bottom,
        rgba(0,0,0,2),
        rgba(0,0,0,0.95),
        rgba(0,0,0,0.75),
        rgba(0,0,0,0.55),
        rgba(0,0,0,0)
    );
    &:nth-child(2){
        display:none;
    }
    @media only screen and(max-width:767px){
        %:nth-child(1){
            display:none;
        }
        &:nth-child(2){
        display:block;
        -webkit-mask-image:none;
    }
    }
    
}
`;


export default Home