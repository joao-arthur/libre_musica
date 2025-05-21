#[derive(Debug, PartialEq, Clone)]
pub enum Interval {
    HalfTone,
    WholeTone,
    WholeAndHalfTone,
}

impl Interval {
    pub fn to_u8(&self) -> u8 {
        match self {
            Interval::HalfTone => 1,
            Interval::WholeTone => 2,
            Interval::WholeAndHalfTone => 3,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::Interval;

    #[test]
    fn interval_to_u8() {
        assert_eq!(Interval::HalfTone.to_u8(), 1);
        assert_eq!(Interval::WholeTone.to_u8(), 2);
        assert_eq!(Interval::WholeAndHalfTone.to_u8(), 3);
    }
}
