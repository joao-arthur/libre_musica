use crate::note::Note;

pub fn make_fretboard(open_note: Note, frets: u8) -> Vec<Note> {
    let open_note_index = open_note.to_u8();

    (open_note_index..(open_note_index + frets))
        .map(|note_index| Note::from_u8(note_index % 12).unwrap())
        .collect()
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::note::Note;

    #[test]
    fn test_make_freboard() {
        assert_eq!(
            make_fretboard(Note::C, 30),
            [
                Note::C,
                Note::CD,
                Note::D,
                Note::DE,
                Note::E,
                Note::F,
                Note::FG,
                Note::G,
                Note::GA,
                Note::A,
                Note::AB,
                Note::B,
                Note::C,
                Note::CD,
                Note::D,
                Note::DE,
                Note::E,
                Note::F,
                Note::FG,
                Note::G,
                Note::GA,
                Note::A,
                Note::AB,
                Note::B,
                Note::C,
                Note::CD,
                Note::D,
                Note::DE,
                Note::E,
                Note::F,
            ]
        );
        assert_eq!(
            make_fretboard(Note::G, 6),
            [Note::G, Note::GA, Note::A, Note::AB, Note::B, Note::C,]
        );
    }
}
