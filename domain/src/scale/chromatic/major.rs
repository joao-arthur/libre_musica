use crate::{interval::Interval, note::chromatic::ChromaticNote};

use super::build::build_scale;

const MAJOR_SCALE: [Interval; 6] = [
    Interval::WholeTone,
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeTone,
    Interval::WholeTone,
    Interval::WholeTone,
];

pub fn major_scale_of(root: ChromaticNote) -> Vec<ChromaticNote> {
    build_scale(root, &MAJOR_SCALE.to_vec())
}

#[cfg(test)]
mod tests {
    use crate::note::chromatic::{ChromaticNote, from_vec};

    use super::major_scale_of;

    #[test]
    fn test_build_major_scale() {
        assert_eq!(major_scale_of(ChromaticNote::_0), from_vec(vec![0, 2, 4, 5, 7, 9, 11]));
        assert_eq!(major_scale_of(ChromaticNote::_1), from_vec(vec![1, 3, 5, 6, 8, 10, 0]));
        assert_eq!(major_scale_of(ChromaticNote::_2), from_vec(vec![2, 4, 6, 7, 9, 11, 1]));
        assert_eq!(major_scale_of(ChromaticNote::_3), from_vec(vec![3, 5, 7, 8, 10, 0, 2]));
        assert_eq!(major_scale_of(ChromaticNote::_4), from_vec(vec![4, 6, 8, 9, 11, 1, 3]));
        assert_eq!(major_scale_of(ChromaticNote::_5), from_vec(vec![5, 7, 9, 10, 0, 2, 4]));
        assert_eq!(major_scale_of(ChromaticNote::_6), from_vec(vec![6, 8, 10, 11, 1, 3, 5]));
        assert_eq!(major_scale_of(ChromaticNote::_7), from_vec(vec![7, 9, 11, 0, 2, 4, 6]));
        assert_eq!(major_scale_of(ChromaticNote::_8), from_vec(vec![8, 10, 0, 1, 3, 5, 7]));
        assert_eq!(major_scale_of(ChromaticNote::_9), from_vec(vec![9, 11, 1, 2, 4, 6, 8]));
        assert_eq!(major_scale_of(ChromaticNote::_10), from_vec(vec![10, 0, 2, 3, 5, 7, 9]));
        assert_eq!(major_scale_of(ChromaticNote::_11), from_vec(vec![11, 1, 3, 4, 6, 8, 10]));
    }
}
