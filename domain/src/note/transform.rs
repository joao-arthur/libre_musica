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
    let base_chromatic = base_note_to_chromatic(&theorical_note.base).to_u8() as i8;
    let modifier = theorical_note.accident.to_i8();
    let mut result = base_chromatic + modifier;
    if result < 0 {
        result += 12;
    }
    if result > 11 {
        result -= 12;
    }
    ChromaticNote::try_from_u8(result as u8).unwrap() 
}

#[cfg(test)]
mod tests {
    use crate::{accident::Accident, note::{chromatic::ChromaticNote, theorical::TheoricalNote, transform::theorical_note_to_chromatic}};

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
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::C, accident: Accident::DoubleFlat }), ChromaticNote::_10);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::C, accident: Accident::Flat }), ChromaticNote::_11);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::C, accident: Accident::Natural }), ChromaticNote::_0);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::C, accident: Accident::Sharp }), ChromaticNote::_1);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::C, accident: Accident::DoubleSharp }), ChromaticNote::_2);
    }

    #[test]
    fn theorical_d_to_chromatic() {
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::D, accident: Accident::DoubleFlat }), ChromaticNote::_0);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::D, accident: Accident::Flat }), ChromaticNote::_1);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::D, accident: Accident::Natural }), ChromaticNote::_2);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::D, accident: Accident::Sharp }), ChromaticNote::_3);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::D, accident: Accident::DoubleSharp }), ChromaticNote::_4);
    }

    #[test]
    fn theorical_e_to_chromatic() {
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::E, accident: Accident::DoubleFlat }), ChromaticNote::_2);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::E, accident: Accident::Flat }), ChromaticNote::_3);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::E, accident: Accident::Natural }), ChromaticNote::_4);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::E, accident: Accident::Sharp }), ChromaticNote::_5);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::E, accident: Accident::DoubleSharp }), ChromaticNote::_6);
    }

    #[test]
    fn theorical_f_to_chromatic() {
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::F, accident: Accident::DoubleFlat }), ChromaticNote::_3);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::F, accident: Accident::Flat }), ChromaticNote::_4);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::F, accident: Accident::Natural }), ChromaticNote::_5);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::F, accident: Accident::Sharp }), ChromaticNote::_6);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::F, accident: Accident::DoubleSharp }), ChromaticNote::_7);
    }

    #[test]
    fn theorical_g_to_chromatic() {
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::G, accident: Accident::DoubleFlat }), ChromaticNote::_5);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::G, accident: Accident::Flat }), ChromaticNote::_6);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::G, accident: Accident::Natural }), ChromaticNote::_7);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::G, accident: Accident::Sharp }), ChromaticNote::_8);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::G, accident: Accident::DoubleSharp }), ChromaticNote::_9);
    }

    #[test]
    fn theorical_a_to_chromatic() {
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::A, accident: Accident::DoubleFlat }), ChromaticNote::_7);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::A, accident: Accident::Flat }), ChromaticNote::_8);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::A, accident: Accident::Natural }), ChromaticNote::_9);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::A, accident: Accident::Sharp }), ChromaticNote::_10);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::A, accident: Accident::DoubleSharp }), ChromaticNote::_11);
    }

    #[test]
    fn theorical_b_to_chromatic() {
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::B, accident: Accident::DoubleFlat }), ChromaticNote::_9);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::B, accident: Accident::Flat }), ChromaticNote::_10);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::B, accident: Accident::Natural }), ChromaticNote::_11);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::B, accident: Accident::Sharp }), ChromaticNote::_0);
        assert_eq!(theorical_note_to_chromatic(&TheoricalNote { base: BaseNote::B, accident: Accident::DoubleSharp }), ChromaticNote::_1);
    }
}
