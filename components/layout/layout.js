import Header from '../header'
import Footer from '../footer'
import { ThemeProvider } from 'styled-components'
import Theme from '../../styles/themes'
import DarkMode from '../../styles/darkmode'
import GlobalStyle from '../../styles/styles.js'
import { useState } from 'react'
import * as GS from '../../styles/global'
import SimpleReactLightbox from 'simple-react-lightbox'
import styled from 'styled-components'

const Layout = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode((prevState) => !prevState)
    }
    return (
        <ThemeProvider theme={darkMode ? DarkMode : Theme}>
            <SimpleReactLightbox>
                <GlobalStyle />
                <Trim>
                    <Header toggleDarkMode={toggleDarkMode} />
                    {children}
                    <Footer />
                </Trim>
            </SimpleReactLightbox>
        </ThemeProvider>
    )
}

const Trim = styled.div`
    border: .5rem solid ${props => props.theme.colors.primary};
`


export default Layout
