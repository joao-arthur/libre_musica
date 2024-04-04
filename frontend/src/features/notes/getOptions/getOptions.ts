import { accidentType } from "../accident";
import { getNoteName } from "../getNoteName";
import { note } from "../note";

export function getOptions(selectedAccident?: accidentType) {
    return Object.values(note).map((currentNote) => ({
        label: getNoteName(currentNote, "standard", selectedAccident),
        value: currentNote.number,
    }));
}
