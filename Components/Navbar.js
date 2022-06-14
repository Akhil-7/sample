import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { CgMenuRightAlt } from "react-icons/cg";
import styled from "styled-components";
import logo from "../public/assets/images/logo.png";
import PopularProjectsContext from "../public/Contexts/PopularProjectsContext";

function Navbar() {
	const [menu, setMenu] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const [careerCourses, setCareerCourses] = useState([]);
	const [accountingCourses, setAccountingCourses] = useState([]);
	const [programmingCourses, setProgrammingCourses] = useState([]);
	const [designingCourses, setDesigningCourses] = useState([]);

	const [ToggleMenu, setToggleMenu] = useState(false);

	const navToggle = () => {
		ToggleMenu === false ? setToggleMenu(true) : setToggleMenu(false);
	};

	const router = useRouter();
	const { newCourses } = React.useContext(PopularProjectsContext);

	React.useEffect(() => {
		// Career Accounting Programming Designing
		setCareerCourses(
			newCourses.filter((item) => item.attributes.category === "Career")
		);

		setAccountingCourses(
			newCourses.filter((item) => item.attributes.category === "Accounting")
		);

		setProgrammingCourses(
			newCourses.filter((item) => item.attributes.category === "Programming")
		);

		setDesigningCourses(
			newCourses.filter((item) => item.attributes.category === "Designing")
		);
	}, [newCourses]);

	return (
		<>
			<NavbarOuterContainer id="nav-bar" className="nav-active">
				<NavItemsContainer_main>
					<NavbarContainer className="d-flex justify-content-between small">
						<div className="imgContainer">
							<Image
								className="logo button"
								src={logo}
								alt="lcc"
								style={{ objectFit: "contain" }}
								onClick={() => Router.push("/")}
							/>
						</div>
						<div className="">
							<button
								className="btn d-flex d-lg-none"
								onClick={() => setMenu(!menu)}
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
							<p style={{ width: "90px" }}>
								<Link href={"/about"}>About Us</Link>
							</p>
						</NavItems>
						<NavItems onClick={() => setDropdown(false)}>
							<p style={{ width: "190px" }}>
								<Link href="/#contact">
									<a className="contact-button">Contact us</a>
								</Link>
							</p>
						</NavItems>
					</NavItemsContainer>
				</NavItemsContainer_main>
			</NavbarOuterContainer>
			{menu && (
				<NavbarOuterContainer2>
					<NavItems onClick={() => setMenu(false)}>
						<Link href="/" passHref>
							Home
						</Link>
					</NavItems>
					<NavItems>
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									id="navbarDarkDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Courses
								</a>
								<ul
									className="dropdown-menu dropdown-menu-dark"
									aria-labelledby="navbarDarkDropdownMenuLink"
								>
									<li onClick={() => setMenu(false)}>
										<Link href="/course_page">
											<a className="dropdown-item">Career & Shortterm</a>
										</Link>
									</li>
									<li onClick={() => setMenu(false)}>
										<Link href="/course_page">
											<a className="dropdown-item">Basic&Accounting</a>
										</Link>
									</li>
									<li onClick={() => setMenu(false)}>
										<Link href="/course_page">
											<a className="dropdown-item">Programming</a>
										</Link>
									</li>
									<li onClick={() => setMenu(false)}>
										<Link href="/course_page">
											<a className="dropdown-item">Web & Graphics</a>
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</NavItems>

					<NavItems onClick={() => setMenu(false)}>
						<Link href={"/about"} passHref>
							About Us
						</Link>
					</NavItems>
					<NavItems onClick={() => setMenu(false)}>
						<p>
							<Link href="/#contact">
								<a className="contact-button">Contact us</a>
							</Link>
						</p>
					</NavItems>
				</NavbarOuterContainer2>
			)}
			{dropdown && (
				<DropdownContainer>
					<DropdownContent>
						<div className="row mt-3">
							<div className="col-12 col-md-3 px-3">
								<h5>Career & Shortterm</h5>
								{careerCourses?.map((item) => (
									<Link key={item.id} href={item.id.toString()}>
										<a onClick={() => setDropdown(false)}>
											{item.attributes.Name}
										</a>
									</Link>
								))}
							</div>
							<div className="col-12 col-md-3 px-3">
								<h5>Basic&Accounting</h5>
								{accountingCourses?.map((item) => (
									<Link key={item.id} href={item.id.toString()}>
										<a onClick={() => setDropdown(false)}>
											{item.attributes.Name}
										</a>
									</Link>
								))}
							</div>
							<div className="col-12 col-md-3 px-3">
								<h5>Programming</h5>
								{programmingCourses?.map((item) => (
									<Link key={item.id} href={item.id.toString()}>
										<a onClick={() => setDropdown(false)}>
											{item.attributes.Name}
										</a>
									</Link>
								))}
							</div>
							<div className="col-12 col-md-3 px-3">
								<h5>Web & Graphics</h5>
								{designingCourses?.map((item) => (
									<Link key={item.id} href={item.id.toString()}>
										<a onClick={() => setDropdown(false)}>
											{item.attributes.Name}
										</a>
									</Link>
								))}
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
	z-index: 100;
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
	background: var(--secondary);
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
	.small {
		width: 100%;
	}
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
	padding: 20px 0;
	background-color: var(--dark-secondary);
	z-index: 100;
	color: white;
`;
const DropdownContent = styled.div`
	width: 80%;
	margin: 0 auto;
	h5 {
		font-family: "tiemposBold", serif;
	}
	a {
		font-family: "tiempos", serif;
		text-decoration: none;
		color: #fff8f0;
		display: block;
	}
	a:hover {
		color: var(--primary);
	}
`;
