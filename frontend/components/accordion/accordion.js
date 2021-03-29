import React from 'react';
import * as GS from '../../styles/global';
import * as S from './accordion.styles';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function faq() {
	return (
		<S.Faq>
			<Accordion defaultActiveKey="0">
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="0">
							Are the revisions and updates really unlimited?
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							Yes! Please note that revisions and updates are <strong>not</strong> new additions
							or features. If you require new pages or a redesign, that may incur an additional
							charge.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="1">
							I need a simple website. What plan is best for me?
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="1">
						<Card.Body>
							If you need a simple website with one or two pages, we recommend the{' '}
							<strong>Essential</strong> plan. This is ideal for new business owners or
							influencers looking to grow their digital brand.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="11">
							Am I bound by contract?
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="11">
						<Card.Body>No, you can cancel your contract any time.</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="2">
							I have a restaurant. Do you provide QR code integrated menus?
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="2">
						<Card.Body>
							Yes we do. QR menu pages require additional development time and may incur an
							additional fee. We also provide ancillary services such as food photography and
							menu design.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="10">
							Are these plans valid for existing websites?
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="10">
						<Card.Body>
							The <strong>Essential</strong> and <strong>Startup</strong> plan are mainly
							reserved for new websites. If you have an existing website that you would like to
							modify, please contact us for a free consultation and we would be happy to assist
							you with our <strong>Custom</strong> plan.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="3">
							Do I own my website if I purchase the <strong>Essential</strong> or{' '}
							<strong>Startup</strong> plan?
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="3">
						<Card.Body>
							The monthly fee is based on a year long lease-to-own program. After 12
							non-consecutive months of service, you obtain full ownership of your website.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="4">
							What can I do to purchase my website sooner?
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="4">
						<Card.Body>
							Please contact us to purchase the full rights to your website sooner than the one
							year period. On most occasions, we offer a prorated discount to buy out your
							website. In addition, you can choose the <strong>Custom</strong> plan instead to
							own your site outright.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="5">
							I need a website with more than 5 pages. Which plan is best for me?
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="5">
						<Card.Body>
							The <strong>Essential</strong> and <strong>Startup</strong> plans are mainly
							intended for smaller scale websites. We offer up to 15 pages for the{' '}
							<strong>Startup</strong> plan. If you require a website or web application with
							additional requirements, please contact us for a free consultation regarding our{' '}
							<strong>Custom</strong> plan.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="6">
							Do you offer other services?
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="6">
						<Card.Body>
							<strong>Absolutely</strong>. We offer ancillary services such as digital
							marketing, SEM/SEO services, graphic design services, photography and video
							editing services. Please contact us for more details.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="7">
							Do you develop mobile apps as well?
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="7">
						<Card.Body>
							We can. If you are looking to convert your web application into a native
							iOS/Android app, please contact us for a free consultation to discuss your
							options.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="8">
							I need additional features on my website, such as a submission form or an unique
							application. How much does that cost?
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="8">
						<Card.Body>
							We offer free consultation to scope your project. Depending on what plan you fall
							under, we will add the extra features as a one-time fee.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="9">
							I want to sell products online. What are my options?
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="9">
						<Card.Body>
							We offer ecommerce packages for all three plans. We build a storefront using
							Shopify, Square, or WooCommerce.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey="12">
							What is your refund policy?
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="12">
						<Card.Body>
							At Kanvas we believe in excellent customer service. Please let us know what we can
							do to make your experience better at{' '}
							<Link href="mailto:hello@studiokanvas.com">
								<a target="_blank">hello@studiokanvas.com</a>
							</Link>
							. We exercise a 100% satisfaction guarantee policy and will refund your full
							monthly fee if you are unsatisfied with your service.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</S.Faq>
	);
}
