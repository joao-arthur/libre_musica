function fretPositionLog(scaleLength: number, fretNumber: number) {
    return scaleLength * (1 - Math.pow(2, -fretNumber / 12));
}

function fretPositionLinear(scaleLength: number, fretNumber: number) {
    return scaleLength * (1 - Math.pow(2, -fretNumber / 12));
}
