import { STANDARD as standard } from '../data/menu/standard'
import { GOONG as goong } from '../data/menu/goong'
import { PREMIUM as premium } from '../data/menu/premium'
import { SHABUSHABU as shabushabu } from '../data/menu/shabushabu'
import { DRINKS as drinks } from '../data/menu/drinks'

export default function useDisplayMenu() {
    const menu = [standard, goong, premium, shabushabu, drinks]
    return {
        standard,
        goong,
        premium,
        shabushabu,
        drinks,
    }
}
