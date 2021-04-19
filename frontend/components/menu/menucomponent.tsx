import * as S from './menu.styles'
import * as GS from '../../styles/global'
import { LINKS } from '../../data/links'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import useOnScreen from '../../hooks/useOnScreen'
import React, { useState, useReducer, useEffect } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import APPETIZERS from '../../data/menu/categories/appetizers'

type Food = {
    english_name: string
    korean_name: string
    price: string
    limit: boolean
    map?: Function
    length?: number
}

interface Props {
    selection: {
        appetizers: Food
        beef: Food
        chicken: Food
        pork: Food
        seafood: Food
        dessert: Food
    }
}

const MenuComponent: React.FC<Props> = ({ selection }) => {
    return (
        <GS.YPadding>
            {selection.appetizers && (
                <S.Container>
                    <div id="appetizers" className="anchor" />
                    <h3>Appetizers</h3>
                    <S.Column>
                        <Fade>
                            {selection.appetizers.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="name">{item.english_name}</div>
                                        <div>{item.korean_name}</div>
                                        {item.limit && <div className="limit">Limit 1 Per Person</div>}
                                    </div>
                                )
                            })}
                        </Fade>
                    </S.Column>
                </S.Container>
            )}

            {selection.beef && (
                <S.Container>
                    <div id="beef" className="anchor" />
                    <h3>Beef</h3>
                    <S.Column>
                        <Fade>
                            {selection.beef.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="name">{item.english_name}</div>
                                        <div>{item.korean_name}</div>
                                        {item.limit && <div className="limit">Limit 1 Per Person</div>}
                                    </div>
                                )
                            })}
                        </Fade>
                    </S.Column>
                </S.Container>
            )}

            {selection.chicken && (
                <S.Container>
                    <div id="chicken" className="anchor" />
                    <h3>Chicken</h3>
                    <S.Column>
                        <Fade>
                            {selection.chicken.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="name">{item.english_name}</div>
                                        <div>{item.korean_name}</div>
                                        {item.limit && <div className="limit">Limit 1 Per Person</div>}
                                    </div>
                                )
                            })}
                        </Fade>
                    </S.Column>
                </S.Container>
            )}

            {selection.pork && (
                <S.Container>
                    <div id="pork" className="anchor" />
                    <h3>Pork</h3>
                    <S.Column>
                        <Fade>
                            {selection.pork.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="name">{item.english_name}</div>
                                        <div>{item.korean_name}</div>
                                        {item.limit && <div className="limit">Limit 1 Per Person</div>}
                                    </div>
                                )
                            })}
                        </Fade>
                    </S.Column>
                </S.Container>
            )}

            {selection.seafood && (
                <S.Container>
                    <div id="seafood" className="anchor" />
                    <h3>Seafood</h3>
                    <S.Column>
                        <Fade>
                            {selection.seafood.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="name">{item.english_name}</div>
                                        <div>{item.korean_name}</div>
                                        {item.limit && <div className="limit">Limit 1 Per Person</div>}
                                    </div>
                                )
                            })}
                        </Fade>
                    </S.Column>
                </S.Container>
            )}

            {selection.dessert && (
                <S.Container>
                    <div id="dessert" className="anchor" />
                    <h3>Dessert</h3>
                    <S.Column>
                        <Fade>
                            {selection.dessert.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="name">{item.english_name}</div>
                                        <div>{item.korean_name}</div>
                                        {item.limit && <div className="limit">Limit 1 Per Person</div>}
                                    </div>
                                )
                            })}
                        </Fade>
                    </S.Column>
                </S.Container>
            )}

            {selection && (
                <S.FooterNavigation>
                    <ul>
                        {selection.appetizers && selection.appetizers.length > 0 && (
                            <li>
                                <a href="#appetizers">
                                    Appetizers
                                </a>
                            </li>
                        )}
                        {selection.beef && selection.beef.length > 0 && (
                            <li>
                                <a href="#beef">
                                    Beef
                                </a>
                            </li>
                        )}
                        {selection.chicken && selection.chicken.length >
                            0 && (
                                <li>
                                    <a href="#chicken">
                                        Chicken
                                </a>
                                </li>
                            )}
                        {selection.pork && selection.pork.length > 0 && (
                            <li>
                                <a href="#pork">
                                    Pork
                                </a>
                            </li>
                        )}
                        {selection.seafood && selection.seafood.length >
                            0 && (
                                <li>
                                    <a href="#seafood">
                                        Seafood
                                </a>
                                </li>
                            )}
                        {selection.dessert && selection.dessert.length >
                            0 && (
                                <li>
                                    <a href="#dessert">
                                        Dessert
                                </a>
                                </li>
                            )}
                    </ul>
                </S.FooterNavigation>
            )}
        </GS.YPadding>
    )
}

export default MenuComponent
