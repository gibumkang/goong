import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as GS from '../../styles/global';

export const Grid = styled(GS.FlexEven)`
	flex-direction: row-reverse;
	padding: 5rem 0rem;
	justify-content: center;
	align-items: center;
	.content {
		margin-top: 2rem;
		h1 {
			font-size: 2.7rem;
			span {
				font-size: 2.7rem;
				white-space: nowrap;
			}
		}
		ul {
			margin-top: 1rem;
			li {
				padding: 0.5rem 0rem;
			}
		}
	}
	.hero-image {
		img {
			display: block;
			width: 100%;
			height: auto;
		}
	}
	@media screen and (max-width: 600px) {
		display: block;
		div {
			text-align: center;
		}
	}
`;
