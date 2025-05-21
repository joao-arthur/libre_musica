use crate::note::chromatic::ChromaticNote;

pub enum OctavePitch {
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
}

impl OctavePitch {
    pub fn to_u8(&self) -> u8 {
        match self {
            OctavePitch::_0 => 0,
            OctavePitch::_1 => 1,
            OctavePitch::_2 => 2,
            OctavePitch::_3 => 3,
            OctavePitch::_4 => 4,
            OctavePitch::_5 => 5,
            OctavePitch::_6 => 6,
            OctavePitch::_7 => 7,
            OctavePitch::_8 => 8,
            OctavePitch::_9 => 9,
        }
    }
}

fn note_base_frequency(note: ChromaticNote) -> f32 {
    match note {
        ChromaticNote::_0 => 16.351,
        ChromaticNote::_1 => 17.324,
        ChromaticNote::_2 => 18.354,
        ChromaticNote::_3 => 19.445,
        ChromaticNote::_4 => 20.601,
        ChromaticNote::_5 => 21.827,
        ChromaticNote::_6 => 23.124,
        ChromaticNote::_7 => 24.499,
        ChromaticNote::_8 => 25.956,
        ChromaticNote::_9 => 27.5,
        ChromaticNote::_10 => 29.135,
        ChromaticNote::_11 => 30.868,
    }
}

fn note_pitch(note: ChromaticNote, octave: OctavePitch) -> f32 {
    let base_frequency = note_base_frequency(note);
    let factor = octave.to_u8();
    let base: i32 = 2;

    base_frequency * (base.pow(factor as u32) as f32)
}

#[cfg(test)]
mod tests {
    use crate::note::chromatic::ChromaticNote;

    use super::{OctavePitch, note_base_frequency, note_pitch};

    #[test]
    pub fn test_note_base_frequency() {
        assert_eq!(note_base_frequency(ChromaticNote::_0), 16.351);
        assert_eq!(note_base_frequency(ChromaticNote::_1), 17.324);
        assert_eq!(note_base_frequency(ChromaticNote::_2), 18.354);
        assert_eq!(note_base_frequency(ChromaticNote::_3), 19.445);
        assert_eq!(note_base_frequency(ChromaticNote::_4), 20.601);
        assert_eq!(note_base_frequency(ChromaticNote::_5), 21.827);
        assert_eq!(note_base_frequency(ChromaticNote::_6), 23.124);
        assert_eq!(note_base_frequency(ChromaticNote::_7), 24.499);
        assert_eq!(note_base_frequency(ChromaticNote::_8), 25.956);
        assert_eq!(note_base_frequency(ChromaticNote::_9), 27.5);
        assert_eq!(note_base_frequency(ChromaticNote::_10), 29.135);
        assert_eq!(note_base_frequency(ChromaticNote::_11), 30.868);
    }

    #[test]
    pub fn test_note_pitch() {
        assert_eq!(note_pitch(ChromaticNote::_9, OctavePitch::_0), 27.5);
        assert_eq!(note_pitch(ChromaticNote::_9, OctavePitch::_1), 55.0);
        assert_eq!(note_pitch(ChromaticNote::_9, OctavePitch::_2), 110.0);
        assert_eq!(note_pitch(ChromaticNote::_9, OctavePitch::_3), 220.0);
        assert_eq!(note_pitch(ChromaticNote::_9, OctavePitch::_4), 440.0);
    }
}
