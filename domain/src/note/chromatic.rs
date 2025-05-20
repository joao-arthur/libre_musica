#[derive(Debug, PartialEq, Clone)]
pub enum ChromaticNote {
    _0,
    _1,
    _2,
    _3,
    _4,
    _5,
    _6,
    _7,
    _8,
    _9,
    _10,
    _11,
}

impl ChromaticNote {
    pub fn to_u8(&self) -> u8 {
        match self {
            ChromaticNote::_0 => 0,
            ChromaticNote::_1 => 1,
            ChromaticNote::_2 => 2,
            ChromaticNote::_3 => 3,
            ChromaticNote::_4 => 4,
            ChromaticNote::_5 => 5,
            ChromaticNote::_6 => 6,
            ChromaticNote::_7 => 7,
            ChromaticNote::_8 => 8,
            ChromaticNote::_9 => 9,
            ChromaticNote::_10 => 10,
            ChromaticNote::_11 => 11,
        }
    }

    pub fn try_from_u8(num: u8) -> Option<ChromaticNote> {
        match num {
            0 => Some(ChromaticNote::_0),
            1 => Some(ChromaticNote::_1),
            2 => Some(ChromaticNote::_2),
            3 => Some(ChromaticNote::_3),
            4 => Some(ChromaticNote::_4),
            5 => Some(ChromaticNote::_5),
            6 => Some(ChromaticNote::_6),
            7 => Some(ChromaticNote::_7),
            8 => Some(ChromaticNote::_8),
            9 => Some(ChromaticNote::_9),
            10 => Some(ChromaticNote::_10),
            11 => Some(ChromaticNote::_11),
            _ => None,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::ChromaticNote;

    #[test]
    pub fn note_try_from_u8() {
        assert_eq!(ChromaticNote::try_from_u8(0), Some(ChromaticNote::_0));
        assert_eq!(ChromaticNote::try_from_u8(1), Some(ChromaticNote::_1));
        assert_eq!(ChromaticNote::try_from_u8(2), Some(ChromaticNote::_2));
        assert_eq!(ChromaticNote::try_from_u8(3), Some(ChromaticNote::_3));
        assert_eq!(ChromaticNote::try_from_u8(4), Some(ChromaticNote::_4));
        assert_eq!(ChromaticNote::try_from_u8(5), Some(ChromaticNote::_5));
        assert_eq!(ChromaticNote::try_from_u8(6), Some(ChromaticNote::_6));
        assert_eq!(ChromaticNote::try_from_u8(7), Some(ChromaticNote::_7));
        assert_eq!(ChromaticNote::try_from_u8(8), Some(ChromaticNote::_8));
        assert_eq!(ChromaticNote::try_from_u8(9), Some(ChromaticNote::_9));
        assert_eq!(ChromaticNote::try_from_u8(10), Some(ChromaticNote::_10));
        assert_eq!(ChromaticNote::try_from_u8(11), Some(ChromaticNote::_11));
    }

    #[test]
    pub fn note_to_u8() {
        assert_eq!(ChromaticNote::_0.to_u8(), 0);
        assert_eq!(ChromaticNote::_1.to_u8(), 1);
        assert_eq!(ChromaticNote::_2.to_u8(), 2);
        assert_eq!(ChromaticNote::_3.to_u8(), 3);
        assert_eq!(ChromaticNote::_4.to_u8(), 4);
        assert_eq!(ChromaticNote::_5.to_u8(), 5);
        assert_eq!(ChromaticNote::_6.to_u8(), 6);
        assert_eq!(ChromaticNote::_7.to_u8(), 7);
        assert_eq!(ChromaticNote::_8.to_u8(), 8);
        assert_eq!(ChromaticNote::_9.to_u8(), 9);
        assert_eq!(ChromaticNote::_10.to_u8(), 10);
        assert_eq!(ChromaticNote::_11.to_u8(), 11);
    }
}
