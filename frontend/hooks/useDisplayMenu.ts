import {STANDARD as standard} from '../data/menu/standard'
import {GOONG as goong} from '../data/menu/goong'
import {PREMIUM as premium} from '../data/menu/premium'
import {SHABUSHABU as shabushabu} from '../data/menu/shabushabu'

export default function useDisplayMenu(){
    const menu = [standard, goong, premium, shabushabu]
    console.log(menu)

    return {
        standard, goong, premium, shabushabu
    }
}