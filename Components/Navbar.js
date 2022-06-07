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
	const [dropdown, setDropdown] = useState(false);

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
						<div className="imgContainer">
							<Image
								className="logo"
								src={logo}
								alt="lcc"
								style={{ objectFit: "contain" }}
							/>
						</div>
						<div className="">
							<button
								className="btn d-flex d-lg-none"
								onClick={() => setmenu(!menu)}
							>
								<CgMenuRightAlt className={"text-light"} />
							</button>
						</div>
					</NavbarContainer>
					<NavItemsContainer className="d-none d-lg-flex nav-active-items">
						<NavItems onClick={() => setDropdown(false)}>
							<p>
								<Link href={"/"}>Home</Link>
							</p>
						</NavItems>
						<NavItems
							onClick={() => setDropdown(!dropdown)}
							style={{ color: "white" }}
							dropdown={dropdown}
						>
							<p>Courses</p>
							<BiChevronDown className="icon" />
						</NavItems>
						<NavItems onClick={() => setDropdown(false)}>
							<p>
								<Link href={"/about"}>About Us</Link>
							</p>
						</NavItems>
						<NavItems onClick={() => setDropdown(false)}>
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
			{dropdown && (
				<DropdownContainer className="animate__animated animate__fadeInDown">
					<DropdownContent>
						<div className="row mt-3">
							<div className="col-12 col-md-3 px-3">
								<h5>Career & Shortterm</h5>
								<Link href="/1">
									<a onClick={() => setDropdown(false)}>Career & Shortterm</a>
								</Link>
							</div>
							<div className="col-12 col-md-3 px-3">
								<h5>Basic&Accounting</h5>
								<Link href="/2">
									<a onClick={() => setDropdown(false)}>Basic&Accounting</a>
								</Link>
							</div>
							<div className="col-12 col-md-3 px-3">
								<h5>Programming</h5>
								<Link href="/3">
									<a onClick={() => setDropdown(false)}>Programming</a>
								</Link>
							</div>
							<div className="col-12 col-md-3 px-3">
								<h5>Web & Graphics</h5>
								<Link href="/4">
									<a onClick={() => setDropdown(false)}>Web & Graphics</a>
								</Link>
							</div>
						</div>
					</DropdownContent>
				</DropdownContainer>
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
	color: #fff8f0;
	z-index: 9999;
	background: ${(props) => props.path === "/course_page" && "var(--secondary)"};
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
	.imgContainer {
		height: 46px;
		margin-top: -10px;
		img {
			height: 56px !important;
			object-fit: contain;
		}
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
	.icon {
		transition: transform 0.7s;
		transform: ${(props) => props.dropdown && "rotate(-180deg)"};
	}
`;

const DropdownContainer = styled.div`
	position: fixed;
	width: 100%;
	top: 75px;
	padding-bottom: 20px;
	background-color: var(--dark-secondary);
	z-index: 100;
	color: white;
`;
const DropdownContent = styled.div`
	width: 80%;
	margin: 0 auto;
	a {
		text-decoration: none;
		color: #fff8f0;
	}
	a:hover {
		color: var(--primary);
	}
`;
