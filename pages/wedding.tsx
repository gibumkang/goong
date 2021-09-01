import * as GS from '../styles/global'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import MenuComponent from '../components/menu'
import { useState, useEffect } from 'react'
import useDisplayMenu from '../hooks/useDisplayMenu'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Accordion'
import { CgMenuBoxed } from 'react-icons/cg'

const Menu = () => {

    const { standard, goong, premium, shabushabu, drinks } = useDisplayMenu()
    const [menu, setMenu] = useState(goong)

    const menuName = menu => {
        switch (menu) {
            case standard: return 'Standard'
            case goong: return 'Goong'
            case premium: return 'Premium'
            case shabushabu: return 'Shabu Shabu'
        }
    }

    return (
        <Background>
            <Fade>
                <MenuNavigation>
                    {!menu ? (
                        <h2>Please select a menu</h2>
                    ) : (
                        <>
                            <h2>Congratulations Tiffany and Xavier!</h2>
                            <img src="/wedding.webp" alt="Goong Appetizer selections" loading="lazy" />
                        </>
                    )}
                </MenuNavigation>
            </Fade>
            <GS.YCPadding padding={'5rem'}>
                <GS.MaxContainer>
                    <MenuComponent selection={menu} drinks={drinks} menuName={menuName(menu)} />
                </GS.MaxContainer>
            </GS.YCPadding>
        </Background>
    )
}

const Background = styled(GS.FullWidth)`
    background: url('/goong-roof.png') no-repeat left bottom;
`

const MenuNavigation = styled.div`
    text-align: center;
    padding: 0.5rem 0rem;
    position: sticky;
    top: 0;
    border-bottom: 0.1rem solid #999;
    background: #fff;
    z-index: 2;
    h2 {
        font-size: 2rem;
    }
    img {
        width: 40rem;
        height: auto;
        margin: 0 auto;
        display: block;
        padding-bottom: 3rem;
    }
    /* div {
        padding: 1rem 1.5rem;
        background: ${(props) => props.theme.colors.primary};
        color: #fff;
        width: 15rem;
        margin: 0.5rem auto;
        font-size: 1.2rem;
        border-radius: 1rem;
        &:hover {
            cursor: pointer;
        }
    } */
`

const Rules = styled.div`
    margin-bottom: 2.5rem;
    h3, .button {
        text-align: center;
    }
    .button {
        border: .1rem solid #ccc;
        max-width: 20rem;
        margin: 0 auto;
        padding: .5rem .25rem;
        border-radius: 1rem;
        font-size: 1.4rem;
        &:hover {
            cursor: pointer;
        }
    }
    .rules {
        list-style: disc;
        text-align: left;
        padding: 1rem 4rem;
        li {
            padding: .5rem 0rem;
            font-size: 1.4rem;
        }
    }
    .disclaimer {
        text-align: center;
        font-size: 1.2rem;
        padding: 1rem 3rem;
        opacity: .7;
    }
`

const MenuSelector = styled.div`
    & > div {
        text-align: center;
        border: 0.1rem solid #ccc;
        padding: 7.5rem 2.5rem;
        position: relative;
        background: rgba(255,255,255,0.9);
        margin-bottom: 2.5rem;
        h2 {
            font-size: 2.1rem;
        }
        p {
            font-size: 1.5rem;
        }
        .ayce-button-container {
            gap: 1rem;
            div > a {
                width: 100%;
            }
            @media screen and (max-width: 500px) {
                display: block;
                div > a {
                    width: 50%;
                }
            }
        }
        .info > div {
            font-size: 1.4rem;
            font-style: italic;
            margin: 0.25rem 0rem;
        }
    }
    @media screen and (max-width: 900px) {
        display: block;
        a {
            width: 100%;
            @media screen and (max-width: 500px) {
                width: 50%;
            }
        }
    }
    h4 {
        font-size: 2rem;
        font-style: normal;
        padding: 0rem;
    }
    .kid-price {
        font-size: 1.3rem;
        margin-top: .25rem;
        color: #666;
    }
`

export default Menu
