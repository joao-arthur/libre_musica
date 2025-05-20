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
