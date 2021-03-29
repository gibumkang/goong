import Link from 'next/link';
import * as GS from '../../styles/global';
import * as S from './footer.styles';
import { LINKS } from '../../data/links';
import { useRouter } from 'next/router';

const Footer = ({ darkMode }) => {
	const year = new Date().getFullYear();
	const router = useRouter();
	return (
		<>
			<S.FooterBg>
				<GS.MaxContainer>
					<S.FooterInformation>
						<div>
							<ul>
								<li>
									<img
										height="106"
										width="100"
										loading="lazy"
										src="/logo-color.svg"
										alt="Studio Kanvas"
									/>
								</li>
								<li>Las Vegas, Nevada</li>
								<li>
									<Link href="mailto:hello@studiokanvas.com">
										<a>hello@studiokanvas.com</a>
									</Link>
								</li>
								<li>
									<Link href="tel:7028613976">
										<a>702.861.3976</a>
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<ul>
								{LINKS.map((link) => {
									return (
										<li key={link.title}>
											<Link href={link.href}>
												<a
													className={
														router.pathname === link.href ? 'active' : undefined
													}
												>
													{link.title}
												</a>
											</Link>
										</li>
									);
								})}
							</ul>
							<GS.HR />
							<h3>We make websites simple.</h3>
							<p>
								&copy; {year} Studio Kanvas. All Rights Reserved. Made with Nextjs, Apollo,
								and Strapi.
							</p>
						</div>
					</S.FooterInformation>
				</GS.MaxContainer>
			</S.FooterBg>
		</>
	);
};

export default Footer;
