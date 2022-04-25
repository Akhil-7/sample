import React from "react";
import styled from "styled-components";
import logo from "../public/assets/images/logo.png";
import { BiChevronDown } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import Image from "next/image";

function Navbar() {
  return (
    <NavbarOuterContainer>
      <NavbarContainer>
        <Image className="logo" src={logo} alt="" />
        <NavItemsContainer>
          <NavItems>Home</NavItems>
          <NavItems>
            Courses <BiChevronDown />
          </NavItems>
          <NavItems>
            Pages <BiChevronDown />
          </NavItems>
          <NavItems>Contact Us</NavItems>
          <NavItems>
            <input type={"text"} />
            <p className="search-button">
              <BiSearchAlt2 />
            </p>
          </NavItems>
        </NavItemsContainer>
      </NavbarContainer>
    </NavbarOuterContainer>
  );
}
export default Navbar;

const NavbarOuterContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 4px 0;
  z-index: 10;
  color: white;
`;
const NavbarContainer = styled.div`
  display: flex;

  width: 80%;
  height: 70px;
  margin: 0 auto;

  .logo {
    width: 60px;
    height: 30px;
  }
  padding-top: 20px;
  border-bottom: 1px solid white;
`;

const NavItemsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: end;
  list-style: none;
  width: 70%;
  margin-left: auto;
  padding: 5px 0;
`;
const NavItems = styled.li`
  display: flex;
  cursor: pointer;
  font-size: 20px;
  opacity: 0.8;
  input {
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 3px solid white;
    margin-right: 10px;
  }
  .search-button {
    background-color: #7c7c7c;
    padding: 5px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;
