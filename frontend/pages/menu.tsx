import * as GS from '../styles/global'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { from, gql } from 'apollo-boost'
import MenuComponent from '../components/menu'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useContext, useState, useEffect, useReducer } from 'react'
import classes from '*.module.css'

interface info {
    standard: {
        total: number
        price: string
    }
    goong: {
        total: number
        price: string
    }
    premium: {
        total: number
        price: string
    }
    shabushabu: {
        total: number
        price: string
    }
}

const Menu = () => {
    const { loading, error, data } = useQuery(MENU_QUERY)
    //run the console.log below to see the errors
    //console.log(JSON.stringify(data), JSON.stringify(error, null, 2));
    const [menu, setMenu] = useState(null)

    function navLanguage(selection) {
        switch (selection) {
            case 'standard':
                return `Standard all-you-can-eat menu (${data.ayces[0].meta_price} per person)`
                break
            case 'goong':
                return `Goong all-you-can-eat menu (${data.ayces[1].meta_price} per person)`
                break
            case 'premium':
                return `Premium all-you-can-eat menu (${data.ayces[2].meta_price} per person)`
                break
            case 'shabushabu':
                return `Shabu Shabu all-you-can-eat menu (${data.ayces[3].meta_price} per person)`
                break
            case 'mainmenu':
                return 'à la carte menu'
                break
            default:
                break
        }
    }

    const INFO: info = {
        standard: {
            total:
                data &&
                data.ayces[0].beefs.length +
                data.ayces[0].chickens.length +
                data.ayces[0].porks.length +
                data.ayces[0].sides.length +
                data.ayces[0].desserts.length,
            price: data && data.ayces[0].meta_price,
        },
        goong: {
            total:
                data &&
                data.ayces[1].beefs.length +
                data.ayces[1].chickens.length +
                data.ayces[1].porks.length +
                data.ayces[1].sides.length +
                data.ayces[1].desserts.length,
            price: data && data.ayces[1].meta_price,
        },

        premium: {
            total:
                data &&
                data.ayces[2].beefs.length +
                data.ayces[2].chickens.length +
                data.ayces[2].porks.length +
                data.ayces[2].sides.length +
                data.ayces[2].desserts.length,
            price: data && data.ayces[2].meta_price,
        },
        shabushabu: {
            total:
                data &&
                data.ayces[3].beefs.length +
                data.ayces[3].chickens.length +
                data.ayces[3].porks.length +
                data.ayces[3].sides.length +
                data.ayces[3].desserts.length,
            price: data && data.ayces[3].meta_price,
        },
    }
    console.log(data)
    return (
        <GS.FullWidth>
            {loading ?
                <LoadingContainer>
                    <CircularProgress />
                </LoadingContainer> :
                <>
                    <MenuNavigation>
                        <h2>
                            {!menu ? (
                                'Please select a menu'
                            ) : (
                                <>
                                    {navLanguage(menu)}{' '}
                                    <div onClick={() => setMenu(null)}>
                                        see another menu
                            </div>
                                </>
                            )}
                        </h2>
                    </MenuNavigation>
                    <GS.YCPadding padding={'15rem'}>
                        <GS.MaxContainer>
                            {!menu ? (
                                <MenuSelector>
                                    {/* <div>
                                        <h2>Main Menu</h2>
                                        <p>A la carte menu, available all day.</p>
                                        <GS.MainButton
                                            onClick={() => updateMenu('mainmenu')}
                                        >
                                            View Main Menu
                                        </GS.MainButton>
                                    </div> */}
                                    <div>
                                        <h2>AYCE Korean BBQ Menu</h2>
                                        <p>
                                            A delicious 90-minute AYCE feast, available
                                            for dinner only
                                </p>
                                        <GS.FlexEven className="ayce-button-container">
                                            <div>
                                                <div className="info">
                                                    <GS.MainButton
                                                        onClick={() =>
                                                            setMenu('standard')
                                                        }
                                                    >
                                                        Standard
                                            </GS.MainButton>
                                                    <div>
                                                        {INFO.standard.total} selections
                                            </div>
                                                    <div>
                                                        {INFO.standard.price} per person
                                            </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="info">
                                                    <GS.MainButton
                                                        onClick={() => setMenu('goong')}
                                                    >
                                                        Goong
                                            </GS.MainButton>
                                                    <div>
                                                        {INFO.goong.total} selections
                                            </div>
                                                    <div>
                                                        {INFO.goong.price} per person
                                            </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="info">
                                                    <GS.MainButton
                                                        onClick={() =>
                                                            setMenu('premium')
                                                        }
                                                    >
                                                        Premium
                                            </GS.MainButton>
                                                    <div>
                                                        {INFO.premium.total} selections
                                            </div>
                                                    <div>
                                                        {INFO.premium.price} per person
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
                                                onClick={() => setMenu('shabushabu')}
                                            >
                                                Shabu Shabu Menu
                                    </GS.MainButton>
                                            <div>
                                                {INFO.shabushabu.total} selections
                                    </div>
                                            <div>
                                                {INFO.shabushabu.price} per person
                                    </div>
                                        </div>
                                    </div>
                                </MenuSelector>
                            ) : (
                                <MenuComponent selection={menu} data={data && data} />
                            )}
                        </GS.MaxContainer>
                    </GS.YCPadding>
                </>
            }
        </GS.FullWidth>
    )
}

const LoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
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
        font-size: 1.7rem;
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
    & > div {
        text-align: center;
        border: 0.1rem solid #ccc;
        padding: 7.5rem 2.5rem;
        position: relative;
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
            font-size: 1.2rem;
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


const MENU_QUERY = gql`
    {
        ayces {
            ayce_type
            meta_price
            beefs {
                english_name
                korean_name
                price
                limit
            }
            chickens {
                english_name
                korean_name
                price
                limit
            }
            porks {
                english_name
                korean_name
                price
                limit
            }
            seafoods {
                english_name
                korean_name
                price
                limit
            }
            sides {
                english_name
                korean_name
                price
                limit
            }
            desserts {
                dessert_name
            }
        }
    }
`

export default Menu
