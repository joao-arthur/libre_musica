use crate::{accident::Accident, note::chromatic::ChromaticNote};

const KEY_SIGNATURE_SHARP: &str = "♯";
const KEY_SIGNATURE_FLAT: &str = "♭";
const KEY_SIGNATURE_DOUBLE_SHARP: &str = "𝄪";
const KEY_SIGNATURE_DOUBLE_FLAT: &str = "𝄫";
const KEY_SIGNATURE_NATURAL: &str = "♮";

const LATIN_NOTES: [&str; 7] = ["dó", "ré", "mí", "fá", "sol", "lá", "sí"];

const ENGLISH_NOTES: [&str; 7] = ["a", "b", "c", "d", "e", "f", "g"];

fn format_accident(accident: &Accident) -> String {
    match accident {
        Accident::DoubleFlat => "𝄫".into(),
        Accident::Flat => "♭".into(),
        Accident::Natural => "".into(),
        Accident::Sharp => "♯".into(),
        Accident::DoubleSharp => "𝄪".into(),
    }
}

pub fn format_sharp(note: ChromaticNote) -> String {
    match note {
        ChromaticNote::_0 => "C".into(),
        ChromaticNote::_1 => "C♯".into(),
        ChromaticNote::_2 => "D".into(),
        ChromaticNote::_3 => "D♯".into(),
        ChromaticNote::_4 => "E".into(),
        ChromaticNote::_5 => "F".into(),
        ChromaticNote::_6 => "F♯".into(),
        ChromaticNote::_7 => "G".into(),
        ChromaticNote::_8 => "G♯".into(),
        ChromaticNote::_9 => "A".into(),
        ChromaticNote::_10 => "A♯".into(),
        ChromaticNote::_11 => "B".into(),
    }
}

pub fn format_flat(note: ChromaticNote) -> String {
    match note {
        ChromaticNote::_0 => "C".into(),
        ChromaticNote::_1 => "D♭".into(),
        ChromaticNote::_2 => "D".into(),
        ChromaticNote::_3 => "E♭".into(),
        ChromaticNote::_4 => "E".into(),
        ChromaticNote::_5 => "F".into(),
        ChromaticNote::_6 => "G♭".into(),
        ChromaticNote::_7 => "G".into(),
        ChromaticNote::_8 => "A♭".into(),
        ChromaticNote::_9 => "A".into(),
        ChromaticNote::_10 => "B♭".into(),
        ChromaticNote::_11 => "B".into(),
    }
}

#[cfg(test)]
mod tests {
    use crate::note::chromatic::ChromaticNote;

    use super::{format_flat, format_sharp};

    #[test]
    pub fn test_format_sharp() {
        assert_eq!(format_sharp(ChromaticNote::_0), String::from("C"));
        assert_eq!(format_sharp(ChromaticNote::_1), String::from("C♯"));
        assert_eq!(format_sharp(ChromaticNote::_2), String::from("D"));
        assert_eq!(format_sharp(ChromaticNote::_3), String::from("D♯"));
        assert_eq!(format_sharp(ChromaticNote::_4), String::from("E"));
        assert_eq!(format_sharp(ChromaticNote::_5), String::from("F"));
        assert_eq!(format_sharp(ChromaticNote::_6), String::from("F♯"));
        assert_eq!(format_sharp(ChromaticNote::_7), String::from("G"));
        assert_eq!(format_sharp(ChromaticNote::_8), String::from("G♯"));
        assert_eq!(format_sharp(ChromaticNote::_9), String::from("A"));
        assert_eq!(format_sharp(ChromaticNote::_10), String::from("A♯"));
        assert_eq!(format_sharp(ChromaticNote::_11), String::from("B"));
    }

    #[test]
    pub fn test_format_flat() {
        assert_eq!(format_flat(ChromaticNote::_0), String::from("C"));
        assert_eq!(format_flat(ChromaticNote::_1), String::from("D♭"));
        assert_eq!(format_flat(ChromaticNote::_2), String::from("D"));
        assert_eq!(format_flat(ChromaticNote::_3), String::from("E♭"));
        assert_eq!(format_flat(ChromaticNote::_4), String::from("E"));
        assert_eq!(format_flat(ChromaticNote::_5), String::from("F"));
        assert_eq!(format_flat(ChromaticNote::_6), String::from("G♭"));
        assert_eq!(format_flat(ChromaticNote::_7), String::from("G"));
        assert_eq!(format_flat(ChromaticNote::_8), String::from("A♭"));
        assert_eq!(format_flat(ChromaticNote::_9), String::from("A"));
        assert_eq!(format_flat(ChromaticNote::_10), String::from("B♭"));
        assert_eq!(format_flat(ChromaticNote::_11), String::from("B"));
    }
}
