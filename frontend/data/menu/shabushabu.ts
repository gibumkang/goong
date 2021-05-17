import {GOONG_APPETIZERS as APPETIZERS} from './goong'
import CHICKEN from './categories/chicken'
import PORK from './categories/pork'
import SEAFOOD from './categories/seafood'
import DESSERT from './categories/dessert'
import {main} from './types'

const SHABUSHABU_APPETIZERS: Function = () =>  {
    const filtered = [
        {
            korean_name: '계란찜', 
            english_name: 'Steamed Egg',
            limit: false,
        },
        {
            korean_name: '치킨에그롤',
            english_name: 'Chicken Eggroll',
            limit: false,
        },
        {
            korean_name: '김치전',
            english_name: 'Kimchi Pancake',
            limit: false,
        },
        {
            korean_name: '고구마 맛탕',
            english_name: 'Sugar Glazed Sweet Potato Wedges',
            limit: false,
        },
        {
            korean_name: '잡채',
            english_name: 'Japchae (Glass noodles)',
            limit: false,
        },
        {
            korean_name: '마늘, 고추와 쌈',
            english_name: 'Fresh Garlic and Jalapeño',
            limit: false,
        },
        {
            korean_name: '스리라차소스',
            english_name: 'Sriracha Sauce',
            limit: false,
        },
        {
            korean_name: '갈릭에다마메 or 에다마메',
            english_name: 'Garlic Edamame or Edamame',
            limit: false,
        },
    ].filter(menu => menu.omit != 'shabushabu')
    return filtered
}

export const SHABUSHABU:main = {
    beef: [
        {
            korean_name: '죽',
            english_name: 'Porridge',
            limit: false,
        },
        {
            korean_name: '모듬야채',
            english_name: 'Vegetables',
            limit: false,
        },
        {
            korean_name: '차돌박이',
            english_name: 'Angus Beef Brisket',
            limit: false,
        },
        {
            korean_name: "우삼겹",
            english_name: "Angus Beef Short Plate",
            limit: false,
        },
        {
            korean_name: '꽃등심',
            english_name: 'Angus Ribeye Steak',
            image: '/ribeye-steak.jpg',
            limit: false,
        },
        {
            korean_name: '뉴욕스테이크',
            english_name: 'Angus NY Steak',
            limit: false,
        },
        {
            korean_name: '낙엽살',
            english_name: 'Angus Sliced Top Blade',
            limit: false,
        },
    ],
    appetizers: SHABUSHABU_APPETIZERS(),
    dessert: DESSERT,
}
        