use crate::{accident::Accident, note::Note};

const KEY_SIGNATURE_SHARP: &str = "♯";
const KEY_SIGNATURE_FLAT: &str = "♭";
const KEY_SIGNATURE_DOUBLE_SHARP: &str = "♯♯";
const KEY_SIGNATURE_DOUBLE_FLAT: &str = "♭♭";
const KEY_SIGNATURE_NATURAL: &str = "♮";

const LATIN_NOTES: [&str; 7] = ["dó", "ré", "mí", "fá", "sol", "lá", "sí"];

const ENGLISH_NOTES: [&str; 7] = ["a", "b", "c", "d", "e", "f", "g"];

pub fn format_note(note: Note) -> String {
    match note {
        Note::A => String::from("A"),
        Note::AB => String::from("A/B"),
        Note::B => String::from("B"),
        Note::C => String::from("C"),
        Note::CD => String::from("C/D"),
        Note::D => String::from("D"),
        Note::DE => String::from("D/E"),
        Note::E => String::from("E"),
        Note::F => String::from("F"),
        Note::FG => String::from("F/G"),
        Note::G => String::from("G"),
        Note::GA => String::from("G/A"), 
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::note::Note;

    #[test]
    pub fn test_format_note() {
        assert_eq!(format_note(Note::A), String::from("A"));
        assert_eq!(format_note(Note::AB), String::from("A/B"));
        assert_eq!(format_note(Note::B), String::from("B"));
        assert_eq!(format_note(Note::C), String::from("C"));
        assert_eq!(format_note(Note::CD), String::from("C/D"));
        assert_eq!(format_note(Note::D), String::from("D"));
        assert_eq!(format_note(Note::DE), String::from("D/E"));
        assert_eq!(format_note(Note::E), String::from("E"));
        assert_eq!(format_note(Note::F), String::from("F"));
        assert_eq!(format_note(Note::FG), String::from("F/G"));
        assert_eq!(format_note(Note::G), String::from("G"));
        assert_eq!(format_note(Note::GA), String::from("G/A"));
    }
}
