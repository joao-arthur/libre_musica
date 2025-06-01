use crate::note::theorical::TheoricalNote;

use super::{build::build_scale, minor::minor_scale_of};

pub fn pentatonic_minor_scale_of(root: TheoricalNote) -> Vec<TheoricalNote> {
    let mut scale = minor_scale_of(root);
    scale.remove(5);
    scale.remove(1);
    scale
}

#[cfg(test)]
mod tests {
    use crate::note::theorical::{TheoricalNote, vec_of_slice_str};

    use super::pentatonic_minor_scale_of;

    #[test]
    fn build_pentatonic_minor_scale_of_c() {
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("C♭")), vec_of_slice_str(["C♭", "E𝄫", "F♭", "G♭", "B𝄫"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("C")), vec_of_slice_str(["C", "E♭", "F", "G", "B♭"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("C♯")), vec_of_slice_str(["C♯", "E", "F♯", "G♯", "B"]));
    }

    #[test]
    fn build_pentatonic_minor_scale_of_d() {
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("D♭")), vec_of_slice_str(["D♭", "F♭", "G♭", "A♭", "C♭"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("D")), vec_of_slice_str(["D", "F", "G", "A", "C"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("D♯")), vec_of_slice_str(["D♯", "F♯", "G♯", "A♯", "C♯"]));
    }

    #[test]
    fn build_pentatonic_minor_scale_of_e() {
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("E♭")), vec_of_slice_str(["E♭", "G♭", "A♭", "B♭", "D♭"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("E")), vec_of_slice_str(["E", "G", "A", "B", "D"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("E♯")), vec_of_slice_str(["E♯", "G♯", "A♯", "B♯", "D♯"]));
    }

    #[test]
    fn build_pentatonic_minor_scale_of_f() {
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("F♭")), vec_of_slice_str(["F♭", "A𝄫", "B𝄫", "C♭", "E𝄫"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("F")), vec_of_slice_str(["F", "A♭", "B♭", "C", "E♭"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("F♯")), vec_of_slice_str(["F♯", "A", "B", "C♯", "E"]));
    }

    #[test]
    fn build_pentatonic_minor_scale_of_g() {
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("G♭")), vec_of_slice_str(["G♭", "B𝄫", "C♭", "D♭", "F♭"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("G")), vec_of_slice_str(["G", "B♭", "C", "D", "F"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("G♯")), vec_of_slice_str(["G♯", "B", "C♯", "D♯", "F♯"]));
    }

    #[test]
    fn build_pentatonic_minor_scale_of_a() {
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("A𝄫")), vec_of_slice_str(["A𝄫", "C𝄫", "D𝄫", "E𝄫", "G𝄫"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("A♭")), vec_of_slice_str(["A♭", "C♭", "D♭", "E♭", "G♭"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("A")), vec_of_slice_str(["A", "C", "D", "E", "G"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("A♯")), vec_of_slice_str(["A♯", "C♯", "D♯", "E♯", "G♯"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("A𝄪")), vec_of_slice_str(["A𝄪", "C𝄪", "D𝄪", "E𝄪", "G𝄪"]));
    }

    #[test]
    fn build_pentatonic_minor_scale_of_b() {
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("B♭")), vec_of_slice_str(["B♭", "D♭", "E♭", "F", "A♭"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("B")), vec_of_slice_str(["B", "D", "E", "F♯", "A"]));
        assert_eq!(pentatonic_minor_scale_of(TheoricalNote::from_str("B♯")), vec_of_slice_str(["B♯", "D♯", "E♯", "F𝄪", "A♯"]));
    }
}
