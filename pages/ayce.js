import * as GS from '../styles/global'
import { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import useDisplayMenu from '../hooks/useDisplayMenu'
import { RiErrorWarningLine } from 'react-icons/ri'
import { IoIosMan } from 'react-icons/io'
import { MdChildCare } from 'react-icons/md'
import * as S from '../components/menu/menu.styles'
import MenuComponent from '../components/menu'
import { BsInfoCircle } from 'react-icons/bs'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const Ayce = () => {
    const [show, setShow] = useState(false)
    const [menu, setMenu] = useState('')
    const { standard, goong, premium, ayce } = useDisplayMenu()
    const ayceMenu = [standard, goong, premium]
    const menuSelector = (selection) => {
        ayceMenu.forEach((menu) => {
            if (selection === menu.title) {
                setMenu(menu)
            }
        })
    }
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
                    <h2>
                        {!menu
                            ? 'Please select an AYCE option'
                            : `You are viewing the ${menu.title} menu`}
                    </h2>
                </S.MenuNavigation>
            </Fade>
            <GS.MaxContainer>
                <GS.MidContainer>
                    <S.RulesButton onClick={() => setShow(true)}>
                        <RiErrorWarningLine /> Click here for AYCE rules
                    </S.RulesButton>
                </GS.MidContainer>
                {!menu ? (
                    <S.Grid>
                        {ayce.map((content) => {
                            return (
                                <S.MenuSelector key={content.info}>
                                    <div>
                                        <Link href="/">
                                            <a>
                                                <img src={content.image} />
                                            </a>
                                        </Link>
                                    </div>
                                    <div>
                                        <h2>
                                            {content.english_name}{' '}
                                            <span>{content.info}</span>
                                        </h2>
                                        <p>
                                            <IoIosMan /> ${content.adultPrice}{' '}
                                            <MdChildCare /> $
                                            {content.childPrice}
                                        </p>
                                        <div
                                            className="see-menu"
                                            onClick={() =>
                                                menuSelector(
                                                    content.english_name
                                                )
                                            }
                                        >
                                            See {content.english_name} Menu
                                        </div>
                                        <Accordion>
                                            <Accordion.Toggle
                                                as={Button}
                                                variant="link"
                                                eventKey="0"
                                            >
                                                <BsInfoCircle /> learn more
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <p>{content.learnMore}</p>
                                            </Accordion.Collapse>
                                        </Accordion>
                                    </div>
                                </S.MenuSelector>
                            )
                        })}
                    </S.Grid>
                ) : (
                    <MenuComponent selection={menu} />
                )}
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
