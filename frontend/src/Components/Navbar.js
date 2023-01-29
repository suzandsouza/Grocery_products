import React from "react"
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import styled from "styled-components"
import {Input} from "antd"
import { Link } from 'react-router-dom'
import 'rsuite/dist/rsuite.min.css';
function Navbar(){
    const [{ user, basket }, dispatch] = useStateValue();
    const navigate = useNavigate()

    const signOut = ()=>{
        dispatch({
            type:'SET_USER',
            user: null,
        })
        localStorage.removeItem('user')
        navigate("/")
    }

    return(
        <Container>
            <Inner style={{margin:20}}>
                <Logo>
                  <h2>Grocery </h2>
                </Logo>
              <Link to="/addproduct">Admin Portal</Link>
              <RightContainer>
          <NavButton
            onClick={user ? () => signOut() : () => navigate("/login")}
          >
            <p>Hello, 
            {user ? user?.fullName : "Guest"}</p>
          </NavButton>
          <NavButton onClick={() => navigate("/orders")}>
            <p>Return & Orders</p>
          </NavButton>
          <BasketButton onClick={() => navigate("/checkout")}>
            <img src="https://www.shutterstock.com/image-vector/shopping-cart-icon-simple-linear-260nw-1098423980.jpg" alt="" />
            <p>{basket?.length}</p>
          </BasketButton>
        </RightContainer>
               
            </Inner>

            <MobileSearchbar>
                <input type="text" placeholder="Search..."/>
                <SearchIcon onClick={()=>navigate("/addevents")}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhUuz2vc2-RYgLCtFtTzjY9oApsKqIMXVdQ&usqp=CAU"></img>
                </SearchIcon>
            </MobileSearchbar>
        </Container>
    )
}

// Adding the styles here
const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color:#303030;
  display: flex;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 767px) {
    height: 120px;
    flex-direction: column;
  }
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;
  img {
    width: 100px;
    margin-top: 10px;
  }
`;
const SearchBar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;
    &::placeholder {
      padding-left: 5px;
    }
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const MobileSearchbar = styled.div`
  height: 35px;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 10px;
  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;
    &::placeholder {
      padding-left: 10px;
    }
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  background-color: #febd69;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
  img {
    width: 22px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  padding: 5px 15px;
`;

const NavButton = styled.div`
  color: #fff;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;
  p {
    &:nth-child(1) {
      font-size: 15px;
      font: 'sans-serif';
    }
    &:nth-child(2) {
      font-size: 15px;
      font-weight: 600;
    }
  }
  &:hover{

  }
`;

const BasketButton = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;
  img {
    width: 30px;
    margin-right: 10px;
  }
  p {
    color: #fff;
    font-weight: 500;
  }
`;

export default Navbar
