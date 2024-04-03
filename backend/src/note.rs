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
