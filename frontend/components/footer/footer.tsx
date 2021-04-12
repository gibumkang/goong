import Link from 'next/link';
import * as GS from '../../styles/global';
import * as S from './footer.styles';
import { LINKS } from '../../data/links';
import { NextRouter, useRouter } from 'next/router';
import { GoMail } from 'react-icons/Go';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { FaPhoneSquareAlt } from 'react-icons/Fa';
import { DocumentNode } from 'graphql';
import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

interface Props {
	darkMode: string;
}

interface Data {
	email: string;
	street_address: string;
	city_address: string;
	phone: string;
	logo: {
		url: string;
		caption: string;
	}
}

const Footer: React.FC<Props> = ({ darkMode }) => {
	const { loading, error, data } = useQuery(FOOTER_QUERY);
	const year:number = new Date().getFullYear();
	const [footer, setFooter] = useState<Data | null>(null);
	const router:NextRouter  = useRouter();
	useEffect(() => {
		if(data){
			setFooter(data.assets[0]);
		}
	},[data])
	return (
			<S.FooterBg>
				<GS.MaxContainer>
					{footer != null && (
						<S.FooterInformation>
						<div>
							<ul>
								<li>
									<Link href="/">
										<a>
											<img
												height="60"
												width="100"
												loading="lazy"
												src={process.env.NEXT_PUBLIC_API_URL+footer.logo.url}
												alt="Las Vegas Goong"
											/>
										</a>
									</Link>
								</li>
								<li>{footer.street_address}</li>
								<li>{footer.city_address}</li>
								{footer.email &&
								<li>
									<Link href={`mailto:#`}>
										 <a><GoMail /> {footer.email}</a>
									</Link>
								</li>
								}
								<li className="phone">
									<Link href={`tel:${footer.phone}`}>
										<a><FaPhoneSquareAlt /> {footer.phone}</a>
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
							{/* <h3>We make websites simple.</h3> */}
							<p className="disclaimer">
								&copy; {year} Goong Las Vegas. All Rights Reserved. <Link href="https://studiokanvas.com"><a>Website by Studio Kanvas</a></Link>
							</p>
						</div>
					</S.FooterInformation>
					)}
				</GS.MaxContainer>
			</S.FooterBg>
	);
};

const FOOTER_QUERY = gql`
	{
		assets {
			logo {
				url
				caption
			}
			phone
			email
			street_address
			city_address
		}
	}
`

export default Footer;
