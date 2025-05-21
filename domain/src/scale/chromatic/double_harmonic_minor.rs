use crate::{interval::Interval, note::chromatic::ChromaticNote};

use super::build::build_scale;

const DOUBLE_HARMONIC_MINOR_SCALE: [Interval; 6] = [
    Interval::WholeTone,
    Interval::HalfTone,
    Interval::WholeAndHalfTone,
    Interval::HalfTone,
    Interval::HalfTone,
    Interval::WholeAndHalfTone,
];

pub fn double_harmonic_minor_scale_of(root: ChromaticNote) -> Vec<ChromaticNote> {
    build_scale(root, &DOUBLE_HARMONIC_MINOR_SCALE.to_vec())
}

#[cfg(test)]
mod tests {
    use crate::note::chromatic::{ChromaticNote, of_slice};

    use super::double_harmonic_minor_scale_of;

    #[test]
    fn test_build_harmonic_minor_scale() {
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_0), of_slice([0, 2, 3, 6, 7, 8, 11]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_1), of_slice([1, 3, 4, 7, 8, 9, 0]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_2), of_slice([2, 4, 5, 8, 9, 10, 1]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_3), of_slice([3, 5, 6, 9, 10, 11, 2]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_4), of_slice([4, 6, 7, 10, 11, 0, 3]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_5), of_slice([5, 7, 8, 11, 0, 1, 4]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_6), of_slice([6, 8, 9, 0, 1, 2, 5]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_7), of_slice([7, 9, 10, 1, 2, 3, 6]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_8), of_slice([8, 10, 11, 2, 3, 4, 7]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_9), of_slice([9, 11, 0, 3, 4, 5, 8]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_10), of_slice([10, 0, 1, 4, 5, 6, 9]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_11), of_slice([11, 1, 2, 5, 6, 7, 10]));
    }
}
