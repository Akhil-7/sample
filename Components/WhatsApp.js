import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import styled from "styled-components";

const WhatsApp = () => {
	return (
		<a
			href="https://wa.me/9072335505"
			target="_blank"
			rel="noopener noreferrer"
		>
			<WhatsAppContainer>
				<BsWhatsapp className="icon" />
			</WhatsAppContainer>
		</a>
	);
};

export default WhatsApp;
const WhatsAppContainer = styled.div`
	position: fixed;
	bottom: 16px;
	left: 16px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #4dc247;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.7rem;
	transition: all 0.2s ease-in-out;

	:hover {
		box-shadow: rgb(0 0 0 / 20%) 0px 0px 5px 5px;
	}
	.icon {
		color: #fff;
		width: 40px;
		height: 40px;
	}
`;
