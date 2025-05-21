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
}

#[cfg(test)]
mod tests {
    use super::Accident;

    #[test]
    fn accident_to_u8() {
        assert_eq!(Accident::DoubleFlat.to_i8(), -2);
        assert_eq!(Accident::Flat.to_i8(), -1);
        assert_eq!(Accident::Natural.to_i8(), 0);
        assert_eq!(Accident::Sharp.to_i8(), 1);
        assert_eq!(Accident::DoubleSharp.to_i8(), 2);
    }
}
