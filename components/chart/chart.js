import React from 'react';
import * as GS from '../../styles/global';
import * as S from './chart.styles';
import Fade from 'react-reveal/Fade';

export default function Chart() {
	return (
		<GS.YPadding>
			<S.CompareChart>
				<Fade top cascade>
					<div>
						<img
							loading="lazy"
							src="/essential.svg"
							width="340"
							height="300"
							alt="Studio Kanvas - Essential Plan"
						/>
						<h3>Essential</h3>
						<div className="title">Ideal for influencers, solopreneurs</div>
						<div className="note">Limited-time Offer</div>
						<div className="price">
							$199<span>/mo</span>
						</div>
						<ul>
							<li>2 unique pages</li>
							<li>Unlimited revisions</li>
							<li>+$199/mo for 3 ecommerce products</li>
							<li>Save 25% on photo/video services</li>
							<li>Yours after one-year commitment</li>
						</ul>
					</div>
					<div>
						<img src="/startup.svg" width="340" height="300" alt="Studio Kanvas - Startup Plan" />
						<h3>Startup</h3>
						<div className="title">Ideal for small business owners, growing brands</div>
						<div className="note">Most Popular</div>
						<div className="price">
							$399<span>/mo</span>
						</div>
						<ul>
							<li>5 unique pages</li>
							<li>Unlimited revisions</li>
							<li>+$199/mo for 10 ecommerce products</li>
							<li>
								+$99 for additional pages <div className="small">maximum of 10 pages</div>
							</li>
							<li>Yours after one-year commitment</li>
						</ul>
					</div>
					<div>
						<img
							loading="lazy"
							src="/custom-service.svg"
							width="340"
							height="300"
							alt="Studio Kanvas - Custom Plan"
						/>
						<h3>Custom</h3>
						<div className="title">Ideal for established companies</div>
						<div className="note">Contact Us</div>
						<div className="price">à la carte</div>
						<ul>
							<li>Your desired number of pages</li>
							<li>The features &amp; products you want</li>
							<li>In-house solution available</li>
							<li>Yours after payment</li>
						</ul>
					</div>
				</Fade>
			</S.CompareChart>
		</GS.YPadding>
	);
}
