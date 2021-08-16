import styled from 'styled-components'
import * as GS from '../../styles/global'
import { motion } from 'framer-motion'

const SET_2 = {
    color: '#971f39',
}

const SET_3 = {
    color: '#b1a232',
}

const MOBILE_BREAKPOINT = {
    width: '550px',
}

export const Background = styled(motion.div)`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Column = styled(GS.GridThree)`
    grid-gap: 2.5rem;
    grid-auto-rows: 1fr;
    padding: 2.5rem 0rem;
    .name {
        text-align: left;
        font-weight: bold;
        .korean {
            font-weight: normal;
        }
        .set-2,
        .set-3 {
            height: 2rem;
            width: 2rem;
            position: relative;
            border-radius: 1rem;
            display: inline-block;
            top: 0.5rem;
            span {
                color: #fff;
                position: absolute;
                left: 50%;
                top: 50%;
                font-size: 1rem;
                transform: translate(-50%, -50%);
            }
        }
        .set-2 {
            background: ${SET_2.color};
        }
        .set-3 {
            background: ${SET_3.color};
        }
    }
    .price {
        display: none;
        text-align: right;
        font-size: 1.9rem;
        font-family: ${(props) => props.theme.fonts.header};
    }
    & > div {
        align-items: flex-start;
        div:nth-child(1) {
            flex: 4.5;
        }
        .limit {
            text-transform: uppercase;
            font-size: 1.2rem;
        }
    }
    @media screen and (max-width: ${MOBILE_BREAKPOINT.width}) {
        display: block;
        & > div {
            padding: 3rem 0rem;
            border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05);
            &:nth-last-child(1) {
                border-bottom: none;
            }
        }
    }
    img {
        border: 0.5rem solid ${(props) => props.theme.colors.primary};
        margin-bottom: 0.75rem;
        display: block;
        width: 100%;
        height: auto;
        @media screen and (min-width: ${(props) => props.theme.smWidth}) {
            display: none;
        }
    }
`

export const Container = styled.div`
    padding: 5rem 0rem;
    img {
        display: block;
        margin: 0 auto;
        max-width: 40rem;
        height: auto;
        @media screen and (max-width: 50rem) {
            width: 100%;
        }
    }
    h3 {
        text-align: center;
        padding-bottom: 0.5rem;
        margin-bottom: 2.5rem;
        border-bottom: 0.1rem solid ${(props) => props.theme.colors.primary};
    }
    h4 {
        text-align: center;
        font-size: 2.2rem;
    }
    .anchor {
        display: block;
        visibility: hidden;
        position: relative;
        top: -6rem;
    }
`

export const MenuSelector = styled(GS.FlexEven)`
    & > div {
        flex: 1;
    }
`

export const Nav = styled(GS.FlexEven)`
    background: #eee;
    position: fixed;
    width: 100%;
    height: auto;
    padding: 3.5rem ${(props) => props.theme.padding};
    bottom: 0;
    left: 0;
    z-index: 10;
    .option {
        position: absolute;
        top: -1rem;
        font-size: 1.4rem;
        background: #eee;
        padding: 0.5rem 2rem;
        border-radius: 1rem;
        font-family: ${(props) => props.theme.fonts.header};
        color: #444;
        display: none;
        &.show {
            display: block;
        }
    }
    .container {
        overflow-x: auto;
        white-space: nowrap;
        text-align: center;
        a {
            padding-right: 3.5rem;
            display: inline-block;
            text-decoration: none;
            font-family: ${(props) => props.theme.fonts.header};
            &:hover {
                color: ${(props) => props.theme.colors.primary};
            }
            img {
                display: block;
                margin: 0 auto;
                border-radius: 50%;
                margin: 1rem auto;
                max-width: 5rem;
                height: auto;
                transition: all 0.25s ease-in-out;
                transform: scale(1);
                opacity: 0.5;
                &:hover {
                    opacity: 1;
                    cursor: pointer;
                    transform: scale(1.1);
                }
            }
        }
        & > div {
            display: inline-block;
            flex: 1;
            &:hover {
                cursor: pointer;
            }
        }
    }
`
