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
    use crate::note::chromatic::{ChromaticNote, vec_of_slice_u8};

    use super::double_harmonic_minor_scale_of;

    #[test]
    fn test_build_harmonic_minor_scale() {
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_0), vec_of_slice_u8([0, 2, 3, 6, 7, 8, 11]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_1), vec_of_slice_u8([1, 3, 4, 7, 8, 9, 0]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_2), vec_of_slice_u8([2, 4, 5, 8, 9, 10, 1]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_3), vec_of_slice_u8([3, 5, 6, 9, 10, 11, 2]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_4), vec_of_slice_u8([4, 6, 7, 10, 11, 0, 3]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_5), vec_of_slice_u8([5, 7, 8, 11, 0, 1, 4]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_6), vec_of_slice_u8([6, 8, 9, 0, 1, 2, 5]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_7), vec_of_slice_u8([7, 9, 10, 1, 2, 3, 6]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_8), vec_of_slice_u8([8, 10, 11, 2, 3, 4, 7]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_9), vec_of_slice_u8([9, 11, 0, 3, 4, 5, 8]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_10), vec_of_slice_u8([10, 0, 1, 4, 5, 6, 9]));
        assert_eq!(double_harmonic_minor_scale_of(ChromaticNote::_11), vec_of_slice_u8([11, 1, 2, 5, 6, 7, 10]));
    }
}
