use crate::{
    accident::Accident,
    interval::Interval,
    note::{
        chromatic::{distance_negative, distance_positive},
        theorical::TheoricalNote,
        transform::{base_note_to_chromatic, theorical_note_to_chromatic},
    },
};

pub fn build_scale<const N: usize>(root: TheoricalNote, intervals: &[Interval; N]) -> Vec<TheoricalNote> {
    let mut res = Vec::with_capacity(intervals.len() + 1);
    res.push(root.clone());

    let mut curr_chromatic = theorical_note_to_chromatic(&root);
    let mut curr_base = root.base;

    for interval in intervals {
        curr_base = curr_base.next();
        curr_chromatic = match interval {
            Interval::HalfTone => curr_chromatic.next(),
            Interval::WholeTone => curr_chromatic.next().next(),
            Interval::WholeAndHalfTone => curr_chromatic.next().next().next(),
        };
        let curr_base_as_chromatic = base_note_to_chromatic(&curr_base);
        let distance_pos = distance_positive(&curr_base_as_chromatic, &curr_chromatic) as i8;
        let distance_neg = distance_negative(&curr_base_as_chromatic, &curr_chromatic) as i8;

        let distance = if distance_pos < distance_neg { distance_pos } else { -distance_neg };
        if let Some(accident_calc) = Accident::try_from_i8(distance) {
            res.push(TheoricalNote { base: curr_base.clone(), accident: accident_calc });
        }
    }

    res
}
