import React from 'react';
import * as GS from '../../styles/global';
import * as S from './hero.styles';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

export default function hero({ headline1, headline2, image, list, listHighlight, link }) {
	return (
		<GS.MaxContainer>
			<S.Grid>
				<Fade top>
					<div className="hero-image">
						<img src={image} alt="Studio Kanvas" width="500" height="354" />
					</div>
					<div className="content">
						<GS.Headline>
							<div>{headline1}</div>
							<div>{headline2}</div>
						</GS.Headline>
						<ul>
							{list.map((item) => {
								return <li key={item.content}>{item.content}</li>;
							})}
							{listHighlight && (
								<li>
									<strong>{listHighlight}</strong>
								</li>
							)}
						</ul>
						{link && (
							<Link href={link} passHref>
								<GS.MainButton>See Our Services</GS.MainButton>
							</Link>
						)}
					</div>
				</Fade>
			</S.Grid>
		</GS.MaxContainer>
	);
}
