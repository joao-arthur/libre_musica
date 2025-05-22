use crate::note::chromatic::ChromaticNote;

pub fn build_fretboard(open_note: ChromaticNote, frets: u8) -> Vec<ChromaticNote> {
    let open_note_index = open_note.to_u8();

    (open_note_index..(open_note_index + frets))
        .map(|note_index| ChromaticNote::try_from_u8(note_index % 12))
        .filter_map(|note| note)
        .collect()
}

#[cfg(test)]
mod tests {
    use crate::note::chromatic::{ChromaticNote, vec_of_slice_u8};

    use super::build_fretboard;

    #[test]
    fn test_make_freboard() {
        assert_eq!(
            build_fretboard(ChromaticNote::_0, 30),
            vec_of_slice_u8([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1,
                2, 3, 4, 5
            ])
        );
        assert_eq!(build_fretboard(ChromaticNote::_7, 6), vec_of_slice_u8([7, 8, 9, 10, 11, 0]));
    }
}
