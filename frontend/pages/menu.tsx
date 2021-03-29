import * as GS from '../styles/global';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import MenuComponent from '../components/menu';

const Menu = () => {
	const { loading, error, data } = useQuery(MENU_QUERY);
	//run the console.log below to see the errors
	//console.log(JSON.stringify(data), JSON.stringify(error, null, 2));
	console.log(data && data.menus[0]);
	return (
		<GS.MaxContainer>
			<GS.YPadding>
				<MenuComponent menu={data && data.menus[0]} />
			</GS.YPadding>
		</GS.MaxContainer>
	);
};

const MENU_QUERY = gql`
	{
		menus {
			beefs {
				english_name
				korean_name
				ayce {
					id
				}
				price
				limit
			}
			chickens {
				english_name
				korean_name
				ayce {
					id
				}
				price
				limit
			}
			porks {
				english_name
				korean_name
				ayce {
					id
				}
				price
				limit
			}
			seafoods {
				english_name
				korean_name
				ayce {
					id
				}
				price
				limit
			}
			sides {
				english_name
				korean_name
				ayce {
					id
				}
				price
				limit
			}
			desserts {
				dessert_name
			}
		}
	}
`;

export default Menu;
