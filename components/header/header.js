import Head from 'next/head'
import * as S from './header.styles'
import * as GS from '../../styles/global'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { LINKS } from '../../data/links'
import { useRouter } from 'next/router'
import { CgMenuRound, CgCloseO } from 'react-icons/cg'
import MobileMenu from '../mobilemenu'
import { useState, useEffect } from 'react'
import useWindowSize from '../../hooks/useWindowSize'

const Header = ({ toggleDarkMode, darkMode, headerMenu }) => {
    const router = useRouter()
    const title = 'Goong Korean BBQ'
    const [page, setPage] = useState(null)
    const [init, setInit] = useState(false)
    const size = useWindowSize()
    const [menu, setMenu] = useState(false)
    function toggleMenu() {
        setMenu((prevMenu) => !prevMenu)
    }

    useEffect(() => {
        const title = window.location.href
            .split('/')
            .pop()
            .replace('-', ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase())
        setPage(title)
    })

    useEffect(() => {
        setInit(true)
    }, [init])

    const setLang = (selection) => {
        switch (selection) {
            case 'aycemenu':
                return 'all-you-can-eat menu'
                break
            case 'mainmenu':
                return 'a la carte menu'
                break
            case 'ssmenu':
                return 'Shabu Shabu menu'
                break
            default:
                break
        }
    }
    return (
        <>
            <Head>
                <title>
                    {title} {page && `- ${page}`}
                </title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    name="description"
                    content="Goong Las Vegas is an authentic Korean BBQ restaurant with a touch of modern delicacy, offering delicious à la carte or all-you-can-eat barbeque and hotpot selections."
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Quattrocento&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/favicon.ico"
                />
                {init === true && (
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
							  window.dataLayer = window.dataLayer || [];
							  function gtag(){dataLayer.push(arguments);}
							  gtag('js', new Date());
							  gtag('config', 'UA-190905897-1');
							`,
                        }}
                    />
                )}
            </Head>
            {menu && <MobileMenu setMenu={setMenu} />}
            <S.Nav>
                <GS.MaxContainer>
                    <S.Header
                        variants={GS.headerAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <S.Title>
                            <Link href="/">
                                <a>
                                    <img
                                        src="/goong.png"
                                        alt="Goong Las Vegas"
                                        width="200"
                                        height="84"
                                    />
                                </a>
                            </Link>
                        </S.Title>
                        <motion.div
                            variants={GS.navigation}
                            initial="initial"
                            animate="animate"
                        >
                            <S.Navigation>
                                <ul>
                                    {size.width > 800 ? (
                                        LINKS.map((link) => {
                                            return (
                                                <li key={link.title}>
                                                    <Link href={link.href}>
                                                        <a
                                                            className={
                                                                router.pathname ===
                                                                link.href
                                                                    ? 'active'
                                                                    : undefined
                                                            }
                                                        >
                                                            {link.title}
                                                            {/* {router.pathname === link.href && (
																<GS.Block
																	bottom={'-.45rem'}
																	width={'2rem'}
																	height={'.2rem'}
																/>
															)} */}
                                                        </a>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    ) : (
                                        <motion.li
                                            variants={GS.fadeInTop}
                                            initial="initial"
                                            animate="animate"
                                        >
                                            {menu ? (
                                                <motion.span
                                                    variants={GS.fadeInTop}
                                                    initial="initial"
                                                    animate="animate"
                                                >
                                                    <CgCloseO
                                                        className="menu"
                                                        onClick={() =>
                                                            toggleMenu()
                                                        }
                                                    />
                                                </motion.span>
                                            ) : (
                                                <AnimatePresence>
                                                    <motion.span
                                                        variants={GS.fadeInTop}
                                                        initial="initial"
                                                        animate="animate"
                                                        exit="exit"
                                                    >
                                                        <CgMenuRound
                                                            className="menu"
                                                            onClick={() =>
                                                                toggleMenu()
                                                            }
                                                        />
                                                    </motion.span>
                                                </AnimatePresence>
                                            )}
                                        </motion.li>
                                    )}
                                </ul>
                            </S.Navigation>
                        </motion.div>
                    </S.Header>
                </GS.MaxContainer>
            </S.Nav>
        </>
    )
}

export default Header
