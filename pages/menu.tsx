import * as GS from '../styles/global'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import MenuComponent from '../components/menu'
import { useState, useEffect } from 'react'
import useDisplayMenu from '../hooks/useDisplayMenu'

const Menu = () => {

    const { standard, goong, premium, shabushabu } = useDisplayMenu()
    const [menu, setMenu] = useState(null)

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
                            <h2>AYCE {menuName(menu)} Menu</h2>
                            <div onClick={() => setMenu(null)}>See another menu</div>
                        </>
                    )}
                </MenuNavigation>
            </Fade>
            <GS.YCPadding padding={'15rem'}>
                <GS.MaxContainer>
                    {!menu ? (
                        <MenuSelector>
                            <div>
                                <h2>Goong AYCE Rules</h2>
                                <ul className="rules">
                                    <li>Kids less than 40 inches height eat fore free | between 40-50 inches will be charged kids price</li>
                                    <li>90 min limit</li>
                                    <li>Entire party must order from the same AYCE menu</li>
                                    <li>Without exception, all guest who are seated at a table will be charged in full</li>
                                    <li>Our AYCE food is for dine-in only. No togo</li>
                                    <li>ALl food must be consumed at the restaurant; Leftovers can't be taken home</li>
                                    <li>Extra charges will be applied to unfinished food</li>
                                    <li>Maximum 4 credit cards per party or table</li>
                                    <li>Grauity of 18% is included for parties of 8 or more</li>
                                </ul>
                            </div>
                            <div>
                                <h2>AYCE Korean BBQ Menu</h2>
                                <p>
                                    A delicious 90-minute AYCE feast, available
                                    all day
                                </p>
                                <GS.FlexEven className="ayce-button-container">
                                    <div>
                                        <div className="info">
                                            <GS.MainButton
                                                onClick={() => setMenu(standard)}
                                            >
                                                Standard
                                            </GS.MainButton>
                                            <div>
                                                $25.95 per person
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="info">
                                            <GS.MainButton
                                                onClick={() => setMenu(goong)}
                                            >
                                                Goong
                                            </GS.MainButton>
                                            <div>
                                                $29.95 per person
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="info">
                                            <GS.MainButton
                                                onClick={() => setMenu(premium)}
                                            >
                                                Premium
                                            </GS.MainButton>
                                            <div>
                                                $38.95 per person
                                            </div>
                                        </div>
                                    </div>
                                </GS.FlexEven>
                            </div>
                            <div>
                                <h2>AYCE Shabu Shabu Menu</h2>
                                <p>
                                    Enjoy delicious AYCE hotpot with fine meat
                                    selections
                                </p>
                                <div className="info">
                                    <GS.MainButton
                                        onClick={() => setMenu(shabushabu)}
                                    >
                                        Shabu Shabu Menu
                                    </GS.MainButton>
                                    <div>
                                        $29.95 per person
                                    </div>
                                </div>
                            </div>
                        </MenuSelector>
                    ) :
                        <MenuComponent selection={menu} menuName={menuName(menu)} />
                    }
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
    div {
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
    }
`

const MenuSelector = styled(GS.GridTwo)`
    grid-gap: 2.5rem;
    .rules {
        list-style: disc;
        text-align: left;
        li {
            padding: .5rem 0rem;
        }
    }
    & > div {
        text-align: center;
        border: 0.1rem solid #ccc;
        padding: 7.5rem 2.5rem;
        position: relative;
        background: rgba(255,255,255,0.9);
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
        div {
            margin-bottom: 2.5rem;
        }
        a {
            width: 100%;
        }
    }
`

export default Menu
