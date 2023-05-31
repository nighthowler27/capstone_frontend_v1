import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import Image from 'next/image';

import logo from "@/public/img/Logos/devengers_vault_logo3.png";


const StyledHeader = styled.header`
  background-color: #222;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 0 0;
`;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
    display: block;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;


const NavLink = styled.div`
  color: #aaa;
  text-decoration: none;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const Dropdown = styled.div`
  position: relative;
  padding: 10px 10px;
`;

const DropdownToggle = styled.div`
  color: #aaa;
  text-decoration: none;
  padding: 0px 15px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  list-style: none;
  top: 100%;
  left: 2px;
  margin: 0;
  padding: 0;
  background-color: #bfbfbf;
  border: 3px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px rgba(0, 0, 0, .5);
  z-index: 2;

  ${Dropdown}:hover & {
    display: block;
  }
`;

const DropdownMenuItem = styled.li`
  padding: 0px 5px;
  margin: 0px;
  border-bottom: 1px solid #ccc;
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
    setDropdown2Open(false); // Close the other dropdown if open
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
    setDropdown1Open(false); // Close the other dropdown if open
  };

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Link href="/" passHref className="links">
            <Image src={logo} alt="logo.png" className="navbar-logo"/>
          </Link>
          <StyledNav mobileNavActive={mobileNavActive}>
            
            <Link href="/" passHref className="links">
                <NavLink>  Home </NavLink>
            </Link>

            <Link href="/categories" passHref className="links">
                <NavLink>  Shop </NavLink>
            </Link>
            

            {/* <Dropdown>
              <DropdownToggle onClick={toggleDropdown1}>
                Shop
              </DropdownToggle>
              <DropdownMenu style={{ display: dropdown1Open ? "block" : "none" }}>
                <DropdownMenuItem>
                  <Link href="/products" passHref className="links">
                    <p>Products</p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/categories" passHref className="links">
                    <p>Categories</p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/newArrival" passHref className="links">
                    <p>New Arrival</p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/hotDeals" passHref className="links">
                    <p>Hot Deals</p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/limitedEdition" passHref className="links">
                    <p>limited Edition</p>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenu>
            </Dropdown> */}


            <Dropdown>
              <DropdownToggle onClick={toggleDropdown2}>
                Auction
              </DropdownToggle>
              <DropdownMenu style={{ display: dropdown2Open ? "block" : "none" }}>
                <DropdownMenuItem>
                  <Link href="/bid" passHref className="links">
                    <p>Bid</p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/sell" passHref className="links">
                    <p>Sell</p>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenu>
            </Dropdown>


            <Link href="/products" passHref className="links">
                <NavLink> FaQ </NavLink> 
            </Link>
        

            <Link href="/cart" passHref className="links">
              <NavLink>Cart ({cartProducts.length})</NavLink>
            </Link>

            <Link href="/login" passHref className="links">
                <NavLink> <button className="login-btn">Login </button> </NavLink> 
            </Link>
            
          </StyledNav>
        
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>

        </Wrapper>
        <Wrapper2 className="nav-text-holder">
             <p className="intro-holder">Welcome <b>Guest!</b> </p>
        </Wrapper2>
      </Center>
    </StyledHeader>
  );
}