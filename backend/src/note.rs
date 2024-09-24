#[derive(Debug, PartialEq)]
pub enum Note {
    A,
    AB,
    B,
    C,
    CD,
    D,
    DE,
    E,
    F,
    FG,
    G,
    GA,
}

pub enum Accident {
    Flat,
    Sharp
}

impl Note {
    pub fn to_u8(self) -> u8 {
        match self {
            Note::A => 0,
            Note::AB => 1,
            Note::B => 2,
            Note::C => 3,
            Note::CD => 4,
            Note::D => 5,
            Note::DE => 6,
            Note::E => 7,
            Note::F => 8,
            Note::FG => 9,
            Note::G => 10,
            Note::GA => 11,
        }
    }

    pub fn from_u8(num: u8) -> Option<Note> {
        match num {
            0 => Some(Note::A),
            1 => Some(Note::AB),
            2 => Some(Note::B),
            3 => Some(Note::C),
            4 => Some(Note::CD),
            5 => Some(Note::D),
            6 => Some(Note::DE),
            7 => Some(Note::E),
            8 => Some(Note::F),
            9 => Some(Note::FG),
            10 => Some(Note::G),
            11 => Some(Note::GA),
            _ => None,
        }
    }
}

fn get_natural_note(note: Note, accident: Accident) -> Note {
        match note {
            Note::A => Note::A,
            Note::AB => match accident {
                Accident::Flat => Note::B,
                Accident:: Sharp => Note::A,
            },
            Note::B => Note::B,
            Note::C => Note::C,
            Note::CD => match accident {
                Accident::Flat => Note::D,
                Accident:: Sharp => Note::C,
            },
            Note::D => Note::D,
            Note::DE => match accident {
                Accident::Flat => Note::E,
                Accident:: Sharp => Note::D,
            },
            Note::E => Note::E,
            Note::F => Note::F,
            Note::FG => match accident {
                Accident::Flat => Note::G,
                Accident:: Sharp => Note::F,
            },
            Note::G => Note::G,
            Note::GA => match accident {
                Accident::Flat => Note::A,
                Accident:: Sharp => Note::G,
            },
        }
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::note::Note;

    #[test]
    pub fn test_get_natural_note_flat() {
        assert_eq!(get_natural_note(Note::A, Accident::Flat), Note::A);
        assert_eq!(get_natural_note(Note::AB, Accident::Flat), Note::B);
        assert_eq!(get_natural_note(Note::B, Accident::Flat), Note::B);
        assert_eq!(get_natural_note(Note::C, Accident::Flat), Note::C);
        assert_eq!(get_natural_note(Note::CD, Accident::Flat), Note::D);
        assert_eq!(get_natural_note(Note::D, Accident::Flat), Note::D);
        assert_eq!(get_natural_note(Note::DE, Accident::Flat), Note::E);
        assert_eq!(get_natural_note(Note::E, Accident::Flat), Note::E);
        assert_eq!(get_natural_note(Note::F, Accident::Flat), Note::F);
        assert_eq!(get_natural_note(Note::FG, Accident::Flat), Note::G);
        assert_eq!(get_natural_note(Note::G, Accident::Flat), Note::G);
        assert_eq!(get_natural_note(Note::GA, Accident::Flat), Note::A);
    }

    #[test]
    pub fn test_get_natural_note_sharp() {
        assert_eq!(get_natural_note(Note::A, Accident::Sharp), Note::A);
        assert_eq!(get_natural_note(Note::AB, Accident::Sharp), Note::A);
        assert_eq!(get_natural_note(Note::B, Accident::Sharp), Note::B);
        assert_eq!(get_natural_note(Note::C, Accident::Sharp), Note::C);
        assert_eq!(get_natural_note(Note::CD, Accident::Sharp), Note::C);
        assert_eq!(get_natural_note(Note::D, Accident::Sharp), Note::D);
        assert_eq!(get_natural_note(Note::DE, Accident::Sharp), Note::D);
        assert_eq!(get_natural_note(Note::E, Accident::Sharp), Note::E);
        assert_eq!(get_natural_note(Note::F, Accident::Sharp), Note::F);
        assert_eq!(get_natural_note(Note::FG, Accident::Sharp), Note::F);
        assert_eq!(get_natural_note(Note::G, Accident::Sharp), Note::G);
        assert_eq!(get_natural_note(Note::GA, Accident::Sharp), Note::G);
    }
}
