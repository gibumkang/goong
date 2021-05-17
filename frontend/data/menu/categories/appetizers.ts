import menu from '../types'

const APPETIZERS:menu[] = [
    {
        korean_name: '김치찌개/된장찌개/순두부찌개',
        english_name: 'Kimchi Stew/Soybean Stew/Spicy Tofu',
        omit: 'shabushabu',
        limit: true,
    },
    {
        korean_name: '떡보쌈',
        english_name: 'Rice Paper',
        limit: false,
    },
    {
        korean_name: '쌈무',
        english_name: 'Pickled Radish',
        omit: 'shabushabu',
        limit: false,
    },
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
        korean_name: '모듬야채',
        english_name: 'Mushroom and Vegetables',
        omit: 'shabushabu',
        limit: false,
    },
    {
        korean_name: '마늘, 고추와 쌈',
        english_name: 'Fresh Garlic and Jalapeño',
        limit: false,
    },
    {
        korean_name: '갈릭버터소스 / 스리라차소스',
        english_name: 'Garlic Butter / Sriracha Sauce',
        limit: false,
    },
]

export default APPETIZERS;