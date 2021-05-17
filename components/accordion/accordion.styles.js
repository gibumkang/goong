import styled from 'styled-components';
import * as GS from '../../styles/global';

export const Faq = styled.div`
	.btn.btn-link {
		font-size: 1.8rem;
		color: ${(props) => props.theme.colors.primary};
		text-align: left;
		&:hover {
			color: #9a195d;
			text-decoration: none;
		}
	}
	.card-body {
		padding: 2.5rem;
		background: ${(props) => props.theme.colors.navBackground};
	}
	.card-header {
		background: ${(props) => props.theme.colors.navBackground};
	}
`;
