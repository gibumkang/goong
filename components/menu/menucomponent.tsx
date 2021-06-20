import * as S from './menu.styles'
import * as GS from '../../styles/global'
import { LINKS } from '../../data/links'
import Link from 'next/link'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import useOnScreen from '../../hooks/useOnScreen'
import React, { useState, useReducer, useEffect } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import APPETIZERS from '../../data/menu/categories/appetizers'
import Accordion from 'react-bootstrap/Accordion'
import useWindowSize from '../../hooks/useWindowSize'


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
    menuName: string
}

const MenuComponent: React.FC<Props> = ({ selection, menuName }) => {
    const window = useWindowSize()
    const [isNavInfoVisible, setIsNavInfoVisible] = useState(false)
    useEffect(() => {
        if (window.width <= 990) {
            setIsNavInfoVisible(true)
        } else {
            setIsNavInfoVisible(false)
        }
    }, [window])
    return (
        <GS.YPadding>
            {selection.appetizers && (
                <S.Container>
                    <div id="appetizers" className="anchor" />
                    <img src="/header-appetizers.webp" alt="Goong Appetizers selections" loading="lazy" />
                    <S.Column>
                        <Fade>
                            {selection.appetizers.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {/* {item.image && <img src={item.image} loading="lazy" width="1124" height="750" />} */}
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
                    {menuName != 'Shabu Shabu' && <img src="/header-beef.webp" alt="Goong Beef selections" loading="lazy" />}
                    <S.Column>
                        <Fade>
                            {selection.beef.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {/* {item.image && <img src={item.image} loading="lazy" width="1124" height="750" />} */}
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
                    <img src="/header-chicken.webp" alt="Goong Chicken selections" loading="lazy" />
                    <S.Column>
                        <Fade>
                            {selection.chicken.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {/* {item.image && <img src={item.image} loading="lazy" width="1124" height="750" />} */}
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
                    <img src="/header-pork.webp" alt="Goong Pork selections" loading="lazy" />
                    <S.Column>
                        <Fade>
                            {selection.pork.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {/* {item.image && <img src={item.image} loading="lazy" width="1124" height="750" />} */}
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
                    <img src="/header-seafood.webp" alt="Goong Seafood selections" loading="lazy" />
                    <S.Column>
                        <Fade>
                            {selection.seafood.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {/* {item.image && <img src={item.image} loading="lazy" width="1124" height="750" />} */}
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
                    <img src="/header-dessert.webp" alt="Goong Desserts selections" loading="lazy" />
                    <S.Column>
                        <Fade>
                            {selection.dessert.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {/* {item.image && <img src={item.image} loading="lazy" width="1124" height="750" />} */}
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
                <S.Nav>
                    {/* onClick={() => setIsNavCollapsed(true)} and <IoIosArrowDropdownCircle /> */}
                    <div className={`option ${isNavInfoVisible && 'show'}`}>
                        Scroll horizontally to see more
                    </div>
                    <div className="container">
                        <div>
                            <a href="#appetizers">
                                <img src="/thumbnail-appetizers.jpg" alt="Goong Appetizers selections" loading="lazy" />
                                Appetizers
                            </a>
                        </div>
                        <div>
                            <a href="#beef">
                                <img src="/thumbnail-beef.jpg" alt="Goong Beef selections" loading="lazy" />
                                Beef
                            </a>
                        </div>
                        <div>
                            <a href="#chicken">
                                <img src="/thumbnail-chicken.jpg" alt="Goong Chicken selections" loading="lazy" />
                                Chicken
                            </a>
                        </div>
                        <div>
                            <a href="#pork">
                                <img src="/thumbnail-pork.jpg" alt="Goong Pork selections" loading="lazy" />
                                Pork
                            </a>
                        </div>
                        <div>
                            <a href="#seafood">
                                <img src="/thumbnail-seafood.jpg" alt="Goong Seafood selections" loading="lazy" />
                                Seafood
                            </a>
                        </div>
                        <div>
                            <a href="#dessert">
                                <img src="/thumbnail-dessert.jpg" alt="Goong Dessert selections" loading="lazy" />
                                Dessert
                            </a>
                        </div>
                    </div>
                </S.Nav>
            )}
        </GS.YPadding>
    )
}

export default MenuComponent
