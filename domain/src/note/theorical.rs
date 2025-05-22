use crate::accident::Accident;

#[derive(Debug, PartialEq, Clone)]
pub enum BaseNote {
    C,
    D,
    E,
    F,
    G,
    A,
    B,
}

impl BaseNote {
    pub fn to_u8(&self) -> u8 {
        match self {
            BaseNote::C => 0,
            BaseNote::D => 1,
            BaseNote::E => 2,
            BaseNote::F => 3,
            BaseNote::G => 4,
            BaseNote::A => 5,
            BaseNote::B => 6,
        }
    }

    pub fn try_from_u8(num: u8) -> Option<BaseNote> {
        match num {
            0 => Some(BaseNote::C),
            1 => Some(BaseNote::D),
            2 => Some(BaseNote::E),
            3 => Some(BaseNote::F),
            4 => Some(BaseNote::G),
            5 => Some(BaseNote::A),
            6 => Some(BaseNote::B),
            _ => None,
        }
    }
}

#[derive(Debug, PartialEq, Clone)]
pub struct TheoricalNote {
    pub base: BaseNote,
    pub accident: Accident,
}

impl TheoricalNote {
    fn try_from_str(value: &str) -> Option<TheoricalNote> {
        match value {
            "C♭♭" => Some(TheoricalNote { base: BaseNote::C, accident: Accident::DoubleFlat }),
            "C♭" => Some(TheoricalNote { base: BaseNote::C, accident: Accident::Flat }),
            "C♯" => Some(TheoricalNote { base: BaseNote::C, accident: Accident::Sharp }),
            "C♯♯" => Some(TheoricalNote { base: BaseNote::C, accident: Accident::DoubleSharp }),
            "D♭♭" => Some(TheoricalNote { base: BaseNote::D, accident: Accident::DoubleFlat }),
            "D♭" => Some(TheoricalNote { base: BaseNote::D, accident: Accident::Flat }),
            "D♯" => Some(TheoricalNote { base: BaseNote::D, accident: Accident::Sharp }),
            "D♯♯" => Some(TheoricalNote { base: BaseNote::D, accident: Accident::DoubleSharp }),
            "E♭♭" => Some(TheoricalNote { base: BaseNote::E, accident: Accident::DoubleFlat }),
            "E♭" => Some(TheoricalNote { base: BaseNote::E, accident: Accident::Flat }),
            "E♯" => Some(TheoricalNote { base: BaseNote::E, accident: Accident::Sharp }),
            "E♯♯" => Some(TheoricalNote { base: BaseNote::E, accident: Accident::DoubleSharp }),
            "F♭♭" => Some(TheoricalNote { base: BaseNote::F, accident: Accident::DoubleFlat }),
            "F♭" => Some(TheoricalNote { base: BaseNote::F, accident: Accident::Flat }),
            "F♯" => Some(TheoricalNote { base: BaseNote::F, accident: Accident::Sharp }),
            "F♯♯" => Some(TheoricalNote { base: BaseNote::F, accident: Accident::DoubleSharp }),
            "G♭♭" => Some(TheoricalNote { base: BaseNote::G, accident: Accident::DoubleFlat }),
            "G♭" => Some(TheoricalNote { base: BaseNote::G, accident: Accident::Flat }),
            "G♯" => Some(TheoricalNote { base: BaseNote::G, accident: Accident::Sharp }),
            "G♯♯" => Some(TheoricalNote { base: BaseNote::G, accident: Accident::DoubleSharp }),
            "A♭♭" => Some(TheoricalNote { base: BaseNote::A, accident: Accident::DoubleFlat }),
            "A♭" => Some(TheoricalNote { base: BaseNote::A, accident: Accident::Flat }),
            "A♯" => Some(TheoricalNote { base: BaseNote::A, accident: Accident::Sharp }),
            "A♯♯" => Some(TheoricalNote { base: BaseNote::A, accident: Accident::DoubleSharp }),
            "B♭♭" => Some(TheoricalNote { base: BaseNote::B, accident: Accident::DoubleFlat }),
            "B♭" => Some(TheoricalNote { base: BaseNote::B, accident: Accident::Flat }),
            "B♯" => Some(TheoricalNote { base: BaseNote::B, accident: Accident::Sharp }),
            "B♯♯" => Some(TheoricalNote { base: BaseNote::B, accident: Accident::DoubleSharp }),
            _ => None
        } 
    }
}

