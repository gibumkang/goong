import Link from 'next/link'
import * as GS from '../../styles/global'
import * as S from './footer.styles'
import { LINKS } from '../../data/links'
import { NextRouter, useRouter } from 'next/router'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import React, { useState } from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    const router = useRouter()
    return (
        <>
            <S.Pattern>
                <div className="pattern" />
            </S.Pattern>
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
                            <p className="disclaimer">
                                &copy; {year} Goong Las Vegas. All Rights
                                Reserved.
                                <br />
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

export default Footer
