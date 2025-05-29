use std::collections::HashMap;

use crate::note::chromatic::{ChromaticNote, vec_of_slice_u8};

use super::Instrument;

#[derive(Debug, PartialEq, Eq, Hash)]
struct Tuning {
    pub instrument: Instrument,
    pub strings: u8,
    pub id: String,
}

fn tuning_map() -> HashMap<Tuning, Vec<ChromaticNote>> {
    HashMap::from([
        (Tuning { instrument: Instrument::Bass, strings: 4, id: "standard".into() }, vec_of_slice_u8([4, 9, 2, 7])),
        (Tuning { instrument: Instrument::Bass, strings: 4, id: "standard_half_below".into() }, vec_of_slice_u8([3, 8, 1, 6])),
        (Tuning { instrument: Instrument::Bass, strings: 4, id: "standard_tone_below".into() }, vec_of_slice_u8([2, 7, 0, 5])),
        (Tuning { instrument: Instrument::Bass, strings: 4, id: "new_standard".into() }, vec_of_slice_u8([0, 7, 2, 9])),
        (Tuning { instrument: Instrument::Bass, strings: 4, id: "drop_d".into() }, vec_of_slice_u8([2, 9, 2, 7])),
        (Tuning { instrument: Instrument::Bass, strings: 4, id: "drop_c".into() }, vec_of_slice_u8([0, 7, 0, 5])),
        (Tuning { instrument: Instrument::Bass, strings: 5, id: "standard".into() }, vec_of_slice_u8([11, 4, 9, 2, 7])),
        (Tuning { instrument: Instrument::Bass, strings: 6, id: "standard".into() }, vec_of_slice_u8([11, 4, 9, 2, 7, 0])),
        (Tuning { instrument: Instrument::Guitar, strings: 6, id: "standard".into() }, vec_of_slice_u8([4, 9, 2, 7, 11, 4])),
        (Tuning { instrument: Instrument::Guitar, strings: 6, id: "standard_half_below".into() }, vec_of_slice_u8([3, 8, 1, 6, 10, 3])),
        (Tuning { instrument: Instrument::Guitar, strings: 6, id: "standard_tone_below".into() }, vec_of_slice_u8([2, 7, 0, 5, 9, 2])),
        (Tuning { instrument: Instrument::Guitar, strings: 6, id: "new_standard".into() }, vec_of_slice_u8([0, 7, 2, 9, 4, 7])),
        (Tuning { instrument: Instrument::Guitar, strings: 6, id: "drop_d".into() }, vec_of_slice_u8([2, 9, 2, 7, 11, 4])),
        (Tuning { instrument: Instrument::Guitar, strings: 6, id: "drop_c".into() }, vec_of_slice_u8([0, 7, 0, 5, 9, 2])),
        (Tuning { instrument: Instrument::Guitar, strings: 7, id: "standard".into() }, vec_of_slice_u8([11, 4, 9, 2, 7, 11, 4])),
    ])
}