pub fn vec_of_vec_u8(value: Vec<u8>) -> Vec<BaseNote> {
    value.iter().map(|num| BaseNote::try_from_u8(*num)).filter_map(|num| num).collect()
}

pub fn vec_of_slice_u8<const N: usize>(value: [u8; N]) -> Vec<BaseNote> {
    value.to_vec().iter().map(|num| BaseNote::try_from_u8(*num)).filter_map(|num| num).collect()
}

#[cfg(test)]
mod tests {
    use crate::accident::Accident;

    use super::{BaseNote,TheoricalNote, vec_of_vec_u8, vec_of_slice_u8};

    #[test]
    pub fn chromatic_note_try_from_u8() {
        assert_eq!(BaseNote::try_from_u8(0), Some(BaseNote::C));
        assert_eq!(BaseNote::try_from_u8(1), Some(BaseNote::D));
        assert_eq!(BaseNote::try_from_u8(2), Some(BaseNote::E));
        assert_eq!(BaseNote::try_from_u8(3), Some(BaseNote::F));
        assert_eq!(BaseNote::try_from_u8(4), Some(BaseNote::G));
        assert_eq!(BaseNote::try_from_u8(5), Some(BaseNote::A));
        assert_eq!(BaseNote::try_from_u8(6), Some(BaseNote::B));
    }

    #[test]
    pub fn chromatic_note_to_u8() {
        assert_eq!(BaseNote::C.to_u8(), 0);
        assert_eq!(BaseNote::D.to_u8(), 1);
        assert_eq!(BaseNote::E.to_u8(), 2);
        assert_eq!(BaseNote::F.to_u8(), 3);
        assert_eq!(BaseNote::G.to_u8(), 4);
        assert_eq!(BaseNote::A.to_u8(), 5);
        assert_eq!(BaseNote::B.to_u8(), 6);
    }

    #[test]
    fn test_from_vec() {
        assert_eq!(vec_of_vec_u8(vec![0, 1]), vec![BaseNote::C, BaseNote::D]);
        assert_eq!(vec_of_vec_u8(vec![2, 3]), vec![BaseNote::E, BaseNote::F]);
        assert_eq!(vec_of_vec_u8(vec![4, 5]), vec![BaseNote::G, BaseNote::A]);
        assert_eq!(vec_of_vec_u8(vec![6, 7]), vec![BaseNote::B]);
        assert_eq!(vec_of_vec_u8(vec![8, 9]), vec![]);
    }

    #[test]
    fn test_from_slice() {
        assert_eq!(vec_of_slice_u8([0, 1]), vec![BaseNote::C, BaseNote::D]);
        assert_eq!(vec_of_slice_u8([2, 3]), vec![BaseNote::E, BaseNote::F]);
        assert_eq!(vec_of_slice_u8([4, 5]), vec![BaseNote::G, BaseNote::A]);
        assert_eq!(vec_of_slice_u8([6, 7]), vec![BaseNote::B]);
        assert_eq!(vec_of_slice_u8([8, 9]), vec![]);
    }

