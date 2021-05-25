import Link from 'next/link'
import * as GS from '../../styles/global'
import * as S from './footer.styles'
import { LINKS } from '../../data/links'
import { NextRouter, useRouter } from 'next/router'
import styled from 'styled-components';
import { FaPhoneSquareAlt } from 'react-icons/fa'
import React, { useState } from 'react'

interface Props {
    darkMode: string
}

interface Data {
    email: string
    street_address: string
    city_address: string
    phone: string
    logo: {
        url: string
        caption: string
    }
}

const Footer: React.FC<Props> = () => {
    const year: number = new Date().getFullYear()
    const [footer, setFooter] = useState<Data | null>(null)
    const router: NextRouter = useRouter()
    return (
        <>
            <S.Pattern><div className="pattern" /></S.Pattern>
            <Instagram>
                <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                <div className="elfsight-app-b8cf707b-469e-4953-a4c0-abfc05c63d9b"></div>
            </Instagram>
            <S.FooterBg>
                <GS.MaxContainer>
                    <S.FooterInformation>
                        <div>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <img
                                                height="60"
                                                width="100"
                                                loading="lazy"
                                                src="/goong.png"
                                                alt="Las Vegas Goong"
                                            />
                                        </a>
                                    </Link>
                                </li>
                                <li>7729 S Rainbow Blvd #5</li>
                                <li>Las Vegas, NV 89139</li>
                                <li className="phone">
                                    <Link href="tel:7029799118">
                                        <a>
                                            <FaPhoneSquareAlt /> 702.979.9118
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                {LINKS.map((link) => {
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
                                                </a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                            <GS.HR />
                            {/* <h3>We make websites simple.</h3> */}
                            <p className="disclaimer">
                                &copy; ${year} Goong Las Vegas. All Rights
                                Reserved.<br />
                                <Link href="https://studiokanvas.com">
                                    <a>Website by Studio Kanvas</a>
                                </Link>
                            </p>
                        </div>
                    </S.FooterInformation>
                </GS.MaxContainer>
            </S.FooterBg>
        </>
    )
}

const Instagram = styled.div`
    margin: 0 auto;
`

export default Footer
