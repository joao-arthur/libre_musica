use crate::{note::theorical::TheoricalNote, scale::categories::MINOR};

use super::build::build_scale;

pub fn minor_scale_of(root: TheoricalNote) -> Vec<TheoricalNote> {
    build_scale(root, &MINOR)
}

#[cfg(test)]
mod tests {
    use crate::note::theorical::{TheoricalNote, vec_of_slice_str};

    use super::minor_scale_of;

    #[test]
    fn build_minor_scale_c() {
        assert_eq!(minor_scale_of(TheoricalNote::from_str("C♭")), vec_of_slice_str(["C♭", "D♭", "E𝄫", "F♭", "G♭", "A𝄫", "B𝄫"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("C")), vec_of_slice_str(["C", "D", "E♭", "F", "G", "A♭", "B♭"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("C♯")), vec_of_slice_str(["C♯", "D♯", "E", "F♯", "G♯", "A", "B"]));
    }

    #[test]
    fn build_minor_scale_d() {
        assert_eq!(minor_scale_of(TheoricalNote::from_str("D♭")), vec_of_slice_str(["D♭", "E♭", "F♭", "G♭", "A♭", "B𝄫", "C♭"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("D")), vec_of_slice_str(["D", "E", "F", "G", "A", "B♭", "C"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("D♯")), vec_of_slice_str(["D♯", "E♯", "F♯", "G♯", "A♯", "B", "C♯"]));
    }

    #[test]
    fn build_minor_scale_e() {
        assert_eq!(minor_scale_of(TheoricalNote::from_str("E♭")), vec_of_slice_str(["E♭", "F", "G♭", "A♭", "B♭", "C♭", "D♭"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("E")), vec_of_slice_str(["E", "F♯", "G", "A", "B", "C", "D"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("E♯")), vec_of_slice_str(["E♯", "F𝄪", "G♯", "A♯", "B♯", "C♯", "D♯"]));
    }

    #[test]
    fn build_minor_scale_f() {
        assert_eq!(minor_scale_of(TheoricalNote::from_str("F♭")), vec_of_slice_str(["F♭", "G♭", "A𝄫", "B𝄫", "C♭", "D𝄫", "E𝄫"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("F")), vec_of_slice_str(["F", "G", "A♭", "B♭", "C", "D♭", "E♭"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("F♯")), vec_of_slice_str(["F♯", "G♯", "A", "B", "C♯", "D", "E"]));
    }

    #[test]
    fn build_minor_scale_g() {
        assert_eq!(minor_scale_of(TheoricalNote::from_str("G♭")), vec_of_slice_str(["G♭", "A♭", "B𝄫", "C♭", "D♭", "E𝄫", "F♭"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("G")), vec_of_slice_str(["G", "A", "B♭", "C", "D", "E♭", "F"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("G♯")), vec_of_slice_str(["G♯", "A♯", "B", "C♯", "D♯", "E", "F♯"]));
    }

    #[test]
    fn build_minor_scale_a() {
        assert_eq!(minor_scale_of(TheoricalNote::from_str("A𝄫")), vec_of_slice_str(["A𝄫", "B𝄫", "C𝄫", "D𝄫", "E𝄫", "F𝄫", "G𝄫"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("A♭")), vec_of_slice_str(["A♭", "B♭", "C♭", "D♭", "E♭", "F♭", "G♭"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("A")), vec_of_slice_str(["A", "B", "C", "D", "E", "F", "G"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("A♯")), vec_of_slice_str(["A♯", "B♯", "C♯", "D♯", "E♯", "F♯", "G♯"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("A𝄪")), vec_of_slice_str(["A𝄪", "B𝄪", "C𝄪", "D𝄪", "E𝄪", "F𝄪", "G𝄪"]));
    }

    #[test]
    fn build_minor_scale_b() {
        assert_eq!(minor_scale_of(TheoricalNote::from_str("B♭")), vec_of_slice_str(["B♭", "C", "D♭", "E♭", "F", "G♭", "A♭"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("B")), vec_of_slice_str(["B", "C♯", "D", "E", "F♯", "G", "A"]));
        assert_eq!(minor_scale_of(TheoricalNote::from_str("B♯")), vec_of_slice_str(["B♯", "C𝄪", "D♯", "E♯", "F𝄪", "G♯", "A♯"]));
    }
}
