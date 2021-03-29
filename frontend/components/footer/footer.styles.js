import styled from 'styled-components';
import * as GS from '../../styles/global';

export const Footer = styled.footer`
	text-align: center;
	img {
		display: block;
	}
`;

export const FooterBg = styled(GS.FullWidth)`
	background: ${(props) => props.theme.colors.primary};
	padding: 7.5rem 0rem;
	h4 {
		color: #fff;
	}
`;

export const FooterInformation = styled(GS.FlexEven)`
	text-align: left;
	align-items: flex-start;
	& > div:nth-child(1) {
		flex: 1;
		ul {
			li {
				padding: 0.5rem 0rem;
				color: #fff;
				a {
					text-decoration: none;
					color: #eee;
					&.active {
						color: #fff;
						font-weight: bold;
					}
				}
				img {
					filter: brightness(0) invert(1);
					max-width: 10rem;
				}
			}
		}
		@media screen and (max-width: ${(props) => props.theme.midWidth}) {
			padding-bottom: 2.5rem;
		}
	}
	& > div:nth-child(2) {
		flex: 3;
		ul {
			li {
				display: inline;
				padding-right: 1.5rem;
				a {
					color: #fff;
					text-decoration: none;
				}
				a.active {
					font-weight: bold;
				}
			}
		}
		form {
			display: flex;
			gap: 5rem;
			.name {
				flex: 1;
			}
			.email {
				flex: 1.75;
			}
			.submit-button {
				flex: 1;
			}
			& > div {
				input {
					box-sizing: border-box;
					padding: 0.75rem;
					margin-right: 1rem;
					width: 100%;
				}
				button {
					background: #f84f49;
					padding: 1.2rem 3rem;
					font-weight: bold;
					color: #fff;
					width: 100%;
					border: 0;
				}
			}
			@media screen and (max-width: ${(props) => props.theme.smWidth}) {
				display: block;
				& > div {
					input {
						margin: 0.5rem 0rem 1.5rem 0rem;
					}
				}
			}
		}
		@media screen and (max-width: ${(props) => props.theme.midWidth}) {
			text-align: left;
		}
	}
	div,
	p,
	h3 {
		color: #fff;
	}
	@media screen and (max-width: 900px) {
		display: block;
		div,
		ul,
		p,
		h3 {
			margin: 0 auto;
			text-align: center;
		}
		ul {
			margin-bottom: 1rem;
		}
		h3 {
			font-size: 3.5rem;
		}
	}
`;
