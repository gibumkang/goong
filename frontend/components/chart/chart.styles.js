import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as GS from '../../styles/global';

export const CompareChart = styled(GS.FlexEven)`
	align-items: flex-start;
	text-align: center;
	gap: 1rem;
	& > div {
		border: 0.1rem solid ${(props) => props.theme.colors.primary};
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		overflow: hidden;
		min-height: 82rem;
		img {
			width: 100%;
			height: auto;
			display: block;
			padding: 0rem 2rem;
		}
		h3 {
			text-transform: uppercase;
			padding-bottom: 0;
		}
		.title {
			padding: 1.25rem 0.75rem;
			font-size: 1.5rem;
			font-style: italic;
			opacity: 0.75;
			height: 8rem;
		}
		.note {
			background: ${(props) => props.theme.colors.primary};
			padding: 0.5rem;
			text-transform: uppercase;
			font-family: ${(props) => props.theme.fonts.header};
			color: #fff;
		}
		.price {
			font-family: ${(props) => props.theme.fonts.header};
			font-size: 5rem;
			padding-top: 1.5rem;
			span {
				font-size: 2rem;
				text-transform: uppercase;
			}
		}
		ul {
			margin: 1.5rem 0rem 0rem 0rem;
			li {
				padding: 1rem 0.5rem;
				margin: 0;
			}
			li:nth-child(odd) {
				background: ${(props) => props.theme.colors.navBackground};
			}
		}
	}
	@media screen and (max-width: 650px) {
		display: block;
		& > div {
			max-width: 40rem;
			margin: 2.5rem auto;
		}
	}
`;
