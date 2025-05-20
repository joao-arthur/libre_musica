use super::{chromatic::ChromaticNote, theorical::TheoricalNote};

pub fn theorical_to_chromatic(theorical_note: &TheoricalNote) -> ChromaticNote {
    match theorical_note {
        TheoricalNote::C => ChromaticNote::_0,
        TheoricalNote::CSharp => ChromaticNote::_1,
        TheoricalNote::DFlat => ChromaticNote::_1,
        TheoricalNote::D => ChromaticNote::_2,
        TheoricalNote::DSharp => ChromaticNote::_3,
        TheoricalNote::EFlat => ChromaticNote::_3,
        TheoricalNote::E => ChromaticNote::_4,
        TheoricalNote::ESharp => ChromaticNote::_5,
        TheoricalNote::FFlat => ChromaticNote::_4,
        TheoricalNote::F => ChromaticNote::_5,
        TheoricalNote::FSharp => ChromaticNote::_6,
        TheoricalNote::GFlat => ChromaticNote::_6,
        TheoricalNote::G => ChromaticNote::_7,
        TheoricalNote::GSharp => ChromaticNote::_8,
        TheoricalNote::AFlat => ChromaticNote::_8,
        TheoricalNote::A => ChromaticNote::_9,
        TheoricalNote::ASharp => ChromaticNote::_10,
        TheoricalNote::BFlat => ChromaticNote::_10,
        TheoricalNote::B => ChromaticNote::_11,
        TheoricalNote::BSharp => ChromaticNote::_0,
        TheoricalNote::CFlat => ChromaticNote::_11,
    }
}

#[cfg(test)]
mod tests {
    use crate::note::chromatic::ChromaticNote;

    use super::{TheoricalNote, theorical_to_chromatic};

    #[test]
    fn test_theorical_to_chromatic() {
        assert_eq!(theorical_to_chromatic(&TheoricalNote::C), ChromaticNote::_0);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::CSharp), ChromaticNote::_1);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::DFlat), ChromaticNote::_1);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::D), ChromaticNote::_2);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::DSharp), ChromaticNote::_3);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::EFlat), ChromaticNote::_3);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::E), ChromaticNote::_4);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::ESharp), ChromaticNote::_5);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::FFlat), ChromaticNote::_4);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::F), ChromaticNote::_5);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::FSharp), ChromaticNote::_6);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::GFlat), ChromaticNote::_6);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::G), ChromaticNote::_7);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::GSharp), ChromaticNote::_8);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::AFlat), ChromaticNote::_8);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::A), ChromaticNote::_9);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::ASharp), ChromaticNote::_10);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::BFlat), ChromaticNote::_10);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::B), ChromaticNote::_11);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::BSharp), ChromaticNote::_0);
        assert_eq!(theorical_to_chromatic(&TheoricalNote::CFlat), ChromaticNote::_11);
    }
}
