import APPETIZERS from './categories/appetizers'
import CHICKEN from './categories/chicken'
import PORK from './categories/pork'
import SEAFOOD from './categories/seafood'
import DESSERT from './categories/dessert'
import menu, {main} from './types'

export const GOONG_APPETIZERS:menu[] = [
    {
        korean_name: '만두튀김',
        english_name: 'Fried Dumpling',
        limit: false,
    },
    {
        korean_name: '김치 볶음밥/불고기 볶음밥/치킨 볶음밥',
        english_name: 'Choice of fried rice (kimchi/bulgogi/chicken)',
        omit: 'shabushabu',
        limit: true,
    },
    {
        korean_name: '콘치즈',
        english_name: 'Corn Cheese',
        limit: true,
    },
    {
        korean_name: '떡보쌈',
        english_name: 'Rice Paper',
        limit: false,
    },
    ...APPETIZERS, 
    {
        korean_name: '쌈무',
        english_name: 'Pickled Radish',
        omit: 'shabushabu',
        limit: false,
    },
    {
        korean_name: '갈릭에다마메 & 에다마메',
        english_name: 'Garlic Edamame & Edamame',
        limit: false,
    },
]

export const GOONG_PORK:menu[] = [
    ...PORK,
    {
        korean_name: '항정살',
        english_name: 'Pork Jowl',
        image: '/pork-jowl.jpg',
        limit: false,
    },
]

export const GOONG_SEAFOOD:menu[] = [
    ...SEAFOOD,
    {
        korean_name: '갈릭 버터 새우 구이',
        english_name: 'Garlic Butter Shrimp',
        image: '/shrimp.jpg',
        limit: false,
    }
]

export const GOONG:main = {
    beef: [
        {
            korean_name: '차돌박이',
            english_name: 'Certified Beef Brisket',
            image: '/brisket.jpg',
            limit: false,
        },
        {
            korean_name: '양념 차돌박이',
            english_name: "Marinated Angus Brisket",
            limit: false,
        },
        {
            korean_name: "토시살",
            english_name: "Prime Hanging Tender",
            limit: true,
        },
        {
            korean_name: '뉴욕스테이크',
            english_name: 'Angus NY Steak',
            limit: true,
        },
        {
            korean_name: '꽃등심',
            english_name: 'Certified Angus Ribeye Steak',
            image: '/ribeye-steak.jpg',
            limit: true,
        },
        {
            korean_name: '혀밑구이',
            english_name: 'Beef Tongue with Lemon Salt Sauce',
            limit: false,
        },
        {
            korean_name: '혀밑구이',
            english_name: 'Beef Tongue with Lemon Salt Sauce',
            limit: false,
        },
        {
            korean_name: "우삼겹",
            english_name: "Angus Beef Short Plate",
            limit: false,
        },
        {
            korean_name: "꽃살",
            english_name: "Certified Angus Boneless Short Ribs",
            image: '/boneless-short-ribs.jpg',
            limit: true,
        },
        {
            korean_name: "안심주물럭",
            english_name: "Salted Medallion Tender Tip",
            limit: true,
        },
        {
            korean_name: "늑간살",
            english_name: "Marinated Finger Short Ribs",
            limit: false,
        },
        {
            korean_name: '불고기',
            english_name: 'Bulgogi (Marinated Sliced Rib-Eye)',
            image: '/bulgogi.jpg',
            limit: false,
        },
        {
            korean_name: 'LA갈비',
            english_name: 'LA Beef Short Ribs',
            image: 'la-short-ribs.jpg',
            limit: true,
        },
        {
            korean_name: '대창',
            english_name: 'Large Intestine',
            limit: false,
        },
    ],
    appetizers: GOONG_APPETIZERS,
    chicken: CHICKEN,
    pork: GOONG_PORK,
    seafood: GOONG_SEAFOOD,
    dessert: DESSERT,
}