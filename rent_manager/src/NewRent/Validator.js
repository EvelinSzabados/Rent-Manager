export const notEmpty = (states) => {


    for (let state of states) {
        if (state == null || state == '') {
            return false;
        }

    }
    return true;

}

export const isBigger = (small, big) => {
    if (small < big) {
        return true;
    }
    return false;
}