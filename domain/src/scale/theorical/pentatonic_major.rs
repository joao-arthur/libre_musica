use crate::note::theorical::TheoricalNote;

use super::major::major_scale_of;

pub fn pentatonic_major_scale_of(root: TheoricalNote) -> Vec<TheoricalNote> {
    let mut scale = major_scale_of(root);
    scale.remove(6);
    scale.remove(3);
    scale
}

#[cfg(test)]
mod tests {
    use crate::note::theorical::{TheoricalNote, vec_of_slice_str};

    use super::pentatonic_major_scale_of;

    #[test]
    fn build_pentatonic_major_scale_of_c() {
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("C𝄫")), vec_of_slice_str(["C𝄫", "D𝄫", "E𝄫", "G𝄫", "A𝄫"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("C♭")), vec_of_slice_str(["C♭", "D♭", "E♭", "G♭", "A♭"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("C")), vec_of_slice_str(["C", "D", "E", "G", "A"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("C♯")), vec_of_slice_str(["C♯", "D♯", "E♯", "G♯", "A♯"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("C𝄪")), vec_of_slice_str(["C𝄪", "D𝄪", "E𝄪", "G𝄪", "A𝄪"]));
    }

    #[test]
    fn build_pentatonic_major_scale_of_d() {
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("D♭")), vec_of_slice_str(["D♭", "E♭", "F", "A♭", "B♭"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("D")), vec_of_slice_str(["D", "E", "F♯", "A", "B"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("D♯")), vec_of_slice_str(["D♯", "E♯", "F𝄪", "A♯", "B♯"]));
    }

    #[test]
    fn build_pentatonic_major_scale_of_e() {
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("E♭")), vec_of_slice_str(["E♭", "F", "G", "B♭", "C"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("E")), vec_of_slice_str(["E", "F♯", "G♯", "B", "C♯"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("E♯")), vec_of_slice_str(["E♯", "F𝄪", "G𝄪", "B♯", "C𝄪"]));
    }

    #[test]
    fn build_pentatonic_major_scale_of_f() {
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("F♭")), vec_of_slice_str(["F♭", "G♭", "A♭", "C♭", "D♭"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("F")), vec_of_slice_str(["F", "G", "A", "C", "D"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("F♯")), vec_of_slice_str(["F♯", "G♯", "A♯", "C♯", "D♯"]));
    }

    #[test]
    fn build_pentatonic_major_scale_of_g() {
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("G♭")), vec_of_slice_str(["G♭", "A♭", "B♭", "D♭", "E♭"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("G")), vec_of_slice_str(["G", "A", "B", "D", "E"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("G♯")), vec_of_slice_str(["G♯", "A♯", "B♯", "D♯", "E♯"]));
    }

    #[test]
    fn build_pentatonic_major_scale_of_a() {
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("A♭")), vec_of_slice_str(["A♭", "B♭", "C", "E♭", "F"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("A")), vec_of_slice_str(["A", "B", "C♯", "E", "F♯"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("A♯")), vec_of_slice_str(["A♯", "B♯", "C𝄪", "E♯", "F𝄪"]));
    }

    #[test]
    fn build_pentatonic_major_scale_of_b() {
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("B♭")), vec_of_slice_str(["B♭", "C", "D", "F", "G"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("B")), vec_of_slice_str(["B", "C♯", "D♯", "F♯", "G♯"]));
        assert_eq!(pentatonic_major_scale_of(TheoricalNote::from_str("B♯")), vec_of_slice_str(["B♯", "C𝄪", "D𝄪", "F𝄪", "G𝄪"]));
    }
}
