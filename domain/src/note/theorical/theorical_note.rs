use std::fmt;

use crate::accident::Accident;

use super::base_note::BaseNote;

#[derive(Debug, PartialEq, Clone)]
pub struct TheoricalNote {
    pub base: BaseNote,
    pub accident: Accident,
}

impl fmt::Display for TheoricalNote {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.to_str())
    }
}

impl TheoricalNote {
    pub fn try_from_str(value: &str) -> Option<TheoricalNote> {
        match value {
            "C♭♭" => Some(TheoricalNote { base: BaseNote::C, accident: Accident::DoubleFlat }),
            "C♭" => Some(TheoricalNote { base: BaseNote::C, accident: Accident::Flat }),
            "C" => Some(TheoricalNote { base: BaseNote::C, accident: Accident::Natural }),
            "C♮" => Some(TheoricalNote { base: BaseNote::C, accident: Accident::Natural }),
            "C♯" => Some(TheoricalNote { base: BaseNote::C, accident: Accident::Sharp }),
            "C♯♯" => Some(TheoricalNote { base: BaseNote::C, accident: Accident::DoubleSharp }),

            "D♭♭" => Some(TheoricalNote { base: BaseNote::D, accident: Accident::DoubleFlat }),
            "D♭" => Some(TheoricalNote { base: BaseNote::D, accident: Accident::Flat }),
            "D" => Some(TheoricalNote { base: BaseNote::D, accident: Accident::Natural }),
            "D♮" => Some(TheoricalNote { base: BaseNote::D, accident: Accident::Natural }),
            "D♯" => Some(TheoricalNote { base: BaseNote::D, accident: Accident::Sharp }),
            "D♯♯" => Some(TheoricalNote { base: BaseNote::D, accident: Accident::DoubleSharp }),

            "E♭♭" => Some(TheoricalNote { base: BaseNote::E, accident: Accident::DoubleFlat }),
            "E♭" => Some(TheoricalNote { base: BaseNote::E, accident: Accident::Flat }),
            "E" => Some(TheoricalNote { base: BaseNote::E, accident: Accident::Natural }),
            "E♮" => Some(TheoricalNote { base: BaseNote::E, accident: Accident::Natural }),
            "E♯" => Some(TheoricalNote { base: BaseNote::E, accident: Accident::Sharp }),
            "E♯♯" => Some(TheoricalNote { base: BaseNote::E, accident: Accident::DoubleSharp }),

            "F♭♭" => Some(TheoricalNote { base: BaseNote::F, accident: Accident::DoubleFlat }),
            "F♭" => Some(TheoricalNote { base: BaseNote::F, accident: Accident::Flat }),
            "F" => Some(TheoricalNote { base: BaseNote::F, accident: Accident::Natural }),
            "F♮" => Some(TheoricalNote { base: BaseNote::F, accident: Accident::Natural }),
            "F♯" => Some(TheoricalNote { base: BaseNote::F, accident: Accident::Sharp }),
            "F♯♯" => Some(TheoricalNote { base: BaseNote::F, accident: Accident::DoubleSharp }),

            "G♭♭" => Some(TheoricalNote { base: BaseNote::G, accident: Accident::DoubleFlat }),
            "G♭" => Some(TheoricalNote { base: BaseNote::G, accident: Accident::Flat }),
            "G" => Some(TheoricalNote { base: BaseNote::G, accident: Accident::Natural }),
            "G♮" => Some(TheoricalNote { base: BaseNote::G, accident: Accident::Natural }),
            "G♯" => Some(TheoricalNote { base: BaseNote::G, accident: Accident::Sharp }),
            "G♯♯" => Some(TheoricalNote { base: BaseNote::G, accident: Accident::DoubleSharp }),

            "A♭♭" => Some(TheoricalNote { base: BaseNote::A, accident: Accident::DoubleFlat }),
            "A♭" => Some(TheoricalNote { base: BaseNote::A, accident: Accident::Flat }),
            "A" => Some(TheoricalNote { base: BaseNote::A, accident: Accident::Natural }),
            "A♮" => Some(TheoricalNote { base: BaseNote::A, accident: Accident::Natural }),
            "A♯" => Some(TheoricalNote { base: BaseNote::A, accident: Accident::Sharp }),
            "A♯♯" => Some(TheoricalNote { base: BaseNote::A, accident: Accident::DoubleSharp }),

            "B♭♭" => Some(TheoricalNote { base: BaseNote::B, accident: Accident::DoubleFlat }),
            "B♭" => Some(TheoricalNote { base: BaseNote::B, accident: Accident::Flat }),
            "B" => Some(TheoricalNote { base: BaseNote::B, accident: Accident::Natural }),
            "B♮" => Some(TheoricalNote { base: BaseNote::B, accident: Accident::Natural }),
            "B♯" => Some(TheoricalNote { base: BaseNote::B, accident: Accident::Sharp }),
            "B♯♯" => Some(TheoricalNote { base: BaseNote::B, accident: Accident::DoubleSharp }),
            _ => None,
        }
    }