    #[test]
    fn test_try_from_str() {
       assert_eq!(TheoricalNote::try_from_str("C♭♭"), Some(TheoricalNote { base: BaseNote::C, accident: Accident::DoubleFlat }));
       assert_eq!(TheoricalNote::try_from_str("C♭"), Some(TheoricalNote { base: BaseNote::C, accident: Accident::Flat }));
       assert_eq!(TheoricalNote::try_from_str("C♯"), Some(TheoricalNote { base: BaseNote::C, accident: Accident::Sharp }));
       assert_eq!(TheoricalNote::try_from_str("C♯♯"), Some(TheoricalNote { base: BaseNote::C, accident: Accident::DoubleSharp }));
       assert_eq!(TheoricalNote::try_from_str("D♭♭"), Some(TheoricalNote { base: BaseNote::D, accident: Accident::DoubleFlat }));
       assert_eq!(TheoricalNote::try_from_str("D♭"), Some(TheoricalNote { base: BaseNote::D, accident: Accident::Flat }));
       assert_eq!(TheoricalNote::try_from_str("D♯"), Some(TheoricalNote { base: BaseNote::D, accident: Accident::Sharp }));
       assert_eq!(TheoricalNote::try_from_str("D♯♯"), Some(TheoricalNote { base: BaseNote::D, accident: Accident::DoubleSharp }));
       assert_eq!(TheoricalNote::try_from_str("E♭♭"), Some(TheoricalNote { base: BaseNote::E, accident: Accident::DoubleFlat }));
       assert_eq!(TheoricalNote::try_from_str("E♭"), Some(TheoricalNote { base: BaseNote::E, accident: Accident::Flat }));
       assert_eq!(TheoricalNote::try_from_str("E♯"), Some(TheoricalNote { base: BaseNote::E, accident: Accident::Sharp }));
       assert_eq!(TheoricalNote::try_from_str("E♯♯"), Some(TheoricalNote { base: BaseNote::E, accident: Accident::DoubleSharp }));
       assert_eq!(TheoricalNote::try_from_str("F♭♭"), Some(TheoricalNote { base: BaseNote::F, accident: Accident::DoubleFlat }));
       assert_eq!(TheoricalNote::try_from_str("F♭"), Some(TheoricalNote { base: BaseNote::F, accident: Accident::Flat }));
       assert_eq!(TheoricalNote::try_from_str("F♯"), Some(TheoricalNote { base: BaseNote::F, accident: Accident::Sharp }));
       assert_eq!(TheoricalNote::try_from_str("F♯♯"), Some(TheoricalNote { base: BaseNote::F, accident: Accident::DoubleSharp }));
       assert_eq!(TheoricalNote::try_from_str("G♭♭"), Some(TheoricalNote { base: BaseNote::G, accident: Accident::DoubleFlat }));
       assert_eq!(TheoricalNote::try_from_str("G♭"), Some(TheoricalNote { base: BaseNote::G, accident: Accident::Flat }));
       assert_eq!(TheoricalNote::try_from_str("G♯"), Some(TheoricalNote { base: BaseNote::G, accident: Accident::Sharp }));
       assert_eq!(TheoricalNote::try_from_str("G♯♯"), Some(TheoricalNote { base: BaseNote::G, accident: Accident::DoubleSharp }));
       assert_eq!(TheoricalNote::try_from_str("A♭♭"), Some(TheoricalNote { base: BaseNote::A, accident: Accident::DoubleFlat }));
       assert_eq!(TheoricalNote::try_from_str("A♭"), Some(TheoricalNote { base: BaseNote::A, accident: Accident::Flat }));
       assert_eq!(TheoricalNote::try_from_str("A♯"), Some(TheoricalNote { base: BaseNote::A, accident: Accident::Sharp }));
       assert_eq!(TheoricalNote::try_from_str("A♯♯"), Some(TheoricalNote { base: BaseNote::A, accident: Accident::DoubleSharp }));
       assert_eq!(TheoricalNote::try_from_str("B♭♭"), Some(TheoricalNote { base: BaseNote::B, accident: Accident::DoubleFlat }));
       assert_eq!(TheoricalNote::try_from_str("B♭"), Some(TheoricalNote { base: BaseNote::B, accident: Accident::Flat }));
       assert_eq!(TheoricalNote::try_from_str("B♯"), Some(TheoricalNote { base: BaseNote::B, accident: Accident::Sharp }));
       assert_eq!(TheoricalNote::try_from_str("B♯♯"), Some(TheoricalNote { base: BaseNote::B, accident: Accident::DoubleSharp }));
    }
}
