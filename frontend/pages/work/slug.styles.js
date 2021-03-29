import styled from 'styled-components';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';

export const Container = styled(GS.FullWidth)`
	background: ${(props) => props.theme.colors.navBackground};
	box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.075);
	border-top: 0.1rem solid ${(props) => props.theme.colors.grey};
	border-bottom: 0.1rem solid ${(props) => props.theme.colors.grey};
`;

export const Hero = styled.img`
	width: 100%;
	height: auto;
	display: block;
`;

export const BPadding = styled.div`
	padding-bottom: ${(props) => props.theme.padding};
`;

export const ImageContainer = styled.div`
	overflow: hidden;
	border: 0.1rem solid ${(props) => props.theme.colors.navBackground};
`;

export const Portfolio = styled(motion.div)`
	padding: ${(props) => props.theme.padding} 0rem;
	img {
		width: 100%;
		height: auto;
		display: block;
		opacity: 0.8 !important;
		transition: all 0.5s ease-in-out;
		@media screen and (max-width: ${(props) => props.theme.midWidth}) {
			opacity: 1 !important;
		}
		&:hover {
			opacity: 1 !important;
			transform: scale(1.01) !important;
			@media screen and (max-width: ${(props) => props.theme.smWidth}) {
				transform: none !important;
			}
		}
	}
	p {
		text-align: center;
		padding: 0.75rem 3rem 0rem 3rem;
		max-width: 70em;
		margin: 0 auto;
	}
`;

export const Nav = styled.div`
	text-align: center;
`;

export const Technology = styled.ul`
	padding-top: ${(props) => props.theme.padding};
	li {
		display: inline;
		margin-right: 1.5rem;
		img {
			transition: all 0.25s ease-in-out;
			&:hover {
				transform: scale(1.1);
			}
		}
	}
`;

export const Title = styled.h2`
	text-transform: uppercase;
	position: relative;
	z-index: 1;
`;
