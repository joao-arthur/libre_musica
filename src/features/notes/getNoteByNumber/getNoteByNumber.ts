import { note, noteType } from '../note';

export function getNoteByNumber(number: noteType['number']) {
    const foundNote = Object.values(note).find(
        noteValue => noteValue.number === number,
    );
    return foundNote;
}
