pub mod interval;
pub mod note;
pub mod pitch;
pub mod scale;

//fn musical_note_is_accident(n: WesternNote) -> bool {
//    match n {
//        WesternNote::A => false,
//        WesternNote::AB => true,
//        WesternNote::B => false,
//        WesternNote::C => false,
//        WesternNote::CD => true,
//        WesternNote::D => false,
//        WesternNote::DE => true,
//        WesternNote::E => false,
//        WesternNote::F => false,
//        WesternNote::FG => true,
//        WesternNote::G => false,
//        WesternNote::GA => true,
//    }
//}

//fn fmt_sharp() -> &'static str {
//   "♯"
//}

//fn fmt_flat() -> &'static str {
//    "♭"
//}

//struct InstrumentNote {
//    musical_note: WesternNote,
//}

fn main() {
    println!("Hello, world!");
}

//#[cfg(test)]
//mod test_main {
//    use super::*;
//    use crate::note::WesternNote;
//
//    #[test]
//    fn test_is_accident() {
//        assert_eq!(musical_note_is_accident(WesternNote::A), false);
//        assert_eq!(musical_note_is_accident(WesternNote::AB), true);
//    }
//}
