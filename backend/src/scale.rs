use crate::interval::Interval;

pub const MAJOR_SCALE: [Interval; 7] = [
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeTone,
    Interval::WholeTone,
    Interval::HalfTone,
];

pub const MINOR_SCALE: [Interval; 7] = [
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeTone,
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeTone,
    Interval::HalfTone,
];
