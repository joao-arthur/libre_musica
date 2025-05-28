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
    let mut chromatic_curr_base = base_note_to_chromatic(&root.base).to_u8() as i8;
    let mut chromatic_curr = base_note_to_chromatic(&root.base).to_u8() as i8 + root.accident.to_i8();
    let mut theorical_curr = root.base.to_u8();

    let mut res = Vec::with_capacity(intervals.len() + 1);
    res.push(root);

    for interval in intervals {
        chromatic_curr_base += interval.to_u8() as i8;
        chromatic_curr += interval.to_u8() as i8;
        theorical_curr += 1;
        
        let diff: i8 = (chromatic_curr as i8) - (chromatic_curr_base as i8);

        if let Some(accident) = Accident::try_from_i8(diff) {
            if let Some(base) = BaseNote::try_from_u8(theorical_curr % 8) {
                res.push(TheoricalNote {
                    base: base,
                    accident: accident
                });
            }
        }
    }

    res
}
