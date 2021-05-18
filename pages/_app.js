import '../styles/fonts.css';
import 'pattern.css/dist/pattern.min.css';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout/layout';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default withData(MyApp);
