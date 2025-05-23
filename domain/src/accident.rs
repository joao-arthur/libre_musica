#[derive(Debug, PartialEq, Clone)]
pub enum Accident {
    DoubleFlat,
    Flat,
    Natural,
    Sharp,
    DoubleSharp,
}

impl Accident {
    pub fn to_i8(&self) -> i8 {
        match self {
            Accident::DoubleFlat => -2,
            Accident::Flat => -1,
            Accident::Natural => 0,
            Accident::Sharp => 1,
            Accident::DoubleSharp => 2,
        }
    }

    pub fn try_from_i8(num: i8) -> Option<Accident> {
        match num {
            -2 => Some(Accident::DoubleFlat),
            -1 => Some(Accident::Flat),
            0 => Some(Accident::Natural),
            1 => Some(Accident::Sharp),
            2 => Some(Accident::DoubleSharp),
            _ => None,
        }
    }

    pub fn from_i8(num: i8) -> Accident {
        Self::try_from_i8(num).unwrap()
    }
}

#[cfg(test)]
mod tests {
    use super::Accident;

    #[test]
    fn accident_to_i8() {
        assert_eq!(Accident::DoubleFlat.to_i8(), -2);
        assert_eq!(Accident::Flat.to_i8(), -1);
        assert_eq!(Accident::Natural.to_i8(), 0);
        assert_eq!(Accident::Sharp.to_i8(), 1);
        assert_eq!(Accident::DoubleSharp.to_i8(), 2);
    }

    #[test]
    fn accident_try_from_i8() {
        assert_eq!(Accident::try_from_i8(-3), None);
        assert_eq!(Accident::try_from_i8(-2), Some(Accident::DoubleFlat));
        assert_eq!(Accident::try_from_i8(-1), Some(Accident::Flat));
        assert_eq!(Accident::try_from_i8(0), Some(Accident::Natural));
        assert_eq!(Accident::try_from_i8(1), Some(Accident::Sharp));
        assert_eq!(Accident::try_from_i8(2), Some(Accident::DoubleSharp));
        assert_eq!(Accident::try_from_i8(3), None);
    }

    #[test]
    fn accident_from_i8() {
        assert_eq!(Accident::from_i8(-2), Accident::DoubleFlat);
        assert_eq!(Accident::from_i8(-1), Accident::Flat);
        assert_eq!(Accident::from_i8(0), Accident::Natural);
        assert_eq!(Accident::from_i8(1), Accident::Sharp);
        assert_eq!(Accident::from_i8(2), Accident::DoubleSharp);
    }
}
