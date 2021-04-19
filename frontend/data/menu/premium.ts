import {GOONG_APPETIZERS as APPETIZERS} from './goong'
import CHICKEN from './categories/chicken'
import {GOONG_PORK as PORK} from './goong'
import {GOONG_SEAFOOD as SEAFOOD} from './goong'
import DESSERT from './categories/dessert'
import {main} from './types'

export const PREMIUM:main = {
    beef: [
        {
            korean_name: '차돌박이',
            english_name: 'Certified Beef Brisket',
            limit: false,
        },
        {
            korean_name: '양념 차돌박이',
            english_name: "Marinated Angus Brisket",
            limit: false,
        },
        {
            korean_name: '와규 차돌박이',
            english_name: "Wagyu Brisket",
            limit: true,
        },
        {
            korean_name: "토시살",
            english_name: "Prime Hanging Tender",
            limit: true,
        },
        {
            korean_name: "낙엽살",
            english_name: "Sliced Prime Top Blade",
            limit: false,
        },
        {
            korean_name: '뉴욕스테이크',
            english_name: 'Angus NY Steak',
            limit: true,
        },
        {
            korean_name: '꽃등심',
            english_name: 'Certified Angus Ribeye Steak',
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
            limit: false,
        },
        {
            korean_name: 'LA갈비',
            english_name: 'LA Beef Short Ribs',
            limit: true,
        },
        {
            korean_name: '대창',
            english_name: 'Large Intestine',
            limit: false,
        },
    ],
    appetizers: [
        {
            korean_name: '물냉면/비빔냉면/동치미',
            english_name: 'Cold Noodles',
            limit: true,
        },
        {
            korean_name: '새우튀김',
            english_name: 'Shrimp Tempura',
            limit: false,
        },
        {
            korean_name: '오징어튀김',
            english_name: 'Fried Calamari Rings',
            limit: false,
        },
        ...APPETIZERS
    ],
    chicken: CHICKEN,
    pork: PORK,
    seafood: [
        {
            korean_name: '',
            english_name: 'Black Tiger Shrimp (2 PCS)',
            limit: true,    
        },
        ...SEAFOOD
    ],
    dessert: DESSERT,
}