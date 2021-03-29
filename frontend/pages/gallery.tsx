import * as GS from '../styles/global';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
	return (
		<GS.MaxContainer>
			<Grid>
				<div>
					<Image src="/gen.webp" height="300" width="300" layout="responsive" />
				</div>
				<div>
					<Image src="/gen.webp" height="300" width="300" layout="responsive" />
				</div>
				<div>
					<Image src="/gen.webp" height="300" width="300" layout="responsive" />
				</div>
				<div>
					<Image src="/gen.webp" height="300" width="300" layout="responsive" />
				</div>
				<div>
					<Image src="/gen.webp" height="300" width="300" layout="responsive" />
				</div>
				<div>
					<Image src="/gen.webp" height="300" width="300" layout="responsive" />
				</div>
				<div>
					<Image src="/gen.webp" height="300" width="300" layout="responsive" />
				</div>
			</Grid>
		</GS.MaxContainer>
	);
};

const Grid = styled(GS.GridThree)`
	div {
		border: 0.1rem solid #ccc;
		img {
			width: 100%;
			height: auto;
			object-fit: cover;
			opacity: 0.8;
			transition: opacity 0.25s ease-in-out;
			&:hover {
				opacity: 1;
			}
		}
	}
	@media screen and (max-width: 414px) {
		display: block;
	}
`;

export default Gallery;
