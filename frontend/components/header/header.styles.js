import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Header = styled(motion.header)`
	display: flex;
	padding: 0.25rem 0rem;
	& > div:nth-child(1) {
		width: 20rem;
		.logo-invert {
			filter: brightness(0) invert(1);
		}
		img:hover {
			cursor: pointer;
		}
		@media screen and (max-width: 600px) {
			width: 10rem;
			padding: 0.25rem 0rem;
			img {
				width: 100%;
			}
		}
	}
	& > div:nth-child(2) {
		flex: 1;
	}
	& > div:nth-child(3) {
		width: 5rem;
	}
`;

//navigation items - aligns right
export const Navigation = styled(motion.nav)`
	display: flex;
	align-items: center;
	justify-content: center;
	float: right;
	ul {
		margin-top: 3.5rem;
		margin-right: 2rem;
		li {
			font-size: 1.5rem;
			display: inline;
			padding: 0rem 1.5rem;
			&:nth-last-child(1) {
				padding-right: 0rem;
			}
			a,
			strong {
				text-decoration: none;
				position: relative;
				color: ${(props) => props.theme.colors.text};
				z-index: 1;
			}
			a.active {
				font-weight: bold;
				color: ${(props) => props.theme.colors.primary};
			}
			a:hover {
				color: ${(props) => props.theme.colors.primary};
			}
			.menu {
				position: relative;
				font-size: 2rem;
				z-index: 20;
			}
		}
	}
`;

export const H1 = styled.h1`
	position: relative;
	z-index: 5;
	@media screen and (max-width: 640px) {
		font-size: 1.75rem;
		letter-spacing: -0.05rem;
		padding: 0rem;
	}
	&:hover {
		cursor: pointer;
	}
`;

export const Nav = styled.div`
	border-bottom: 1px solid #999;
	transition: background 0.25s ease-in-out;
	background: ${(props) => props.theme.colors.navBackground};
	box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.075);
	position: fixed;
	z-index: 20;
	width: 100%;
`;

export const Title = styled(motion.div)`
	position: relative;
	margin-bottom: 0.7rem;
`;

export const ToggleButton = styled.div`
	position: relative;
	height: 2rem;
	width: 3.5rem;
	float: right;
	background: ${(props) => props.theme.colors.primary};
	border-radius: 2rem;
	bottom: 0;
	margin-top: 3.8rem;
	.button {
		width: 2rem;
		height: 2rem;
		background: ${(props) => props.theme.colors.navBackground};
		border-radius: 50%;
		border: .3rem solid ${(props) => props.theme.colors.primary};
		&:hover {
			cursor:pointer;
		}
`;

export const MenuNavigation = styled.div`
	text-align: center;
	padding: 0.5rem 0rem;
	border-top: 0.1rem solid #999;
`;
