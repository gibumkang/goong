import * as GS from '../styles/global'
import styled from 'styled-components'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'

export default function About() {
    return (
        <Wrapper>
            <HeaderBg>
                <h2>An unparalleled Korean dining experience</h2>
            </HeaderBg>
            <GS.FullWidth className="about-container">
                <GS.MaxContainer>
                    <GS.FlexEven className="about">
                        <div>
                            <Fade><img src="/about-photo.jpg" alt="Goong Korean BBQ" /></Fade>
                        </div>
                        <div>
                            <h3>Experience Korean cuisine.</h3>
                            <p>
                                Korean BBQ should not be about stuffing yourself, but instead
                                about enjoying the delicious flavor profiles of quality meat.
                                Therefore, owner David Shim opened Goong Korean BBQ restaurant
                                in April 2016 with one goal in mind: To allow guests an unparalleled
                                dining experience by serving only the finest meat selection with genuine
                                service.
                            </p>
                            <p>
                                Goong Korean BBQ restaurant's interior, designed by the award-winning
                                Jinwoo Hwang based in South Korea. The design concept reflects the contemporary
                                elegance the 'Las Vegas Strip &amp; City Center' area, while paying tribute
                                to the traditional Korean culture. Goong offers patrons various seating choices,
                                from traditional Korean seating on a raised platform with mats to normal chairs or booths.
                            </p>
                            <p>Read our story from 2016 on EATER.com</p>
                            <Fade>
                                <Link passHref href="https://vegas.eater.com/2016/4/13/11419830/goong-korean-bbq-restaurant-now-marinating-in-the-southwest">
                                    <GS.MainButton target="_blank">
                                        Read More
                                </GS.MainButton>
                                </Link>
                            </Fade>
                        </div>
                    </GS.FlexEven>
                </GS.MaxContainer>
            </GS.FullWidth>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .about-container {
        background: #000;
    }
    .about {
        div:nth-child(1){
            padding: 2.5rem;
            img {
                display: block;
                width: 80%;
                height: auto;
                border: .2rem solid ${props => props.theme.colors.primary}
            }
        }
        div:nth-child(2){
            padding: 5rem;
            p, h3 {
                color: #eee;
            }
        }
        @media screen and (max-width: 900px){
            display: block;
            div:nth-child(1) {
                img {
                    width: 60%;
                    margin: 0 auto;
                }
            }
            div:nth-child(2){
                padding: 1rem 2.5rem;
            }
        }
    }
`

const HeaderBg = styled.div`
    background: url('/about-header.jpg') no-repeat center top;
    background-size: cover;
    padding: 15rem 0rem;
    @media screen and (max-width: ${props => props.theme.minWidth}){
        box-shadow: 0px 0px 0px 2000rem rgba(0,0,0,0.55) inset;
    }
    h2, p {
        color: #fff;
        text-align: center;
        padding: 0rem 1.5rem;
    }
`