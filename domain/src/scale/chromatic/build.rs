use crate::{interval::Interval, note::chromatic::ChromaticNote};

pub fn build_scale(root: ChromaticNote, intervals: &Vec<Interval>) -> Vec<ChromaticNote> {
    let mut curr = root.to_u8();
    let mut res = Vec::with_capacity(intervals.len() + 1);
    res.push(root);
    for interval in intervals {
        curr += interval.to_u8();
        if curr > 11 {
            curr -= 12;
        }
        if let Some(note) = ChromaticNote::try_from_u8(curr) {
            res.push(note);
        }
    }
    res
}
