import Header from '../header';
import Footer from '../footer';
import { ThemeProvider } from 'styled-components';
import Theme from '../../styles/themes';
import DarkMode from '../../styles/darkmode';
import GlobalStyle from '../../styles/styles.js';
import { useState } from 'react';
import * as GS from '../../styles/global';

const Layout = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode((prevState) => !prevState);
	};

	return (
		<ThemeProvider theme={darkMode ? DarkMode : Theme}>
			<GlobalStyle />
			<Header toggleDarkMode={toggleDarkMode} />
			<GS.YCPadding padding={'12rem'}>{children}</GS.YCPadding>
			<Footer />
		</ThemeProvider>
	);
};

export default Layout;
