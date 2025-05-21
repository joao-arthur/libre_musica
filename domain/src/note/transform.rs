use crate::accident;

use super::{chromatic::ChromaticNote, theorical::{BaseNote, TheoricalNote}};

pub fn base_note_to_chromatic(base_note: &BaseNote) -> ChromaticNote {
    match base_note {
        BaseNote::C => ChromaticNote::_0,
        BaseNote::D => ChromaticNote::_2,
        BaseNote::E => ChromaticNote::_4,
        BaseNote::F => ChromaticNote::_5,
        BaseNote::G => ChromaticNote::_7,
        BaseNote::A => ChromaticNote::_9,
        BaseNote::B => ChromaticNote::_11,
    }
}

pub fn theorical_note_to_chromatic(theorical_note: &TheoricalNote) -> ChromaticNote {
    let base_chromatic = base_note_to_chromatic(&theorical_note.base).to_u8();
    let modifier = theorical_note.accident.to_u8();
    ChromaticNote::try_from_u8(base_chromatic + modifier).unwrap() 
}

#[cfg(test)]
mod tests {
    use crate::note::chromatic::ChromaticNote;

    use super::{BaseNote, base_note_to_chromatic};

    #[test]
    fn test_theorical_to_chromatic() {
        assert_eq!(base_note_to_chromatic(&BaseNote::C), ChromaticNote::_0);
        assert_eq!(base_note_to_chromatic(&BaseNote::D), ChromaticNote::_2);
        assert_eq!(base_note_to_chromatic(&BaseNote::E), ChromaticNote::_4);
        assert_eq!(base_note_to_chromatic(&BaseNote::F), ChromaticNote::_5);
        assert_eq!(base_note_to_chromatic(&BaseNote::G), ChromaticNote::_7);
        assert_eq!(base_note_to_chromatic(&BaseNote::A), ChromaticNote::_9);
        assert_eq!(base_note_to_chromatic(&BaseNote::B), ChromaticNote::_11);
    }

    #[test]
    fn test_theorical_to_chromatic() {
        assert_eq!(theorical_note_to_chromatic(&BaseNote::C), ChromaticNote::_0);
    }
}
