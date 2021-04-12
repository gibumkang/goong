import * as GS from '../styles/global'
import styled from 'styled-components'
import Link from 'next/link'

export default function About() {
    return (
        <>
            <GS.BGVideo>
                <div className="intro">
                    <h1>Goong Las Vegas</h1>
                    <p>
                        Premium Korean BBQ restaurant located in Southwest Las
                        Vegas, now serving AYCE for dinner.
                    </p>
                    <Link href="/menu" passHref>
                        <GS.MainButton>See the Menu</GS.MainButton>
                    </Link>
                </div>
                <video src="/intro.m4v" autoPlay muted loop />
                <div className="overlay" />
            </GS.BGVideo>
        </>
    )
}
