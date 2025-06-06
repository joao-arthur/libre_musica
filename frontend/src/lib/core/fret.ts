export function fretTemperedSize(scaleLength: number, current: number) {
      const prev = Math.pow(2, -(current - 1) / 12);
      const curr = Math.pow(2, -current / 12);
      const spacing = scaleLength * (prev - curr);
      return spacing;
}


export function fretTemperedDistanceFromNut(scaleLength: number, current: number) {
    return scaleLength * (1 - Math.pow(2, -(current+1) / 12));
}

export function fretLinearSize(scaleLength: number, fretNumber: number) {
    return 1;
}
