import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiChevronDown, BiSearchAlt2 } from "react-icons/bi";
import { CgMenuRightAlt } from "react-icons/cg";
import styled from "styled-components";
import logo from "../public/assets/images/logo.png";
import PopularProjectsContext from "../public/Contexts/PopularProjectsContext";

function Navbar() {
	const [menu, setmenu] = useState(false);

	const [ToggleMenu, setToggleMenu] = useState(false);
	const { scroll, setScroll } = React.useContext(PopularProjectsContext);

	const navToggle = () => {
		ToggleMenu === false ? setToggleMenu(true) : setToggleMenu(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			window.scrollY > 100 ? setScroll(true) : setScroll(false);
		});
	}, []);

	const router = useRouter();
	const path = router.pathname;

	return (
		<>
			<NavbarOuterContainer
				id="nav-bar"
				className={scroll === true ? "nav-active" : ""}
				path={path}
			>
				<NavItemsContainer_main>
					<NavbarContainer className="d-flex justify-content-between">
						<Image
							className="logo"
							src={logo}
							alt="lcc"
							height={36}
							style={{ objectFit: "cover" }}
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
						<NavItems path={path}>
							<p>
								<Link href={"/"}>Home</Link>
							</p>
						</NavItems>
						<NavItems path={path}>
							<p>
								<Link href={"/course_page"}>Courses</Link>
							</p>
							<BiChevronDown />
						</NavItems>
						<NavItems path={path}>
							<p>
								<Link href={"/about"}>About Us</Link>
							</p>
						</NavItems>
						<NavItems path={path}>
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
	color: ${(props) => (props.path === "/course_page" ? "black" : "#fff8f0")};
	z-index: 9999;
	background: ${(props) =>
		props.path === "/course_page" ? "#fff" : "transparent"};
	border-bottom: 1px solid #fff8f0;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 5px;
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
		// color: #fff8f0 !important;
		color: ${(props) => (props.path === "/course_page" ? "black" : "#fff8f0")};
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
