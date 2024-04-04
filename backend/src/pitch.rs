use crate::note::Note;

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

fn note_base_frequency(note: Note) -> f32 {
    match note {
        Note::C => 16.351,
        Note::CD => 17.324,
        Note::D => 18.354,
        Note::DE => 19.445,
        Note::E => 20.601,
        Note::F => 21.827,
        Note::FG => 23.124,
        Note::G => 24.499,
        Note::GA => 25.956,
        Note::A => 27.5,
        Note::AB => 29.135,
        Note::B => 30.868,
    }
}

fn note_pitch(note: Note, octave: OctavePitch) -> f32 {
    let base_frequency = note_base_frequency(note);
    let factor = octave.to_u8();
    let base: i32 = 2;

    base_frequency * (base.pow(factor as u32) as f32)
}

#[cfg(test)]
mod test_pitch {
    use super::*;
    use crate::note::Note;

    #[test]
    pub fn test_note_pitch() {
        assert_eq!(note_pitch(Note::A, OctavePitch::_0), 27.5);
        assert_eq!(note_pitch(Note::A, OctavePitch::_1), 55.0);
        assert_eq!(note_pitch(Note::A, OctavePitch::_2), 110.0);
        assert_eq!(note_pitch(Note::A, OctavePitch::_3), 220.0);
        assert_eq!(note_pitch(Note::A, OctavePitch::_4), 440.0);
    }
}
