use crate::{interval::Interval, note::theorical::TheoricalNote};

use super::build::build_scale;

const MAJOR_SCALE: [Interval; 6] =
    [Interval::WholeTone, Interval::WholeTone, Interval::HalfTone, Interval::WholeTone, Interval::WholeTone, Interval::WholeTone];

pub fn major_scale_of(root: TheoricalNote) -> Vec<TheoricalNote> {
    build_scale(root, &MAJOR_SCALE.to_vec())
}

#[cfg(test)]
mod tests {
    use crate::note::theorical::{TheoricalNote, vec_of_slice_str};

    use super::major_scale_of;

    #[test]
    fn build_major_scale_natural() {
        assert_eq!(major_scale_of(TheoricalNote::from_str("D")), vec_of_slice_str(["D", "E", "F♯", "G", "A", "B", "C♯"]));
        assert_eq!(major_scale_of(TheoricalNote::from_str("E")), vec_of_slice_str(["E", "F♯", "G♯", "A", "B", "C♯", "D♯"]));
        assert_eq!(major_scale_of(TheoricalNote::from_str("F")), vec_of_slice_str(["F", "G", "A", "B♭", "C", "D", "E"]));
        assert_eq!(major_scale_of(TheoricalNote::from_str("G")), vec_of_slice_str(["G", "A", "B", "C", "D", "E", "F♯"]));
        assert_eq!(major_scale_of(TheoricalNote::from_str("A")), vec_of_slice_str(["A", "B", "C♯", "D", "E", "F♯", "G♯"]));
        assert_eq!(major_scale_of(TheoricalNote::from_str("B")), vec_of_slice_str(["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯"]));
    }

    #[test]
    fn test_build_major_scale_c() {
        assert_eq!(major_scale_of(TheoricalNote::from_str("C♭")), vec_of_slice_str(["C♭", "D♭", "E♭", "F♭", "G♭", "A♭", "B♭"]));
        assert_eq!(major_scale_of(TheoricalNote::from_str("C")), vec_of_slice_str(["C", "D", "E", "F", "G", "A", "B"]));
        assert_eq!(major_scale_of(TheoricalNote::from_str("C♯")), vec_of_slice_str(["C♯", "D♯", "E♯", "F♯", "G♯", "A♯", "B♯"]));
    }

    #[test]
    fn test_build_major_scale() {
        assert_eq!(major_scale_of(TheoricalNote::from_str("E♯")), vec_of_slice_str(["E♯", "F𝄪", "G𝄪", "A♯", "B♯", "C𝄪", "D𝄪"]));
    }
}
