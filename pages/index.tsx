import * as GS from '../styles/global';
import styled from 'styled-components';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

export default function Home() {
	return (
		<>
			<GS.BGVideo>
				<div className="intro">
					<h1>Goong Las Vegas</h1>
					<p>
						Premium Korean BBQ restaurant located in Southwest Las Vegas, now serving AYCE for dinner.
					</p>
					<Link href="/menu" passHref>
						<GS.MainButton>See the Menu</GS.MainButton>
					</Link>
				</div>
				<video src="/intro.m4v" autoPlay muted loop playsInline />
				<div className="overlay" />
			</GS.BGVideo>
			<Instagram>
				<script src="https://apps.elfsight.com/p/platform.js" defer></script>
				<div className="elfsight-app-b8cf707b-469e-4953-a4c0-abfc05c63d9b"></div>
			</Instagram>
		</>
	);
}

const Instagram = styled.div`
    margin: 0 auto;
`

