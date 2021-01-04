import React, {useState, useEffect}from 'react'
import {Link} from "gatsby"

import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import {menuData} from '../data/MenuData'
import { Button } from './Button'

const Header = ({ toggle }) => {

  const[navbar, setNavbar] = useState("/")
  
  useEffect(() => {
    if(window.location.pathname) {
      setNavbar(window.location.pathname);
    }
  }, [])
  return (
    <div>
      <Nav navbar={navbar}>
        <NavLink to="/">Explorox</NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
          {menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>{item.title}</NavLink>
          ))}
        </NavMenu>
        <NavBtn>
          <Button primary="true" round="true" to="/trips">Book a flight</Button>
        </NavBtn>
      </Nav>
    </div>
  )
}

export default Header

const Nav = styled.nav`
  background: ${({ navbar }) => (navbar !== "/" ? "#141414" : "transparent")};
  height: 80px;
  justify-content: space-between;
  display: flex;
  padding: 0.5rem, calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
color: #ffffff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
`
const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;

  @media screen and (max-width: 768px){
    display:block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }

`