use crate::interval::Interval;

pub const MAJOR: [Interval; 6] =
    [Interval::WholeTone, Interval::WholeTone, Interval::HalfTone, Interval::WholeTone, Interval::WholeTone, Interval::WholeTone];

pub const PENTATONIC_MAJOR: [Interval; 4] = [Interval::WholeTone, Interval::WholeTone, Interval::WholeAndHalfTone, Interval::WholeTone];

pub const HARMONIC_MAJOR: [Interval; 6] =
    [Interval::WholeTone, Interval::WholeTone, Interval::HalfTone, Interval::WholeTone, Interval::HalfTone, Interval::WholeAndHalfTone];

pub const DOUBLE_HARMONIC_MAJOR: [Interval; 6] =
    [Interval::HalfTone, Interval::WholeAndHalfTone, Interval::HalfTone, Interval::WholeTone, Interval::HalfTone, Interval::WholeAndHalfTone];

pub const MINOR: [Interval; 6] =
    [Interval::WholeTone, Interval::HalfTone, Interval::WholeTone, Interval::WholeTone, Interval::HalfTone, Interval::WholeTone];

pub const PENTATONIC_MINOR: [Interval; 4] = [Interval::WholeAndHalfTone, Interval::WholeTone, Interval::WholeTone, Interval::WholeAndHalfTone];

pub const HARMONIC_MINOR: [Interval; 6] =
    [Interval::WholeTone, Interval::HalfTone, Interval::WholeTone, Interval::WholeTone, Interval::HalfTone, Interval::WholeAndHalfTone];

pub const DOUBLE_HARMONIC_MINOR: [Interval; 6] =
    [Interval::WholeTone, Interval::HalfTone, Interval::WholeAndHalfTone, Interval::HalfTone, Interval::HalfTone, Interval::WholeAndHalfTone];
