import {UseLocalStorage} from './UseLocalStorage'

export const useDarkMode = () => {
    const [someValue, setValue] = UseLocalStorage('darkmode', false)
    console.log(someValue)    
    return [someValue, setValue]
}
