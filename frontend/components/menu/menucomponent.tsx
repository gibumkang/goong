import * as S from './menu.styles'
import * as GS from '../../styles/global'
import { LINKS } from '../../data/links'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import useOnScreen from '../../hooks/useOnScreen'
import React, { useState, useReducer, useEffect } from 'react'
import Tooltip from '@material-ui/core/Tooltip'

type Food = {
    english_name: string
    korean_name: string
    price: string
    limit: boolean
}

interface Props {
    data: {
        ayces: {
            ayce_type: string
            beefs: Food
            chickens: Food
            porks: Food
            seafood: Food
            sides: Food
            desserts: {
                dessert_name: string
            }
            filter: (type) => void
            map: (type) => void
            forEach: (type) => void
        }
    }
    selection: string
}

const MenuComponent: React.FC<Props> = ({ data, selection }) => {
    const [ayce, setAyce] = useState('standard')

    //state
    const setMenu = (selection) => {
        switch (selection) {
            case 'standard':
                setAyce('standard')
                break
            case 'goong':
                setAyce('goong')
                break
            case 'premium':
                setAyce('premium')
                break
            case 'shabushabu':
                setAyce('shabushabu')
                break
            default:
                setAyce('standard')
                break
        }
    }

    return (
        <GS.YPadding>
            {data.ayces.map(
                (ayce) =>
                    ayce.ayce_type === selection && (
                        <div key={ayce.ayce_type}>
                            {ayce.beefs.length > 0 && (
                                <S.Container>
                                    <div id="beef" className="anchor" />
                                    <h3>Beef</h3>
                                    <S.Column>
                                        {data.ayces.map(
                                            (ayce) =>
                                                ayce.ayce_type === selection &&
                                                ayce.beefs.map((beef) => {
                                                    return (
                                                        <GS.FlexEven
                                                            key={
                                                                beef.english_name
                                                            }
                                                        >
                                                            <div className="name">
                                                                {
                                                                    beef.english_name
                                                                }{' '}
                                                                <div className="korean">
                                                                    {
                                                                        beef.korean_name
                                                                    }
                                                                </div>
                                                                {beef.limit ===
                                                                    true && (
                                                                    <div className="limit">
                                                                        Limit 1
                                                                        Per
                                                                        Person
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="price">
                                                                ${beef.price}
                                                            </div>
                                                        </GS.FlexEven>
                                                    )
                                                })
                                        )}
                                    </S.Column>
                                </S.Container>
                            )}
                            {ayce.chickens.length > 0 && (
                                <S.Container key={ayce.chickens}>
                                    <div id="chicken" className="anchor" />
                                    <h3>Chicken</h3>
                                    <S.Column>
                                        {data.ayces.map(
                                            (ayce) =>
                                                ayce.ayce_type === selection &&
                                                ayce.porks.map((pork) => {
                                                    return (
                                                        <GS.FlexEven
                                                            key={
                                                                pork.english_name
                                                            }
                                                        >
                                                            <div className="name">
                                                                {
                                                                    pork.english_name
                                                                }{' '}
                                                                <div className="korean">
                                                                    {
                                                                        pork.korean_name
                                                                    }
                                                                </div>
                                                                {pork.limit ===
                                                                    true && (
                                                                    <div className="limit">
                                                                        Limit 1
                                                                        Per
                                                                        Person
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="price">
                                                                ${pork.price}
                                                            </div>
                                                        </GS.FlexEven>
                                                    )
                                                })
                                        )}
                                    </S.Column>
                                </S.Container>
                            )}
                            {ayce.porks.length > 0 && (
                                <S.Container key={ayce.porks}>
                                    <div id="pork" className="anchor" />
                                    <h3>Pork</h3>
                                    <S.Column>
                                        {data.ayces.map(
                                            (ayce) =>
                                                ayce.ayce_type === selection &&
                                                ayce.chickens.map((chicken) => {
                                                    return (
                                                        <GS.FlexEven
                                                            key={
                                                                chicken.english_name
                                                            }
                                                        >
                                                            <div className="name">
                                                                {
                                                                    chicken.english_name
                                                                }{' '}
                                                                <div className="korean">
                                                                    {
                                                                        chicken.korean_name
                                                                    }
                                                                </div>
                                                                {chicken.limit ===
                                                                    true && (
                                                                    <div className="limit">
                                                                        Limit 1
                                                                        Per
                                                                        Person
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="price">
                                                                ${chicken.price}
                                                            </div>
                                                        </GS.FlexEven>
                                                    )
                                                })
                                        )}
                                    </S.Column>
                                </S.Container>
                            )}
                            {ayce.seafoods.length > 0 && (
                                <S.Container key={ayce.seafoods}>
                                    <div id="seafood" className="anchor" />
                                    <h3>Seafood</h3>
                                    <S.Column>
                                        {data.ayces.map(
                                            (ayce) =>
                                                ayce.ayce_type === selection &&
                                                ayce.seafoods.map((seafood) => {
                                                    return (
                                                        <GS.FlexEven
                                                            key={
                                                                seafood.english_name
                                                            }
                                                        >
                                                            <div className="name">
                                                                {
                                                                    seafood.english_name
                                                                }{' '}
                                                                <div className="korean">
                                                                    {
                                                                        seafood.korean_name
                                                                    }
                                                                </div>
                                                                {seafood.limit ===
                                                                    true && (
                                                                    <div className="limit">
                                                                        Limit 1
                                                                        Per
                                                                        Person
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="price">
                                                                ${seafood.price}
                                                            </div>
                                                        </GS.FlexEven>
                                                    )
                                                })
                                        )}
                                    </S.Column>
                                </S.Container>
                            )}
                            {ayce.sides.length > 0 && (
                                <S.Container key={ayce.sides}>
                                    <div id="appetizers" className="anchor" />
                                    <h3>Appetizers</h3>
                                    <S.Column>
                                        {data.ayces.map(
                                            (ayce) =>
                                                ayce.ayce_type === selection &&
                                                ayce.sides.map((side) => {
                                                    return (
                                                        <GS.FlexEven
                                                            key={
                                                                side.english_name
                                                            }
                                                        >
                                                            <div className="name">
                                                                {
                                                                    side.english_name
                                                                }{' '}
                                                                <div className="korean">
                                                                    {
                                                                        side.korean_name
                                                                    }
                                                                </div>
                                                                {side.limit ===
                                                                    true && (
                                                                    <div className="limit">
                                                                        Limit 1
                                                                        Per
                                                                        Person
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="price">
                                                                ${side.price}
                                                            </div>
                                                        </GS.FlexEven>
                                                    )
                                                })
                                        )}
                                    </S.Column>
                                </S.Container>
                            )}

                            {data.ayces.map(
                                (ayce) =>
                                    ayce.ayce_type === selection && (
                                        <Tooltip
                                            title="Click on a category to navigate"
                                            key={ayce.ayce_type}
                                        >
                                            <S.FooterNavigation>
                                                <ul>
                                                    {ayce.sides.length > 0 && (
                                                        <li>
                                                            <a href="#appetizers">
                                                                Appetizers
                                                            </a>
                                                        </li>
                                                    )}
                                                    {ayce.beefs.length > 0 && (
                                                        <li>
                                                            <a href="#beef">
                                                                Beef
                                                            </a>
                                                        </li>
                                                    )}
                                                    {ayce.chickens.length >
                                                        0 && (
                                                        <li>
                                                            <a href="#chicken">
                                                                Chicken
                                                            </a>
                                                        </li>
                                                    )}
                                                    {ayce.porks.length > 0 && (
                                                        <li>
                                                            <a href="#pork">
                                                                Pork
                                                            </a>
                                                        </li>
                                                    )}
                                                    {ayce.seafoods.length >
                                                        0 && (
                                                        <li>
                                                            <a href="#seafood">
                                                                Seafood
                                                            </a>
                                                        </li>
                                                    )}
                                                </ul>
                                            </S.FooterNavigation>
                                        </Tooltip>
                                    )
                            )}
                        </div>
                    )
            )}
        </GS.YPadding>
    )
}

export default MenuComponent
