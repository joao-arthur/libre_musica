use crate::accident::Accident;

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

fn natural_note(note: Note, accident: Accident) -> Note {
    match note {
        Note::A => Note::A,
        Note::AB => match accident {
            Accident::Natural => Note::AB,
            Accident::Flat => Note::B,
            Accident::Sharp => Note::A,
        },
        Note::B => Note::B,
        Note::C => Note::C,
        Note::CD => match accident {
            Accident::Natural => Note::CD,
            Accident::Flat => Note::D,
            Accident::Sharp => Note::C,
        },
        Note::D => Note::D,
        Note::DE => match accident {
            Accident::Natural => Note::DE,
            Accident::Flat => Note::E,
            Accident::Sharp => Note::D,
        },
        Note::E => Note::E,
        Note::F => Note::F,
        Note::FG => match accident {
            Accident::Natural => Note::FG,
            Accident::Flat => Note::G,
            Accident::Sharp => Note::F,
        },
        Note::G => Note::G,
        Note::GA => match accident {
            Accident::Natural => Note::GA,
            Accident::Flat => Note::A,
            Accident::Sharp => Note::G,
        },
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::note::Note;

    #[test]
    pub fn test_note_from_u8() {
        assert_eq!(Note::from_u8(0), Some(Note::A));
        assert_eq!(Note::from_u8(1), Some(Note::AB));
        assert_eq!(Note::from_u8(2), Some(Note::B));
        assert_eq!(Note::from_u8(3), Some(Note::C));
        assert_eq!(Note::from_u8(4), Some(Note::CD));
        assert_eq!(Note::from_u8(5), Some(Note::D));
        assert_eq!(Note::from_u8(6), Some(Note::DE));
        assert_eq!(Note::from_u8(7), Some(Note::E));
        assert_eq!(Note::from_u8(8), Some(Note::F));
        assert_eq!(Note::from_u8(9), Some(Note::FG));
        assert_eq!(Note::from_u8(10), Some(Note::G));
        assert_eq!(Note::from_u8(11), Some(Note::GA));
    }

    #[test]
    pub fn test_note_to_u8() {
        assert_eq!(Note::A.to_u8(), 0);
        assert_eq!(Note::AB.to_u8(), 1);
        assert_eq!(Note::B.to_u8(), 2);
        assert_eq!(Note::C.to_u8(), 3);
        assert_eq!(Note::CD.to_u8(), 4);
        assert_eq!(Note::D.to_u8(), 5);
        assert_eq!(Note::DE.to_u8(), 6);
        assert_eq!(Note::E.to_u8(), 7);
        assert_eq!(Note::F.to_u8(), 8);
        assert_eq!(Note::FG.to_u8(), 9);
        assert_eq!(Note::G.to_u8(), 10);
        assert_eq!(Note::GA.to_u8(), 11);
    }

    #[test]
    pub fn test_natural_note_natural() {
        assert_eq!(natural_note(Note::A, Accident::Natural), Note::A);
        assert_eq!(natural_note(Note::B, Accident::Natural), Note::B);
        assert_eq!(natural_note(Note::C, Accident::Natural), Note::C);
        assert_eq!(natural_note(Note::D, Accident::Natural), Note::D);
        assert_eq!(natural_note(Note::E, Accident::Natural), Note::E);
        assert_eq!(natural_note(Note::F, Accident::Natural), Note::F);
        assert_eq!(natural_note(Note::G, Accident::Natural), Note::G);

        assert_eq!(natural_note(Note::AB, Accident::Natural), Note::AB);
        assert_eq!(natural_note(Note::CD, Accident::Natural), Note::CD);
        assert_eq!(natural_note(Note::DE, Accident::Natural), Note::DE);
        assert_eq!(natural_note(Note::FG, Accident::Natural), Note::FG);
        assert_eq!(natural_note(Note::GA, Accident::Natural), Note::GA);
    }

    #[test]
    pub fn test_natural_note_flat() {
        assert_eq!(natural_note(Note::A, Accident::Flat), Note::A);
        assert_eq!(natural_note(Note::B, Accident::Flat), Note::B);
        assert_eq!(natural_note(Note::C, Accident::Flat), Note::C);
        assert_eq!(natural_note(Note::D, Accident::Flat), Note::D);
        assert_eq!(natural_note(Note::E, Accident::Flat), Note::E);
        assert_eq!(natural_note(Note::F, Accident::Flat), Note::F);
        assert_eq!(natural_note(Note::G, Accident::Flat), Note::G);

        assert_eq!(natural_note(Note::AB, Accident::Flat), Note::B);
        assert_eq!(natural_note(Note::CD, Accident::Flat), Note::D);
        assert_eq!(natural_note(Note::DE, Accident::Flat), Note::E);
        assert_eq!(natural_note(Note::FG, Accident::Flat), Note::G);
        assert_eq!(natural_note(Note::GA, Accident::Flat), Note::A);
    }

    #[test]
    pub fn test_natural_note_sharp() {
        assert_eq!(natural_note(Note::A, Accident::Sharp), Note::A);
        assert_eq!(natural_note(Note::B, Accident::Sharp), Note::B);
        assert_eq!(natural_note(Note::C, Accident::Sharp), Note::C);
        assert_eq!(natural_note(Note::D, Accident::Sharp), Note::D);
        assert_eq!(natural_note(Note::E, Accident::Sharp), Note::E);
        assert_eq!(natural_note(Note::F, Accident::Sharp), Note::F);
        assert_eq!(natural_note(Note::G, Accident::Sharp), Note::G);

        assert_eq!(natural_note(Note::AB, Accident::Sharp), Note::A);
        assert_eq!(natural_note(Note::CD, Accident::Sharp), Note::C);
        assert_eq!(natural_note(Note::DE, Accident::Sharp), Note::D);
        assert_eq!(natural_note(Note::FG, Accident::Sharp), Note::F);
        assert_eq!(natural_note(Note::GA, Accident::Sharp), Note::G);
    }
}
