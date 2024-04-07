import { scale, ScaleName } from "../scale";

export function getScaleNoteNumbers(scaleKind: ScaleName) {
    const currentScaleIntervals = scale[scaleKind].intervals;
    return [0].concat(
        currentScaleIntervals.map((_, index) =>
            currentScaleIntervals
                .slice(0, index + 1)
                .reduce((accumulator, current) => accumulator + current, 0)
        ),
    );
}
