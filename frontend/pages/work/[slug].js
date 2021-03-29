import fetch from 'isomorphic-unfetch';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';
import * as S from './slug.styles';
import Link from 'next/link';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default function Portfolios({ portfolios }) {
	console.log(portfolios);
	return (
		<>
			{portfolios && (
				<>
					<GS.FullWidth style={{ background: '#fff' }}>
						<GS.MaxContainer>
							<S.Hero
								src={`${process.env.NEXT_PUBLIC_API_URL}${portfolios.featured_image.url}`}
								variants={GS.fadeInTop}
							/>
						</GS.MaxContainer>
					</GS.FullWidth>
					<S.Container>
						<GS.YPadding>
							<GS.MaxContainer>
								<GS.FlexEven>
									<div style={{ position: 'relative' }}>
										<S.Title>{portfolios.slug}</S.Title>
										<GS.Block
											left={'-.35rem'}
											bottom={'.95rem'}
											width={'1.5rem'}
											height={'.5rem'}
										/>
									</div>
									<div>
										{portfolios.portfolio_description}
										<S.Technology>
											{portfolios.technologies.map((technology, index) => {
												return (
													<OverlayTrigger
														key={index}
														placement="bottom"
														delay={{ show: 250, hide: 400 }}
														overlay={
															<Popover id={`popover-${technology.name}`}>
																<Popover.Title
																	style={{
																		textTransform: 'capitalize',
																	}}
																>
																	{technology.name}
																</Popover.Title>
																<Popover.Content>
																	{technology.tooltip}
																</Popover.Content>
															</Popover>
														}
													>
														<li>
															<img
																src={`${process.env.NEXT_PUBLIC_API_URL}${technology.icon.url}`}
																alt={technology.name}
																width="30"
																height="30"
															/>
														</li>
													</OverlayTrigger>
												);
											})}
										</S.Technology>
									</div>
								</GS.FlexEven>
							</GS.MaxContainer>
						</GS.YPadding>
					</S.Container>
					<GS.MaxContainer>
						<S.Portfolio variants={GS.stagger} initial="initial" animate="animate">
							{portfolios.portfolio_images.map((image, index) => {
								return (
									<S.BPadding key={index}>
										<S.ImageContainer>
											<motion.img
												src={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`}
												variants={GS.fadeInTop}
											/>
										</S.ImageContainer>
										{image.caption && (
											<motion.p variants={GS.fadeInTop}>{image.caption}</motion.p>
										)}
									</S.BPadding>
								);
							})}
						</S.Portfolio>
						<S.Nav>
							<h3>See What's Next</h3>
							<Link href="/">Next</Link>
						</S.Nav>
					</GS.MaxContainer>
				</>
			)}
		</>
	);
}

// export async function getStaticProps(context) {
// 	const { slug } = context.query;
// 	const { NEXT_PUBLIC_API_URL } = process.env;
// 	const res = await fetch(`http://localhost:1337/portfolios`);
// 	const portfolios = await res.json();
// 	return {
// 		props: {
// 			portfolios,
// 		},
// 	};
// }

// export async function getStaticPaths() {
// 	return {
// 		paths: [{ params: { slug: 'easycline' } }],
// 		fallback: false,
// 	};
// }

export async function getServerSideProps(context) {
	const { slug } = context.query;
	const res = await fetch(`http://localhost:1337/portfolios?slug=${slug}`); //dynamic routing
	const data = await res.json(); //console.log(data) to ensure it's working: remember, it will show in the terminal
	return {
		props: {
			portfolios: data[0],
		},
	};
}
