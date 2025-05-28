use crate::{interval::Interval, note::theorical::TheoricalNote};

use super::build::build_scale;

const MAJOR_SCALE: [Interval; 6] = [
    Interval::WholeTone,
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeTone,
    Interval::WholeTone,
    Interval::WholeTone,
];

pub fn major_scale_of(root: TheoricalNote) -> Vec<TheoricalNote> {
    build_scale(root, &MAJOR_SCALE.to_vec())
}

#[cfg(test)]
mod tests {
    use crate::{
        accident::Accident,
        interval::Interval,
        note::{
            chromatic::ChromaticNote,
            theorical::{BaseNote, TheoricalNote},
        },
    };

    use super::major_scale_of;

    #[test]
    fn test_build_major_scale_c() {
        assert_eq!(
            major_scale_of(TheoricalNote::from_str("C♭")),
            vec![
                TheoricalNote::from_str("C♭"),
                TheoricalNote::from_str("D♭"),
                TheoricalNote::from_str("E♭"),
                TheoricalNote::from_str("F♭"),
                TheoricalNote::from_str("G♭"),
                TheoricalNote::from_str("A♭"),
                TheoricalNote::from_str("B♭"),
            ]
        );
        assert_eq!(
            major_scale_of(TheoricalNote::from_str("C")),
            vec![
                TheoricalNote::from_str("C"),
                TheoricalNote::from_str("D"),
                TheoricalNote::from_str("E"),
                TheoricalNote::from_str("F"),
                TheoricalNote::from_str("G"),
                TheoricalNote::from_str("A"),
                TheoricalNote::from_str("B"),
            ]
        );
        assert_eq!(
            major_scale_of(TheoricalNote::from_str("C♯")),
            vec![
                TheoricalNote::from_str("C♯"),
                TheoricalNote::from_str("D♯"),
                TheoricalNote::from_str("E♯"),
                TheoricalNote::from_str("F♯"),
                TheoricalNote::from_str("G♯"),
                TheoricalNote::from_str("A♯"),
                TheoricalNote::from_str("B♯"),
            ]
        );
    }

    #[test]
    fn test_build_major_scale() {
        assert_eq!(
            major_scale_of(TheoricalNote::from_str("E♯")),
            vec![
                TheoricalNote::from_str("E♯"),
                TheoricalNote::from_str("F♯♯"),
                TheoricalNote::from_str("G♯♯"),
                TheoricalNote::from_str("A♯"),
                TheoricalNote::from_str("B♯"),
                TheoricalNote::from_str("C♯♯"),
                TheoricalNote::from_str("D♯♯"),
            ]
        );
    }
}
