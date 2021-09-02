import { STANDARD as standard } from '../data/menu/standard'
import { GOONG as goong } from '../data/menu/goong'
import { PREMIUM as premium } from '../data/menu/premium'
import { SHABUSHABU as shabushabu } from '../data/menu/shabushabu'
import { DRINKS as drinks } from '../data/menu/drinks'
import { NONALCOHOL as nonalcohol } from '../data/menu/nonalcohol'

export default function useDisplayMenu() {
    const menu = [standard, goong, premium, shabushabu, drinks, nonalcohol]
    return {
        standard,
        goong,
        premium,
        shabushabu,
        drinks,
        nonalcohol,
    }
}
