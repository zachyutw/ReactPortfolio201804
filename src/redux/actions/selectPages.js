export const SELECTED = "selectPages/SELECTED";
export const DISPLAYNAV = "selectPages/DISPAYNAV";

export function select(selectPage) {
   
    return {
        type: SELECTED,
        selectPage
    }
}

export function displayNav(display){
    return {
        type: DISPLAYNAV,
        display
    }
}