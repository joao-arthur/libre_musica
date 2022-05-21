import { accident, accidentType } from '../accident';
import { noteType, noteNamings } from '../note';

export function getNoteName(
    note: noteType,
    noteNaming: noteNamings,
    selectedAccident?: accidentType,
) {
    return `${note.name[noteNaming]}${
        note.hasAccident ? selectedAccident || accident.sharp : ''
    }`;
}
