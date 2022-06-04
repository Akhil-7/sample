import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import gallerySlider1 from "../../public/assets/images/gallery/gallery-slider-1.svg";
import gallerySlider2 from "../../public/assets/images/gallery/gallery-slider-2.svg";
import img1 from "../../public/assets/images/gallery/gallery1.svg";
import img2 from "../../public/assets/images/gallery/gallery2.svg";
import img3 from "../../public/assets/images/gallery/gallery3.svg";
import img4 from "../../public/assets/images/gallery/gallery4.svg";
import img5 from "../../public/assets/images/gallery/gallery5.svg";
import img6 from "../../public/assets/images/gallery/gallery6.svg";
import img7 from "../../public/assets/images/gallery/gallery7.svg";
import img8 from "../../public/assets/images/gallery/gallery8.svg";
import Modal from "../Modal";

function GalleryComp() {
	const [img, setImage] = React.useState(null);
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<Row className="g-3 mt-1">
				<Col xs={12} md={6}>
					<div className="gallery__slider-img">
						<Image
							src={gallerySlider1}
							layout="responsive"
							alt=""
							style={{ cursor: "pointer" }}
							onClick={() => {
								setImage(gallerySlider1);
								setOpen(!open);
							}}
						/>
					</div>
				</Col>
				<Col xs={12} md={6}>
					<Row className="g-3">
						<Col xs={6}>
							<Image
								src={img1}
								layout="responsive"
								alt=""
								style={{ cursor: "pointer" }}
								onClick={() => {
									setImage(img1);
									setOpen(!open);
								}}
							/>
						</Col>
						<Col xs={6}>
							<Image
								src={img2}
								layout="responsive"
								alt=""
								style={{ cursor: "pointer" }}
								onClick={() => {
									setImage(img2);
									setOpen(!open);
								}}
							/>
						</Col>
						<Col xs={6}>
							<Image
								src={img3}
								layout="responsive"
								alt=""
								style={{ cursor: "pointer" }}
								onClick={() => {
									setImage(img3);
									setOpen(!open);
								}}
							/>
						</Col>
						<Col xs={6}>
							<Image
								src={img4}
								layout="responsive"
								alt=""
								style={{ cursor: "pointer" }}
								onClick={() => {
									setImage(img4);
									setOpen(!open);
								}}
							/>
						</Col>
					</Row>
				</Col>
			</Row>

			<Row className="g-3 mt-1">
				<Col xs={12} md={6}>
					<Row className="g-3">
						<Col xs={6}>
							<Image
								src={img5}
								layout="responsive"
								alt=""
								style={{ cursor: "pointer" }}
								onClick={() => {
									setImage(img5);
									setOpen(!open);
								}}
							/>
						</Col>
						<Col xs={6}>
							<Image
								src={img6}
								layout="responsive"
								alt=""
								style={{ cursor: "pointer" }}
								onClick={() => {
									setImage(img6);
									setOpen(!open);
								}}
							/>
						</Col>
						<Col xs={6}>
							<Image
								src={img7}
								layout="responsive"
								alt=""
								style={{ cursor: "pointer" }}
								onClick={() => {
									setImage(img7);
									setOpen(!open);
								}}
							/>
						</Col>
						<Col xs={6}>
							<Image
								src={img8}
								layout="responsive"
								alt=""
								style={{ cursor: "pointer" }}
								onClick={() => {
									setImage(img8);
									setOpen(!open);
								}}
							/>
						</Col>
					</Row>
				</Col>
				<Col xs={12} md={6}>
					<div className="gallery__slider-img">
						<Image
							src={gallerySlider2}
							alt=""
							layout="responsive"
							style={{ cursor: "pointer" }}
							onClick={() => {
								setImage(gallerySlider2);
								setOpen(!open);
							}}
						/>
					</div>
				</Col>
			</Row>

			{open && <Modal src={img} setOpen={setOpen} />}
		</>
	);
}
export default GalleryComp;
