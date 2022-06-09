import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import styled from "styled-components";

const Rating = ({ rating }) => {
	return (
		<RatingContainer>
			{[1, 2, 3, 4, 5].map((item) => (
				<Rate key={item} rating={rating} index={item}>
					<BsFillStarFill className="icon" />
				</Rate>
			))}
		</RatingContainer>
	);
};

const RatingContainer = styled.div`
	display: flex;
	gap: 5px;
	margin-bottom: 10px;
`;
const Rate = styled.div`
	.icon {
		color: ${(props) => (props.rating >= props.index ? "gold" : "lightgray")};
	}
`;

export default Rating;
