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
            &:nth-of-type(2n) {
                border-top: 0.1rem solid rgba(0, 0, 0, 0.05);
                border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05);
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
        color: #555;
        font-size: 2.7rem;
        text-align: center;
        border-top: 0.25rem dotted #ccc;
        border-bottom: 0.25rem dotted #ccc;
    }
    .anchor {
        display: block;
        visibility: hidden;
        position: relative;
        top: -6rem;
    }
`

export const Nav = styled(GS.FlexEven)`
    background: #f3f3f3;
    position: fixed;
    width: 100%;
    height: auto;
    padding: 3.5rem 1.5rem;
    bottom: 0;
    left: 0;
    z-index: 10;
    .option {
        position: absolute;
        top: -1rem;
        font-size: 1.4rem;
        background: #f3f3f3;
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
            padding-right: 2rem;
            display: inline-block;
            text-decoration: none;
            font-family: ${(props) => props.theme.fonts.header};
            &:hover {
                font-weight: bold;
                color: #000;
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
                border: 0.1rem solid #999;
                &:hover {
                    opacity: 1;
                    cursor: pointer;
                    transform: scale(1.1);
                    border: 0.2rem solid
                        ${(props) => props.theme.colors.primary};
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

export const MenuNavigation = styled.div`
    text-align: center;
    padding: 0.5rem ${(props) => props.theme.padding};
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    border-bottom: 0.1rem solid #999;
    background: #fff;
    z-index: 2;
    h2 {
        font-size: 2rem;
    }
    a {
        margin-top: 1rem;
        display: inline-block;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        border: 0.1rem solid #ccc;
        border-radius: 0.5rem;
        color: #666;
        text-decoration: none;
        svg {
            position: relative;
            bottom: 0.1rem;
        }
    }
`

export const RulesButton = styled(GS.MainButton)`
    max-width: 25rem;
    text-align: center;
    margin: 2.5rem auto;
    display: block;
    svg {
        position: relative;
        bottom: 0.125rem;
    }
`

export const Grid = styled(GS.GridTwo)`
    margin: 2.5rem auto;
    @media screen and (max-width: ${(props) => props.theme.smWidth}) {
        margin: 0 auto;
    }
`

export const MenuSelector = styled(GS.FlexEven)`
    border: 0.1rem solid #fff;
    background: #fff;
    transition: all 0.25s ease-in-out;
    div:nth-child(1) {
        flex: 1.5;
        img {
            width: 100%;
            height: auto;
            display: block;
            transition: all 0.25s ease-in-out;
            &:hover {
                transform: scale(1.025);
            }
        }
    }
    div:nth-child(2) {
        flex: 2;
        text-decoration: none;
        padding: ${(props) => props.theme.padding};
        h2 {
            font-size: 2rem;
            padding-bottom: 0;
            span {
                color: #666;
                font-size: 1.3rem;
                white-space: nowrap;
            }
        }
        p {
            font-size: 1.4rem;
            margin-bottom: 0;
            svg {
                position: relative;
                bottom: 0.2rem;
            }
        }
        .see-menu {
            text-transform: uppercase;
            text-decoration: none;
            display: inline-block;
            border-bottom: 0.25rem solid
                ${(props) => props.theme.colors.primary};
            font-size: 1.4rem;
            font-weight: bold;
            color: ${(props) => props.theme.colors.primary};
            svg {
                position: relative;
                bottom: 0.15rem;
            }
        }
        @media screen and (max-width: ${(props) => props.theme.smWidth}) {
            padding: 2rem 1rem 2rem 0.5rem;
        }
    }
    &:hover {
        background: #f9f8f4;
        border: 0.1rem solid ${(props) => props.theme.colors.primary};
    }
`

export const Rules = styled.div`
    margin: 0 auto;
    h3,
    .button {
        text-align: center;
    }
    .button {
        border: 0.1rem solid #ccc;
        max-width: 20rem;
        margin: 0 auto;
        padding: 0.5rem 0.25rem;
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
            padding: 0.5rem 0rem;
            font-size: 1.4rem;
        }
    }
    .disclaimer {
        text-align: center;
        font-size: 1.2rem;
        padding: 1rem 3rem;
        opacity: 0.7;
    }
`
