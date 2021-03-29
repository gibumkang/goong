import * as S from './menu.styles';
import * as GS from '../../styles/global';
import { LINKS } from '../../data/links';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import useOnScreen from '../../hooks/useOnScreen';
import React, { useContext, useState, useRef, ReactNode, useEffect } from 'react';

interface Props {
	menu: {
		beefs: {
			english_name: string;
			korean_name: string;
			price: string;
			limit: boolean;
			ayce: {
				id: number;
			};
		}[];
		chickens: {
			english_name: string;
			korean_name: string;
			price: string;
			limit: boolean;
			ayce: {
				id: number;
			};
		}[];
		porks: {
			english_name: string;
			korean_name: string;
			price: string;
			limit: boolean;
			ayce: {
				id: number;
			};
		}[];
		seafoods: {
			english_name: string;
			korean_name: string;
			price: string;
			limit: boolean;
			ayce: {
				id: number;
			};
		}[];
		sides: {
			english_name: string;
			korean_name: string;
			price: string;
			limit: boolean;
			ayce: {
				id: number;
			};
		}[];
		desserts: {
			dessert_name: string;
		}[];
	};
}

const MenuComponent: React.FC<Props> = ({ menu }) => {
	//state
	const [menuLang, setMenuLang] = useState<string>('Beef Menu');

	return (
		<GS.YPadding>
			{menu && (
				<>
					<S.Container>
						<h3>Beef</h3>
						<S.Column>
							{menu.beefs.map((beef) => {
								return (
									<GS.FlexEven key={beef.english_name} className={`ayce-${beef.ayce.id}`}>
										<div className="name">
											{beef.english_name}{' '}
											{beef.ayce.id == 2 && (
												<div className="set-2">
													<span>G</span>
												</div>
											)}
											{beef.ayce.id == 3 && (
												<span className="set-3">
													<span>P</span>
												</span>
											)}
											<div className="korean">{beef.korean_name}</div>
											{beef.limit === true && (
												<div className="limit">Limit 1 Per Person</div>
											)}
										</div>
										<div className="price">${beef.price}</div>
									</GS.FlexEven>
								);
							})}
						</S.Column>
					</S.Container>
					<S.Container>
						<h3>Chicken &amp; Pork</h3>
						<S.Column>
							{menu.chickens.map((chicken) => {
								return (
									<GS.FlexEven
										key={chicken.english_name}
										className={`ayce-${chicken.ayce.id}`}
									>
										<div className="name">
											{chicken.english_name}{' '}
											{chicken.ayce.id == 2 && (
												<div className="set-2">
													<span>G</span>
												</div>
											)}
											{chicken.ayce.id == 3 && (
												<span className="set-3">
													<span>P</span>
												</span>
											)}
											<div className="korean">{chicken.korean_name}</div>
											{chicken.limit === true && (
												<div className="limit">Limit 1 Per Person</div>
											)}
										</div>
										<div className="price">${chicken.price}</div>
									</GS.FlexEven>
								);
							})}
							{menu.porks.map((pork) => {
								return (
									<GS.FlexEven key={pork.english_name} className={`ayce-${pork.ayce.id}`}>
										<div className="name">
											{pork.english_name}{' '}
											{pork.ayce.id == 2 && (
												<div className="set-2">
													<span>G</span>
												</div>
											)}
											{pork.ayce.id == 3 && (
												<span className="set-3">
													<span>P</span>
												</span>
											)}
											<div className="korean">{pork.korean_name}</div>
											{pork.limit === true && (
												<div className="limit">Limit 1 Per Person</div>
											)}
										</div>
										<div className="price">${pork.price}</div>
									</GS.FlexEven>
								);
							})}
						</S.Column>
					</S.Container>
					<S.Container>
						<h3>Seafood</h3>
						<S.Column>
							{menu.seafoods.map((seafood) => {
								return (
									<GS.FlexEven
										key={seafood.english_name}
										className={`ayce-${seafood.ayce.id}`}
									>
										<div className="name">
											{seafood.english_name}{' '}
											{seafood.ayce.id == 2 && (
												<div className="set-2">
													<span>G</span>
												</div>
											)}
											{seafood.ayce.id == 3 && (
												<span className="set-3">
													<span>P</span>
												</span>
											)}
											<div className="korean">{seafood.korean_name}</div>
											{seafood.limit === true && (
												<div className="limit">Limit 1 Per Person</div>
											)}
										</div>
										<div className="price">${seafood.price}</div>
									</GS.FlexEven>
								);
							})}
						</S.Column>
					</S.Container>
					<S.Container>
						<h3>Sides/Appretizers/Stew</h3>
						<S.Column>
							{menu.sides.map((side) => {
								return (
									<GS.FlexEven key={side.english_name} className={`ayce-${side.ayce.id}`}>
										<div className="name">
											{side.english_name}{' '}
											{side.ayce.id == 2 && (
												<div className="set-2">
													<span>G</span>
												</div>
											)}
											{side.ayce.id == 3 && (
												<span className="set-3">
													<span>P</span>
												</span>
											)}
											<div className="korean">{side.korean_name}</div>
											{side.limit === true && (
												<div className="limit">Limit 1 Per Person</div>
											)}
										</div>
										<div className="price">${side.price}</div>
									</GS.FlexEven>
								);
							})}
						</S.Column>
					</S.Container>
					<S.Container>
						<h3>Dessert</h3>
						<S.Column>
							{menu.desserts.map((dessert) => {
								return (
									<GS.FlexEven key={dessert.dessert_name}>
										<div className="name">{dessert.dessert_name}</div>
										<div className="price"></div>
									</GS.FlexEven>
								);
							})}
						</S.Column>
					</S.Container>
				</>
			)}
		</GS.YPadding>
	);
};

export default MenuComponent;
