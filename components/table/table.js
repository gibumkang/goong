import React from 'react';
import * as GS from '../../styles/global';
import Table from 'react-bootstrap/Table';

export default function ComparisonTable({ darkMode }) {
	return (
		<GS.YPadding>
			<Table striped bordered hover responsive variant={darkMode && 'dark'}>
				<thead>
					<tr>
						<th> </th>
						<th>Kanvas</th>
						<th>Wix (Website Builder)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Design</td>
						<td>Custom, non-templated</td>
						<td>Templated</td>
					</tr>
					<tr>
						<td>Requires Maintenance</td>
						<td>No, Kanvas maintains it for you</td>
						<td>You are responsible</td>
					</tr>
					<tr>
						<td>Dedicated Account Manager</td>
						<td>Yes</td>
						<td>No</td>
					</tr>
					<tr>
						<td>Support</td>
						<td>Free 24/7 Support</td>
						<td>Email only</td>
					</tr>
					<tr>
						<td>Modularity</td>
						<td>100% customizable</td>
						<td>Limited options</td>
					</tr>
					<tr>
						<td>Contract Commitment</td>
						<td>No, cancel anytime</td>
						<td>No</td>
					</tr>
					<tr>
						<td>Security</td>
						<td>Yes</td>
						<td>Yes</td>
					</tr>
					<tr>
						<td>Google Analytics</td>
						<td>Yes</td>
						<td>Limited</td>
					</tr>
					<tr>
						<td>Google Webmaster Tools</td>
						<td>Yes</td>
						<td>No</td>
					</tr>
					<tr>
						<td>Live Chat Integration</td>
						<td>Yes</td>
						<td>Limited</td>
					</tr>
					<tr>
						<td>Sitemap</td>
						<td>Yes</td>
						<td>No</td>
					</tr>
					<tr>
						<td>Responsive</td>
						<td>Yes</td>
						<td>Yes</td>
					</tr>
					<tr>
						<td>Accessibility</td>
						<td>Yes</td>
						<td>Fixed</td>
					</tr>
					<tr>
						<td>SEO</td>
						<td>Yes</td>
						<td>Fixed</td>
					</tr>
					<tr>
						<td>Content Management System*</td>
						<td>Available</td>
						<td>Limited</td>
					</tr>
					<tr>
						<td>eCommerce*</td>
						<td>Available</td>
						<td>Limited</td>
					</tr>
					<tr>
						<td>Custom Software*</td>
						<td>Available</td>
						<td>Not Available</td>
					</tr>
					<tr>
						<td>Product Photography*</td>
						<td>Available</td>
						<td>Not Available</td>
					</tr>
					<tr>
						<td>Video Services*</td>
						<td>Available</td>
						<td>Not Available</td>
					</tr>
					<tr>
						<td>Logo Design*</td>
						<td>Available</td>
						<td>Not Available</td>
					</tr>
					<tr>
						<td>Graphic Design Services*</td>
						<td>Available</td>
						<td>Not Available</td>
					</tr>
					<tr>
						<td>Digital Marketing Services*</td>
						<td>Available</td>
						<td>Not Available</td>
					</tr>
				</tbody>
			</Table>
			<p>*Incurs additional fees. Contact us for more information.</p>
		</GS.YPadding>
	);
}
