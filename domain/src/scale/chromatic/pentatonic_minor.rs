use crate::{interval::Interval, note::chromatic::ChromaticNote};

use super::build::build_scale;

const PENTATONIC_MINOR_SCALE: [Interval; 4] = [
    Interval::WholeAndHalfTone,
    Interval::WholeTone,
    Interval::WholeTone,
    Interval::WholeAndHalfTone,
];

pub fn pentatonic_minor_scale_of(root: ChromaticNote) -> Vec<ChromaticNote> {
    build_scale(root, &PENTATONIC_MINOR_SCALE.to_vec())
}

#[cfg(test)]
mod tests {
    use crate::note::chromatic::{ChromaticNote, of_slice};

    use super::pentatonic_minor_scale_of;

    #[test]
    fn test_build_minor_scale() {
        assert_eq!(pentatonic_minor_scale_of(ChromaticNote::_0), of_slice([0, 3, 5, 7, 10]));
        assert_eq!(pentatonic_minor_scale_of(ChromaticNote::_1), of_slice([1, 4, 6, 8, 11]));
        assert_eq!(pentatonic_minor_scale_of(ChromaticNote::_2), of_slice([2, 5, 7, 9, 0]));
        assert_eq!(pentatonic_minor_scale_of(ChromaticNote::_3), of_slice([3, 6, 8, 10, 1]));
        assert_eq!(pentatonic_minor_scale_of(ChromaticNote::_4), of_slice([4, 7, 9, 11, 2]));
        assert_eq!(pentatonic_minor_scale_of(ChromaticNote::_5), of_slice([5, 8, 10, 0, 3]));
        assert_eq!(pentatonic_minor_scale_of(ChromaticNote::_6), of_slice([6, 9, 11, 1, 4]));
        assert_eq!(pentatonic_minor_scale_of(ChromaticNote::_7), of_slice([7, 10, 0, 2, 5]));
        assert_eq!(pentatonic_minor_scale_of(ChromaticNote::_8), of_slice([8, 11, 1, 3, 6]));
        assert_eq!(pentatonic_minor_scale_of(ChromaticNote::_9), of_slice([9, 0, 2, 4, 7]));
        assert_eq!(pentatonic_minor_scale_of(ChromaticNote::_10), of_slice([10, 1, 3, 5, 8]));
        assert_eq!(pentatonic_minor_scale_of(ChromaticNote::_11), of_slice([11, 2, 4, 6, 9]));
    }
}
