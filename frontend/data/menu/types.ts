interface menu {
    korean_name: string
    english_name: string
    image?: string
    omit?: string
    limit: boolean
}

export interface main {
    beef: menu[]
    appetizers: menu[]
    chicken?: menu[]
    pork?: menu[]
    seafood?: menu[]
    dessert: menu[]
    map?: Function
    forEach?: Function
}

export default menu;