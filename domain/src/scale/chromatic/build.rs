use crate::{interval::Interval, note::chromatic::ChromaticNote};

pub fn build_scale(root: ChromaticNote, intervals: &Vec<Interval>) -> Vec<ChromaticNote> {
    let mut res = Vec::with_capacity(intervals.len() + 1);
    let mut curr = root;
    res.push(curr.clone());
    for interval in intervals {
        curr = match interval {
            Interval::HalfTone => curr.next(),
            Interval::WholeTone => curr.next().next(),
            Interval::WholeAndHalfTone => curr.next().next().next(),
        };
        res.push(curr.clone());
    }
    res
}
