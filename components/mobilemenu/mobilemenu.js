import * as S from './mobilemenu.styles';
import * as GS from '../../styles/global';
import { LINKS } from '../../data/links';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Fade from 'react-reveal/Fade';

export default function MobileMenu({ setMenu }) {
	const router = useRouter();
	return (
		<AnimatePresence>
			<S.Background
				variants={GS.fadeInTop}
				initial="initial"
				animate="animate"
				exit="exit"
				onClick={() => setMenu(false)}
			>
				<S.Menu>
					{LINKS.map((link) => {
						return (
							<Fade top cascade key={link.title}>
								<li>
									<Link href={link.href}>
										<a className={router.pathname === link.href ? 'active' : undefined}>
											{link.title}
										</a>
									</Link>
								</li>
							</Fade>
						);
					})}
				</S.Menu>
			</S.Background>
		</AnimatePresence>
	);
}
