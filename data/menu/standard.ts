import APPETIZERS from './categories/appetizers'
import CHICKEN from './categories/chicken'
import PORK from './categories/pork'
import SEAFOOD from './categories/seafood'
import DESSERT from './categories/dessert'
import {main} from './types'

export const STANDARD:main = {
    beef: [
        {
            korean_name: '차돌박이',
            english_name: 'Angus Beef Brisket',
            image: '/brisket.jpg',
            limit: false,
        },
        {
            korean_name: '양념 차돌박이',
            english_name: "Marinated Angus Brisket",
            limit: false,
        },
        {
            korean_name: "우삼겹",
            english_name: "Angus Beef Short Plate",
            limit: false,
        },
        {
            korean_name: '뉴욕스테이크',
            english_name: 'Angus NY Steak',
            limit: true,
        },
        {
            korean_name: '불고기',
            english_name: 'Bulgogi (Marinated Sliced Rib-Eye)',
            image: '/bulgogi.jpg',
            limit: false,
        },
        {
            korean_name: '늑간살',
            english_name: 'Marinated Finger Short Ribs',
            limit: false,
        },
        {
            korean_name: 'LA갈비',
            english_name: 'LA Beef Short Ribs',
            image: 'la-short-ribs.jpg',
            limit: true,
        },
    ],
    appetizers: [...APPETIZERS, 
        {
            korean_name: '에다마메',
            english_name: 'Edamame',
            limit: false,
        },
    ],
    chicken: CHICKEN,
    pork: PORK,
    seafood: SEAFOOD,
    dessert: DESSERT,
}
        