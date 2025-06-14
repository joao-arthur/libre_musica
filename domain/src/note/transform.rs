use crate::accident::Accident;

use super::{
    chromatic::ChromaticNote,
    theorical::{BaseNote, TheoricalNote},
};

pub fn base_note_to_chromatic(note: &BaseNote) -> ChromaticNote {
    match note {
        BaseNote::C => ChromaticNote::_0,
        BaseNote::D => ChromaticNote::_2,
        BaseNote::E => ChromaticNote::_4,
        BaseNote::F => ChromaticNote::_5,
        BaseNote::G => ChromaticNote::_7,
        BaseNote::A => ChromaticNote::_9,
        BaseNote::B => ChromaticNote::_11,
    }
}

pub fn theorical_note_to_chromatic(note: &TheoricalNote) -> ChromaticNote {
    let base_as_chromatic = base_note_to_chromatic(&note.base);
    match note.accident {
        Accident::DoubleFlat => base_as_chromatic.prev().prev(),
        Accident::Flat => base_as_chromatic.prev(),
        Accident::Natural => base_as_chromatic,
        Accident::Sharp => base_as_chromatic.next(),
        Accident::DoubleSharp => base_as_chromatic.next().next(),
    }
}

#[cfg(test)]
mod tests {
    use crate::note::{chromatic::ChromaticNote, theorical::TheoricalNote, transform::theorical_note_to_chromatic};

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
    fn theorical_c_to_chromatic() {
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("C𝄫")), ChromaticNote::_10);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("C♭")), ChromaticNote::_11);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("C")), ChromaticNote::_0);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("C♯")), ChromaticNote::_1);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("C𝄪")), ChromaticNote::_2);
    }

    #[test]
    fn theorical_d_to_chromatic() {
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("D𝄫")), ChromaticNote::_0);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("D♭")), ChromaticNote::_1);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("D")), ChromaticNote::_2);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("D♯")), ChromaticNote::_3);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("D𝄪")), ChromaticNote::_4);
    }

    #[test]
    fn theorical_e_to_chromatic() {
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("E𝄫")), ChromaticNote::_2);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("E♭")), ChromaticNote::_3);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("E")), ChromaticNote::_4);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("E♯")), ChromaticNote::_5);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("E𝄪")), ChromaticNote::_6);
    }

    #[test]
    fn theorical_f_to_chromatic() {
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("F𝄫")), ChromaticNote::_3);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("F♭")), ChromaticNote::_4);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("F")), ChromaticNote::_5);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("F♯")), ChromaticNote::_6);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("F𝄪")), ChromaticNote::_7);
    }

    #[test]
    fn theorical_g_to_chromatic() {
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("G𝄫")), ChromaticNote::_5);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("G♭")), ChromaticNote::_6);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("G")), ChromaticNote::_7);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("G♯")), ChromaticNote::_8);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("G𝄪")), ChromaticNote::_9);
    }

    #[test]
    fn theorical_a_to_chromatic() {
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("A𝄫")), ChromaticNote::_7);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("A♭")), ChromaticNote::_8);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("A")), ChromaticNote::_9);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("A♯")), ChromaticNote::_10);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("A𝄪")), ChromaticNote::_11);
    }

    #[test]
    fn theorical_b_to_chromatic() {
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("B𝄫")), ChromaticNote::_9);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("B♭")), ChromaticNote::_10);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("B")), ChromaticNote::_11);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("B♯")), ChromaticNote::_0);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote::from_str("B𝄪")), ChromaticNote::_1);
    }
}
