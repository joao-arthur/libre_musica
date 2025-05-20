use crate::{interval::Interval, note::Note};

const MAJOR_SCALE: [Interval; 6] = [
    Interval::WholeTone,
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeTone,
    Interval::WholeTone,
    Interval::WholeTone,
];

const MINOR_SCALE: [Interval; 6] = [
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeTone,
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeTone,
];

const HARMONIC_MAJOR_SCALE: [Interval; 6] = [
    Interval::WholeTone,
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeAndHalfTone,
];

const HARMONIC_MINOR_SCALE: [Interval; 6] = [
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeTone,
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeAndHalfTone,
];

const DOUBLE_HARMONIC_SCALE: [Interval; 6] = [
    Interval::HalfTone,
    Interval::WholeAndHalfTone,
    Interval::HalfTone,
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeAndHalfTone,
];

const PENTATONIC_SCALE: [Interval; 4] =
    [Interval::WholeTone, Interval::WholeTone, Interval::WholeAndHalfTone, Interval::WholeTone];

fn make_scale(root: Note, intervals: &[Interval; 6]) -> [Note; 7] {
    let root_index = root.to_u8();
    let second_index = (root_index + intervals[0].to_u8()) % 12;
    let third_index = (root_index + intervals[0].to_u8() + intervals[1].to_u8()) % 12;
    let fourth_index =
        (root_index + intervals[0].to_u8() + intervals[1].to_u8() + intervals[2].to_u8()) % 12;
    let fifth_index = (root_index
        + intervals[0].to_u8()
        + intervals[1].to_u8()
        + intervals[2].to_u8()
        + intervals[3].to_u8())
        % 12;
    let sixth_index = (root_index
        + intervals[0].to_u8()
        + intervals[1].to_u8()
        + intervals[2].to_u8()
        + intervals[3].to_u8()
        + intervals[4].to_u8())
        % 12;
    let seventh_index = (root_index
        + intervals[0].to_u8()
        + intervals[1].to_u8()
        + intervals[2].to_u8()
        + intervals[3].to_u8()
        + intervals[4].to_u8()
        + intervals[5].to_u8())
        % 12;
    [
        Note::try_from_u8(root_index).unwrap(),
        Note::try_from_u8(second_index).unwrap(),
        Note::try_from_u8(third_index).unwrap(),
        Note::try_from_u8(fourth_index).unwrap(),
        Note::try_from_u8(fifth_index).unwrap(),
        Note::try_from_u8(sixth_index).unwrap(),
        Note::try_from_u8(seventh_index).unwrap(),
    ]
}

pub fn make_major_scale(root: Note) -> [Note; 7] {
    make_scale(root, &MAJOR_SCALE)
}

pub fn make_minor_scale(root: Note) -> [Note; 7] {
    make_scale(root, &MINOR_SCALE)
}

pub fn make_harmonic_major_scale(root: Note) -> [Note; 7] {
    make_scale(root, &HARMONIC_MAJOR_SCALE)
}

pub fn make_harmonic_minor_scale(root: Note) -> [Note; 7] {
    make_scale(root, &HARMONIC_MINOR_SCALE)
}

pub fn make_double_harmonic_major_scale(root: Note) -> [Note; 7] {
    make_scale(root, &DOUBLE_HARMONIC_SCALE)
}

// pub fn make_pentatonic_scale(root: Note) -> [Note; 7] {
//     make_scale(root, &PENTATONIC_SCALE)
// }

#[cfg(test)]
mod tests {
    use crate::note::Note;

    use super::{
        make_harmonic_major_scale, make_harmonic_minor_scale, make_major_scale, make_minor_scale,
    };

    #[test]
    fn test_make_major_scale() {
        assert_eq!(
            make_major_scale(Note::C),
            [Note::C, Note::D, Note::E, Note::F, Note::G, Note::A, Note::B]
        );
        assert_eq!(
            make_major_scale(Note::G),
            [Note::G, Note::A, Note::B, Note::C, Note::D, Note::E, Note::FG]
        );
    }

    #[test]
    fn test_make_minor_scale() {
        assert_eq!(
            make_minor_scale(Note::A),
            [Note::A, Note::B, Note::C, Note::D, Note::E, Note::F, Note::G]
        );
        assert_eq!(
            make_minor_scale(Note::E),
            [Note::E, Note::FG, Note::G, Note::A, Note::B, Note::C, Note::D]
        );
    }

    #[test]
    fn test_make_harmonic_minor_scale() {
        assert_eq!(
            make_harmonic_minor_scale(Note::A),
            [Note::A, Note::B, Note::C, Note::D, Note::E, Note::F, Note::GA]
        );
    }

    #[test]
    fn test_make_hamornic_major_scale() {
        assert_eq!(
            make_harmonic_major_scale(Note::G),
            [Note::G, Note::A, Note::B, Note::C, Note::D, Note::DE, Note::FG]
        );
    }
}
