import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logoDark from "../public/assets/images/logoDark.png";
import logoLight from "../public/assets/images/logoLight.png";
import { BiChevronDown } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { CgMenuRightAlt } from "react-icons/cg";
import Image from "next/image";
import $ from "jquery";
import Link from "next/link";

function Navbar() {
  const [menu, setmenu] = useState(false);

  const [ToggleMenu, setToggleMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const navToggle = () => {
    ToggleMenu === false ? setToggleMenu(true) : setToggleMenu(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 100 ? setScroll(true) : setScroll(false);
    });
  }, []);

  return (
    <>
      <NavbarOuterContainer
        id="nav-bar"
        className={scroll === true ? "nav-active" : ""}
      >
        <NavItemsContainer_main>
          <NavbarContainer className="d-flex justify-content-between">
            <Image
              className="logo"
              src={scroll === true ? logoDark : logoLight}
              alt=""
            />
            <div className="">
              <button
                className="btn d-flex d-lg-none"
                onClick={() => setmenu(!menu)}
              >
                <CgMenuRightAlt
                  className={scroll === true ? "text-dark" : "text-light"}
                />
              </button>
            </div>
          </NavbarContainer>
          <NavItemsContainer className="d-none d-lg-flex nav-active-items">
            <NavItems>
              <p>
                <Link href={"/"}>Home</Link>
              </p>
            </NavItems>
            <NavItems>
              <p>
                <Link href={"/course_page"}>Courses</Link>
              </p>
              <BiChevronDown />
            </NavItems>
            <NavItems>
              <p>
                <Link href={"/about"}>About Us</Link>
              </p>
            </NavItems>
            <NavItems>
              <p>
                <a className="contact-button" href="#contact">
                  Contact us
                </a>
              </p>
            </NavItems>
            {/* <NavItems>
              <input type={"text"} />
              <p className="search-button">
                <BiSearchAlt2 />
              </p>
            </NavItems> */}
          </NavItemsContainer>
        </NavItemsContainer_main>
      </NavbarOuterContainer>
      {menu && (
        <NavbarOuterContainer2>
          <NavItems>
            <Link href="/">Home</Link>
          </NavItems>
          <NavItems>
            Courses <BiChevronDown />
          </NavItems>
          <NavItems>
            Pages <BiChevronDown />
          </NavItems>
          <NavItems>ContactUs</NavItems>
          <NavItems>
            <input type={"text"} />
            <p className="search-button">
              <BiSearchAlt2 />
            </p>
          </NavItems>
        </NavbarOuterContainer2>
      )}
    </>
  );
}
export default Navbar;

const NavbarOuterContainer2 = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 105vh;
  z-index: 10;
  color: #fff8f0;
  background: rgba(0, 0, 0, 0.75);
  border-bottom: 1px solid #fff8f0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const NavbarOuterContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  // color: black;
  color: #fff8f0;
  z-index: 9999;
  // background-color: #fff8f0;
  border-bottom: 1px solid #fff8f0;
  @media (max-width: 992px) {
    height: auto;
  }
`;

const NavItemsContainer_main = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
`;
const NavbarContainer = styled.div`
  padding: 20px 0;
  .logo {
    width: 60px;
    height: 30px;
    color: black;
  }
`;

const NavItemsContainer2 = styled.ul`
weight:100%;
height:100vh;
position:absolute
background:#Fff8f0
`;
const NavItemsContainer = styled.ul`
  display: flex;
  justify-content: end;
  align-items: end;
  list-style: none;
  width: 70%;
  margin-left: auto;
`;
const NavItems = styled.li`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  #Fff8f0-space: nowrap;
  align-items: center input {
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 3px solid #fff8f0;
    margin-right: 10px;
  }
  a {
    color: #fff8f0 !important;
    text-decoration: none !important;

    :hover {
      color: inherit;
      text-decoration: none;
    }
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
    color: #fff8f0;
  }
  .contact-button {
    background-color: var(--primary);
    padding: 8px 20px;
    border-radius: 5px;
    font-size: 16px;
    color: var(--secondary) !important;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;
