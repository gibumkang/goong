import * as GS from '../styles/global'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import useDisplayMenu from '../hooks/useDisplayMenu'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BsInfoCircle } from 'react-icons/bs'
import * as S from '../components/menu/menu.styles'

const Menu = () => {
    const { mainmenu } = useDisplayMenu()
    return (
        <>
            <Fade>
                <S.MenuNavigation>
                    <h2>Please select a menu</h2>
                </S.MenuNavigation>
            </Fade>
            <GS.MaxContainer>
                <S.Grid>
                    {mainmenu.map((content) => {
                        return (
                            <S.MenuSelector key={content.info}>
                                <div>
                                    <Link href={content.link}>
                                        <a>
                                            <img src={content.image} />
                                        </a>
                                    </Link>
                                </div>
                                <div>
                                    <h2>
                                        {content.english_name}{' '}
                                        <span>{content.korean_name}</span>
                                    </h2>
                                    <Link href={content.link}>
                                        <a className="see-menu">
                                            {content.english_name}{' '}
                                            <MdKeyboardArrowRight />
                                        </a>
                                    </Link>
                                    <Accordion>
                                        <Accordion.Toggle
                                            as={Button}
                                            variant="link"
                                            eventKey="0"
                                        >
                                            <BsInfoCircle /> learn more
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <p>{content.info}</p>
                                        </Accordion.Collapse>
                                    </Accordion>
                                </div>
                            </S.MenuSelector>
                        )
                    })}
                </S.Grid>
            </GS.MaxContainer>
        </>
    )
}

export default Menu
