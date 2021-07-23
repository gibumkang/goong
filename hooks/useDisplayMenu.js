import { STANDARD as standard } from '../data/menu/ayce/menu-standard'
import { GOONG as goong } from '../data/menu/ayce/menu-goong'
import { PREMIUM as premium } from '../data/menu/ayce/menu-premium'
import { AYCE as ayce } from '../data/menu/ayce/menu-ayce'
import { SHABUSHABU as shabushabu } from '../data/menu/menu-shabushabu'
import { MAIN_MENU as mainmenu } from '../data/menu/menu-main'

export default function useDisplayMenu() {
    const menu = [standard, goong, premium, shabushabu]
    console.log(menu)
    return {
        standard,
        goong,
        premium,
        shabushabu,
        mainmenu,
        ayce,
    }
}
