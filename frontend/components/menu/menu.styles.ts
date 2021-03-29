import styled from 'styled-components';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';

const SET_2 = {
	color: '#971f39',
};

const SET_3 = {
	color: '#b1a232',
};

const MOBILE_BREAKPOINT = {
	width: '550px',
};

export const Background = styled(motion.div)`
	position: fixed;
	z-index: 5;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.75);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Column = styled(GS.GridThree)`
	grid-gap: 2.5rem;
	grid-auto-rows: 1fr;
	padding: 1.5rem 0rem;
	.name {
		text-align: left;
		font-weight: bold;
		.korean {
			font-weight: normal;
		}
		.set-2,
		.set-3 {
			height: 2rem;
			width: 2rem;
			position: relative;
			border-radius: 1rem;
			display: inline-block;
			top: 0.5rem;
			span {
				color: #fff;
				position: absolute;
				left: 50%;
				top: 50%;
				font-size: 1rem;
				transform: translate(-50%, -50%);
			}
		}
		.set-2 {
			background: ${SET_2.color};
		}
		.set-3 {
			background: ${SET_3.color};
		}
	}
	.price {
		text-align: right;
		font-size: 1.9rem;
		font-family: ${(props) => props.theme.fonts.header};
	}
	& > div {
		align-items: flex-start;
		div:nth-child(1) {
			flex: 4.5;
		}
		.limit {
			text-transform: uppercase;
			font-size: 1.2rem;
		}
	}
	@media screen and (max-width: ${MOBILE_BREAKPOINT.width}) {
		display: block;
		& > div {
			padding: 1.5rem 0rem;
			&:nth-of-type(2n) {
				border-top: 0.1rem solid rgba(0, 0, 0, 0.05);
				border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05);
			}
		}
	}
`;

export const Container = styled.div`
	h3 {
		text-align: center;
		padding-bottom: 0.5rem;
		margin-bottom: 2.5rem;
		border-bottom: 0.1rem solid #ccc;
	}
`;
