use crate::{
    accident::{self, Accident},
    interval::Interval,
    note::{
        chromatic::ChromaticNote,
        theorical::{BaseNote, TheoricalNote},
        transform::{base_note_to_chromatic, theorical_note_to_chromatic},
    },
};

pub fn build_scale(root: TheoricalNote, intervals: &Vec<Interval>) -> Vec<TheoricalNote> {
    let mut res = Vec::new();

    let mut theorical_acc: i8 = root.accident.to_i8();
    let mut chromatic_acc: i8 = 0;

    let mut theorical = root.base.to_u8();

    res.push(root);

    for interval in intervals {
        theorical_acc += interval.to_u8() as i8;
        chromatic_acc += interval.to_u8() as i8;
        let diff = theorical_acc - chromatic_acc;

        theorical += 1;
        if theorical > 6 {
            theorical -= 7;
        }

        if let Some(base) = BaseNote::try_from_u8(theorical) {
            if let Some(accident) = Accident::try_from_i8(diff) {
                res.push(TheoricalNote { base, accident })
            }
        }
    }

    res
}