    pub fn from_str(value: &str) -> TheoricalNote {
        Self::try_from_str(value).unwrap()
    }

    pub fn to_str(&self) -> String {
        match self {
            TheoricalNote { base: BaseNote::C, accident: Accident::DoubleFlat } => "C♭♭".into(),
            TheoricalNote { base: BaseNote::C, accident: Accident::Flat } => "C♭".into(),
            TheoricalNote { base: BaseNote::C, accident: Accident::Natural } => "C".into(),
            TheoricalNote { base: BaseNote::C, accident: Accident::Sharp } => "C♯".into(),
            TheoricalNote { base: BaseNote::C, accident: Accident::DoubleSharp } => "C♯♯".into(),

            TheoricalNote { base: BaseNote::D, accident: Accident::DoubleFlat } => "D♭♭".into(),
            TheoricalNote { base: BaseNote::D, accident: Accident::Flat } => "D♭".into(),
            TheoricalNote { base: BaseNote::D, accident: Accident::Natural } => "D".into(),
            TheoricalNote { base: BaseNote::D, accident: Accident::Sharp } => "D♯".into(),
            TheoricalNote { base: BaseNote::D, accident: Accident::DoubleSharp } => "D♯♯".into(),

            TheoricalNote { base: BaseNote::E, accident: Accident::DoubleFlat } => "E♭♭".into(),
            TheoricalNote { base: BaseNote::E, accident: Accident::Flat } => "E♭".into(),
            TheoricalNote { base: BaseNote::E, accident: Accident::Natural } => "E".into(),
            TheoricalNote { base: BaseNote::E, accident: Accident::Sharp } => "E♯".into(),
            TheoricalNote { base: BaseNote::E, accident: Accident::DoubleSharp } => "E♯♯".into(),

            TheoricalNote { base: BaseNote::F, accident: Accident::DoubleFlat } => "F♭♭".into(),
            TheoricalNote { base: BaseNote::F, accident: Accident::Flat } => "F♭".into(),
            TheoricalNote { base: BaseNote::F, accident: Accident::Natural } => "F".into(),
            TheoricalNote { base: BaseNote::F, accident: Accident::Sharp } => "F♯".into(),
            TheoricalNote { base: BaseNote::F, accident: Accident::DoubleSharp } => "F♯♯".into(),

            TheoricalNote { base: BaseNote::G, accident: Accident::DoubleFlat } => "G♭♭".into(),
            TheoricalNote { base: BaseNote::G, accident: Accident::Flat } => "G♭".into(),
            TheoricalNote { base: BaseNote::G, accident: Accident::Natural } => "G".into(),
            TheoricalNote { base: BaseNote::G, accident: Accident::Sharp } => "G♯".into(),
            TheoricalNote { base: BaseNote::G, accident: Accident::DoubleSharp } => "G♯♯".into(),

            TheoricalNote { base: BaseNote::A, accident: Accident::DoubleFlat } => "A♭♭".into(),
            TheoricalNote { base: BaseNote::A, accident: Accident::Flat } => "A♭".into(),
            TheoricalNote { base: BaseNote::A, accident: Accident::Natural } => "A".into(),
            TheoricalNote { base: BaseNote::A, accident: Accident::Sharp } => "A♯".into(),
            TheoricalNote { base: BaseNote::A, accident: Accident::DoubleSharp } => "A♯♯".into(),

            TheoricalNote { base: BaseNote::B, accident: Accident::DoubleFlat } => "B♭♭".into(),
            TheoricalNote { base: BaseNote::B, accident: Accident::Flat } => "B♭".into(),
            TheoricalNote { base: BaseNote::B, accident: Accident::Natural } => "B".into(),
            TheoricalNote { base: BaseNote::B, accident: Accident::Sharp } => "B♯".into(),
            TheoricalNote { base: BaseNote::B, accident: Accident::DoubleSharp } => "B♯♯".into(),
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::accident::Accident;

    use super::{BaseNote, TheoricalNote};

    #[test]
    fn try_from_str_c() {
        assert_eq!(TheoricalNote::try_from_str("C♭♭"), Some(TheoricalNote { base: BaseNote::C, accident: Accident::DoubleFlat }));
        assert_eq!(TheoricalNote::try_from_str("C♭"), Some(TheoricalNote { base: BaseNote::C, accident: Accident::Flat }));
        assert_eq!(TheoricalNote::try_from_str("C"), Some(TheoricalNote { base: BaseNote::C, accident: Accident::Natural }));
        assert_eq!(TheoricalNote::try_from_str("C♮"), Some(TheoricalNote { base: BaseNote::C, accident: Accident::Natural }));
        assert_eq!(TheoricalNote::try_from_str("C♯"), Some(TheoricalNote { base: BaseNote::C, accident: Accident::Sharp }));
        assert_eq!(TheoricalNote::try_from_str("C♯♯"), Some(TheoricalNote { base: BaseNote::C, accident: Accident::DoubleSharp }));
    }

    #[test]
    fn try_from_str_d() {
        assert_eq!(TheoricalNote::try_from_str("D♭♭"), Some(TheoricalNote { base: BaseNote::D, accident: Accident::DoubleFlat }));
        assert_eq!(TheoricalNote::try_from_str("D♭"), Some(TheoricalNote { base: BaseNote::D, accident: Accident::Flat }));
        assert_eq!(TheoricalNote::try_from_str("D"), Some(TheoricalNote { base: BaseNote::D, accident: Accident::Natural }));
        assert_eq!(TheoricalNote::try_from_str("D♮"), Some(TheoricalNote { base: BaseNote::D, accident: Accident::Natural }));
        assert_eq!(TheoricalNote::try_from_str("D♯"), Some(TheoricalNote { base: BaseNote::D, accident: Accident::Sharp }));
        assert_eq!(TheoricalNote::try_from_str("D♯♯"), Some(TheoricalNote { base: BaseNote::D, accident: Accident::DoubleSharp }));
    }

    #[test]
    fn try_from_str_e() {
        assert_eq!(TheoricalNote::try_from_str("E♭♭"), Some(TheoricalNote { base: BaseNote::E, accident: Accident::DoubleFlat }));
        assert_eq!(TheoricalNote::try_from_str("E♭"), Some(TheoricalNote { base: BaseNote::E, accident: Accident::Flat }));
        assert_eq!(TheoricalNote::try_from_str("E"), Some(TheoricalNote { base: BaseNote::E, accident: Accident::Natural }));
        assert_eq!(TheoricalNote::try_from_str("E♮"), Some(TheoricalNote { base: BaseNote::E, accident: Accident::Natural }));
        assert_eq!(TheoricalNote::try_from_str("E♯"), Some(TheoricalNote { base: BaseNote::E, accident: Accident::Sharp }));
        assert_eq!(TheoricalNote::try_from_str("E♯♯"), Some(TheoricalNote { base: BaseNote::E, accident: Accident::DoubleSharp }));
    }

    #[test]
    fn try_from_str_f() {
        assert_eq!(TheoricalNote::try_from_str("F♭♭"), Some(TheoricalNote { base: BaseNote::F, accident: Accident::DoubleFlat }));
        assert_eq!(TheoricalNote::try_from_str("F♭"), Some(TheoricalNote { base: BaseNote::F, accident: Accident::Flat }));
        assert_eq!(TheoricalNote::try_from_str("F"), Some(TheoricalNote { base: BaseNote::F, accident: Accident::Natural }));
        assert_eq!(TheoricalNote::try_from_str("F♮"), Some(TheoricalNote { base: BaseNote::F, accident: Accident::Natural }));
        assert_eq!(TheoricalNote::try_from_str("F♯"), Some(TheoricalNote { base: BaseNote::F, accident: Accident::Sharp }));
        assert_eq!(TheoricalNote::try_from_str("F♯♯"), Some(TheoricalNote { base: BaseNote::F, accident: Accident::DoubleSharp }));
    }

    #[test]
    fn try_from_str_g() {
        assert_eq!(TheoricalNote::try_from_str("G♭♭"), Some(TheoricalNote { base: BaseNote::G, accident: Accident::DoubleFlat }));
        assert_eq!(TheoricalNote::try_from_str("G♭"), Some(TheoricalNote { base: BaseNote::G, accident: Accident::Flat }));
        assert_eq!(TheoricalNote::try_from_str("G"), Some(TheoricalNote { base: BaseNote::G, accident: Accident::Natural }));
        assert_eq!(TheoricalNote::try_from_str("G♮"), Some(TheoricalNote { base: BaseNote::G, accident: Accident::Natural }));
        assert_eq!(TheoricalNote::try_from_str("G♯"), Some(TheoricalNote { base: BaseNote::G, accident: Accident::Sharp }));
        assert_eq!(TheoricalNote::try_from_str("G♯♯"), Some(TheoricalNote { base: BaseNote::G, accident: Accident::DoubleSharp }));
    }

    #[test]
    fn try_from_str_a() {
        assert_eq!(TheoricalNote::try_from_str("A♭♭"), Some(TheoricalNote { base: BaseNote::A, accident: Accident::DoubleFlat }));
        assert_eq!(TheoricalNote::try_from_str("A♭"), Some(TheoricalNote { base: BaseNote::A, accident: Accident::Flat }));
        assert_eq!(TheoricalNote::try_from_str("A"), Some(TheoricalNote { base: BaseNote::A, accident: Accident::Natural }));
        assert_eq!(TheoricalNote::try_from_str("A♮"), Some(TheoricalNote { base: BaseNote::A, accident: Accident::Natural }));
        assert_eq!(TheoricalNote::try_from_str("A♯"), Some(TheoricalNote { base: BaseNote::A, accident: Accident::Sharp }));
        assert_eq!(TheoricalNote::try_from_str("A♯♯"), Some(TheoricalNote { base: BaseNote::A, accident: Accident::DoubleSharp }));
    }

    #[test]
    fn try_from_str_b() {
        assert_eq!(TheoricalNote::try_from_str("B♭♭"), Some(TheoricalNote { base: BaseNote::B, accident: Accident::DoubleFlat }));
        assert_eq!(TheoricalNote::try_from_str("B♭"), Some(TheoricalNote { base: BaseNote::B, accident: Accident::Flat }));
        assert_eq!(TheoricalNote::try_from_str("B"), Some(TheoricalNote { base: BaseNote::B, accident: Accident::Natural }));
        assert_eq!(TheoricalNote::try_from_str("B♮"), Some(TheoricalNote { base: BaseNote::B, accident: Accident::Natural }));
        assert_eq!(TheoricalNote::try_from_str("B♯"), Some(TheoricalNote { base: BaseNote::B, accident: Accident::Sharp }));
        assert_eq!(TheoricalNote::try_from_str("B♯♯"), Some(TheoricalNote { base: BaseNote::B, accident: Accident::DoubleSharp }));
    }

    #[test]
    fn try_from_str_none() {
        assert_eq!(TheoricalNote::try_from_str("H"), None);
    }

    #[test]
    fn test_from_str() {
        assert_eq!(TheoricalNote::from_str("C♭♭"), TheoricalNote { base: BaseNote::C, accident: Accident::DoubleFlat });
        assert_eq!(TheoricalNote::from_str("D♭"), TheoricalNote { base: BaseNote::D, accident: Accident::Flat });
        assert_eq!(TheoricalNote::from_str("E"), TheoricalNote { base: BaseNote::E, accident: Accident::Natural });
        assert_eq!(TheoricalNote::from_str("F♯"), TheoricalNote { base: BaseNote::F, accident: Accident::Sharp });
        assert_eq!(TheoricalNote::from_str("G♯♯"), TheoricalNote { base: BaseNote::G, accident: Accident::DoubleSharp });
    }
}
