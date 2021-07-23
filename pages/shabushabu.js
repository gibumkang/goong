import * as GS from '../styles/global'
import { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import useDisplayMenu from '../hooks/useDisplayMenu'
import { RiErrorWarningLine } from 'react-icons/ri'
import * as S from '../components/menu/menu.styles'
import MenuComponent from '../components/menu'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const Ayce = () => {
    const [show, setShow] = useState(false)
    const { shabushabu, ayce } = useDisplayMenu()
    const [menu, setMenu] = useState(shabushabu)

    return (
        <>
            <Fade>
                <S.MenuNavigation>
                    <div className="back-button">
                        <Link href="/menu">
                            <a>
                                <MdKeyboardArrowLeft /> Return to Main Menu
                            </a>
                        </Link>
                    </div>
                    <h2>You are viewing the Shabu Shabu menu</h2>
                </S.MenuNavigation>
            </Fade>
            <GS.MaxContainer>
                <GS.MidContainer>
                    <S.RulesButton onClick={() => setShow(true)}>
                        <RiErrorWarningLine /> Click here for AYCE rules
                    </S.RulesButton>
                </GS.MidContainer>
                <MenuComponent selection={menu} />
            </GS.MaxContainer>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2>All you can eat rules</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ol>
                        <li>
                            Kids less than 40 inches height eat for free |
                            between 40-50 inches will be charged kids price
                        </li>
                        <li>90 min time limit</li>
                        <li>Entire party must order from the same AYCE menu</li>
                        <li>
                            Without exception, all guest who are seated at a
                            table will be charged in foll
                        </li>
                        <li>Our AYCE food is for dine-in only. No for to-go</li>
                        <li>
                            All food must be consumed at the restaurant;
                            Leftovers can't be taken home
                        </li>
                        <li>
                            Extra charges will be applied to unfinished food
                        </li>
                        <li>Maximum 4 credit cards per party or table</li>
                        <li>
                            18% gratuity is included for parties of 8 or more
                        </li>
                    </ol>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => setShow(false)}
                    >
                        OK, I understand
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Ayce
