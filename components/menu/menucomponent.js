import * as S from './menu.styles'
import * as GS from '../../styles/global'
import Fade from 'react-reveal/Fade'
import React, { useState, useEffect } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

const MenuComponent = ({ selection }) => {
    const window = useWindowSize()
    const [isNavInfoVisible, setIsNavInfoVisible] = useState(false)
    console.log(selection.appetizers)
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
                    <GS.FlexEven>
                        <div>
                            <h3>Appetizers</h3>
                        </div>
                        <div>
                            <img
                                src="/header-appetizers.webp"
                                alt="Goong Beef selections"
                                loading="lazy"
                            />
                        </div>
                    </GS.FlexEven>
                    <S.Column>
                        <Fade>
                            {selection.appetizers.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {/* {item.image && <img src={item.image} loading="lazy" width="1124" height="750" />} */}
                                        <div className="name">
                                            {item.english_name}
                                        </div>
                                        <div>{item.korean_name}</div>
                                        {item.limit && (
                                            <div className="limit">
                                                Limit 1 Per Person
                                            </div>
                                        )}
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
                    {selection.title != 'Shabu Shabu' && (
                        <GS.FlexEven>
                            <div>
                                <h3>Beef</h3>
                            </div>
                            <div>
                                <img
                                    src="/header-beef.webp"
                                    alt="Goong Beef selections"
                                    loading="lazy"
                                />
                            </div>
                        </GS.FlexEven>
                    )}
                    <S.Column>
                        <Fade>
                            {selection.beef.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {/* {item.image && <img src={item.image} loading="lazy" width="1124" height="750" />} */}
                                        <div className="name">
                                            {item.english_name}
                                        </div>
                                        <div>{item.korean_name}</div>
                                        {item.limit && (
                                            <div className="limit">
                                                Limit 1 Per Person
                                            </div>
                                        )}
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
                    <GS.FlexEven>
                        <div>
                            <h3>Chicken</h3>
                        </div>
                        <div>
                            <img
                                src="/header-chicken.webp"
                                alt="Goong Beef selections"
                                loading="lazy"
                            />
                        </div>
                    </GS.FlexEven>
                    <S.Column>
                        <Fade>
                            {selection.chicken.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {/* {item.image && <img src={item.image} loading="lazy" width="1124" height="750" />} */}
                                        <div className="name">
                                            {item.english_name}
                                        </div>
                                        <div>{item.korean_name}</div>
                                        {item.limit && (
                                            <div className="limit">
                                                Limit 1 Per Person
                                            </div>
                                        )}
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
                    <GS.FlexEven>
                        <div>
                            <h3>Pork</h3>
                        </div>
                        <div>
                            <img
                                src="/header-pork.webp"
                                alt="Goong Beef selections"
                                loading="lazy"
                            />
                        </div>
                    </GS.FlexEven>
                    <S.Column>
                        <Fade>
                            {selection.pork.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {/* {item.image && <img src={item.image} loading="lazy" width="1124" height="750" />} */}
                                        <div className="name">
                                            {item.english_name}
                                        </div>
                                        <div>{item.korean_name}</div>
                                        {item.limit && (
                                            <div className="limit">
                                                Limit 1 Per Person
                                            </div>
                                        )}
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
                    <GS.FlexEven>
                        <div>
                            <h3>Seafood</h3>
                        </div>
                        <div>
                            <img
                                src="/header-seafood.webp"
                                alt="Goong Beef selections"
                                loading="lazy"
                            />
                        </div>
                    </GS.FlexEven>
                    <S.Column>
                        <Fade>
                            {selection.seafood.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {/* {item.image && <img src={item.image} loading="lazy" width="1124" height="750" />} */}
                                        <div className="name">
                                            {item.english_name}
                                        </div>
                                        <div>{item.korean_name}</div>
                                        {item.limit && (
                                            <div className="limit">
                                                Limit 1 Per Person
                                            </div>
                                        )}
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
                    <GS.FlexEven>
                        <div>
                            <h3>Dessert</h3>
                        </div>
                        <div>
                            <img
                                src="/header-dessert.webp"
                                alt="Goong Beef selections"
                                loading="lazy"
                            />
                        </div>
                    </GS.FlexEven>
                    <S.Column>
                        <Fade>
                            {selection.dessert.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {/* {item.image && <img src={item.image} loading="lazy" width="1124" height="750" />} */}
                                        <div className="name">
                                            {item.english_name}
                                        </div>
                                        <div>{item.korean_name}</div>
                                        {item.limit && (
                                            <div className="limit">
                                                Limit 1 Per Person
                                            </div>
                                        )}
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
                        <MdKeyboardArrowLeft />
                        Navigate by scrolling horizontally{' '}
                        <MdKeyboardArrowRight />
                    </div>
                    <div className="container">
                        <div>
                            {selection.appetizers && (
                                <a href="#appetizers">
                                    <img
                                        src="/header-appetizers.webp"
                                        alt="Goong Appetizers selections"
                                        loading="lazy"
                                    />
                                    Appetizers
                                </a>
                            )}
                        </div>
                        <div>
                            {selection.beef && (
                                <a href="#beef">
                                    <img
                                        src="/header-beef.webp"
                                        alt="Goong Beef selections"
                                        loading="lazy"
                                    />
                                    Beef
                                </a>
                            )}
                        </div>
                        <div>
                            {selection.chicken && (
                                <a href="#chicken">
                                    <img
                                        src="/header-chicken.webp"
                                        alt="Goong Chicken selections"
                                        loading="lazy"
                                    />
                                    Chicken
                                </a>
                            )}
                        </div>
                        <div>
                            {selection.pork && (
                                <a href="#pork">
                                    <img
                                        src="/header-pork.webp"
                                        alt="Goong Pork selections"
                                        loading="lazy"
                                    />
                                    Pork
                                </a>
                            )}
                        </div>
                        <div>
                            {selection.seafood && (
                                <a href="#seafood">
                                    <img
                                        src="/header-seafood.webp"
                                        alt="Goong Seafood selections"
                                        loading="lazy"
                                    />
                                    Seafood
                                </a>
                            )}
                        </div>
                        <div>
                            {selection.dessert && (
                                <a href="#dessert">
                                    <img
                                        src="/header-dessert.webp"
                                        alt="Goong Dessert selections"
                                        loading="lazy"
                                    />
                                    Dessert
                                </a>
                            )}
                        </div>
                    </div>
                </S.Nav>
            )}
        </GS.YPadding>
    )
}

export default MenuComponent
