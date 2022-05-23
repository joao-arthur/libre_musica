import { notes, noteType } from '../../notes';
import { getScaleNoteNumbers } from '../getScaleNoteNumbers';
import { scaleNames } from '../scale';

export function getNoteScale(note: noteType, scaleKind: scaleNames) {
    return getScaleNoteNumbers(scaleKind)
        .map(relativeNumber => relativeNumber + note.number)
        .map(
            noteRelativeNumber =>
                (noteRelativeNumber % 12) as noteType['number'],
        )
        .map(notes.getNoteByNumber);
}
