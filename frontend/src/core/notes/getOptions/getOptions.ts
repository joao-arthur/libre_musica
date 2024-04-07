import { Accident } from "../accident";
import { getNoteName } from "../getNoteName/getNoteName";
import { note } from "../note";

export function getOptions(selectedAccident?: Accident) {
    return Object.values(note).map((currentNote) => ({
        label: getNoteName(currentNote, "standard", selectedAccident),
        value: currentNote.number,
    }));
}
