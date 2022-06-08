import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";

const Modal = ({ src, setOpen }) => {
	useEffect(() => {
		const modal = document.getElementById("modal");
		window.onclick = function (event) {
			if (event.target == modal) {
				setOpen(false);
			}
		};
	});

	return (
		<ModalContainer id="modal" className="animate__animated animate__zoomIn">
			<Content>
				<span className="close" onClick={() => setOpen(false)}>
					&times;
				</span>
				<Image src={src} alt="Details Image" />
			</Content>
		</ModalContainer>
	);
};

export default Modal;

const ModalContainer = styled.div`
	display: flex;
	position: fixed;
	z-index: 9999;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.6);
	padding: 15px;
`;
const Content = styled.div`
	background-color: #fefefe;
	margin: auto;
	padding: 15px;
	border: 1px solid #888;
	width: max-content;
	position: relative;
	padding-bottom: 8px;
	border-radius: 15px;

	.close {
		position: absolute;
		top: -7px;
		right: 7px;
		color: #aaa;
		font-size: 28px;
		font-weight: bold;
		z-index: 99999;
	}
	.close:hover,
	.close:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}

	img {
		min-height: 50vh !important;
	}
`;
