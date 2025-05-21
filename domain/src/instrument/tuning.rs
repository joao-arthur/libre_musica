use std::collections::HashMap;

use crate::note::chromatic::{ChromaticNote, of_slice};

use super::Instrument;

#[derive(Debug, PartialEq, Eq, Hash)]
struct Tuning {
    pub instrument: Instrument,
    pub strings: u8,
    pub id: String,
}

fn tuning_map() -> HashMap<Tuning, Vec<ChromaticNote>> {
    HashMap::from([
        (
            Tuning { instrument: Instrument::Bass, strings: 4, id: "standard".into() },
            of_slice([4, 9, 2, 7]),
        ),
        (
            Tuning { instrument: Instrument::Bass, strings: 4, id: "standard_half_below".into() },
            of_slice([3, 8, 1, 6]),
        ),
        (
            Tuning { instrument: Instrument::Bass, strings: 4, id: "standard_tone_below".into() },
            of_slice([2, 7, 0, 5]),
        ),
        (
            Tuning { instrument: Instrument::Bass, strings: 4, id: "new_standard".into() },
            of_slice([0, 7, 2, 9]),
        ),
        (
            Tuning { instrument: Instrument::Bass, strings: 4, id: "drop_d".into() },
            of_slice([2, 9, 2, 7]),
        ),
        (
            Tuning { instrument: Instrument::Bass, strings: 4, id: "drop_c".into() },
            of_slice([0, 7, 0, 5]),
        ),
        (
            Tuning { instrument: Instrument::Bass, strings: 5, id: "standard".into() },
            of_slice([11, 4, 9, 2, 7]),
        ),
        (
            Tuning { instrument: Instrument::Bass, strings: 6, id: "standard".into() },
            of_slice([11, 4, 9, 2, 7, 0]),
        ),
        (
            Tuning { instrument: Instrument::Guitar, strings: 6, id: "standard".into() },
            of_slice([4, 9, 2, 7, 11, 4]),
        ),
        (
            Tuning { instrument: Instrument::Guitar, strings: 6, id: "standard_half_below".into() },
            of_slice([3, 8, 1, 6, 10, 3]),
        ),
        (
            Tuning { instrument: Instrument::Guitar, strings: 6, id: "standard_tone_below".into() },
            of_slice([2, 7, 0, 5, 9, 2]),
        ),
        (
            Tuning { instrument: Instrument::Guitar, strings: 6, id: "new_standard".into() },
            of_slice([0, 7, 2, 9, 4, 7]),
        ),
        (
            Tuning { instrument: Instrument::Guitar, strings: 6, id: "drop_d".into() },
            of_slice([2, 9, 2, 7, 11, 4]),
        ),
        (
            Tuning { instrument: Instrument::Guitar, strings: 6, id: "drop_c".into() },
            of_slice([0, 7, 0, 5, 9, 2]),
        ),
        (
            Tuning { instrument: Instrument::Guitar, strings: 7, id: "standard".into() },
            of_slice([11, 4, 9, 2, 7, 11, 4]),
        ),
    ])
}
