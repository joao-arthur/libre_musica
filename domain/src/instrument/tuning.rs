use std::collections::HashMap;

use crate::note::Note;

use super::Instrument;

#[derive(Debug, PartialEq, Eq, Hash)]
struct Tuning {
    pub instrument: Instrument,
    pub strings: u8,
    pub id: String,
}

fn tuning_map() -> HashMap<Tuning, Vec<Note>> {
    HashMap::from([
        (
            Tuning { instrument: Instrument::Bass, strings: 4, id: String::from("standard") },
            vec![Note::E, Note::A, Note::D, Note::G],
        ),
        (
            Tuning {
                instrument: Instrument::Bass,
                strings: 4,
                id: String::from("standard_half_below"),
            },
            vec![Note::DE, Note::GA, Note::CD, Note::FG],
        ),
        (
            Tuning {
                instrument: Instrument::Bass,
                strings: 4,
                id: String::from("standard_tone_below"),
            },
            vec![Note::D, Note::G, Note::C, Note::F],
        ),
        (
            Tuning { instrument: Instrument::Bass, strings: 4, id: String::from("new_standard") },
            vec![Note::C, Note::G, Note::D, Note::A],
        ),
        (
            Tuning { instrument: Instrument::Bass, strings: 4, id: String::from("drop_d") },
            vec![Note::D, Note::A, Note::D, Note::G],
        ),
        (
            Tuning { instrument: Instrument::Bass, strings: 4, id: String::from("drop_c") },
            vec![Note::C, Note::G, Note::C, Note::F],
        ),
        (
            Tuning { instrument: Instrument::Bass, strings: 5, id: String::from("standard") },
            vec![Note::B, Note::E, Note::A, Note::D, Note::G],
        ),
        (
            Tuning { instrument: Instrument::Bass, strings: 6, id: String::from("standard") },
            vec![Note::B, Note::E, Note::A, Note::D, Note::G, Note::C],
        ),
        (
            Tuning { instrument: Instrument::Guitar, strings: 6, id: String::from("standard") },
            vec![Note::E, Note::A, Note::D, Note::G, Note::B, Note::E],
        ),
        (
            Tuning {
                instrument: Instrument::Guitar,
                strings: 6,
                id: String::from("standard_half_below"),
            },
            vec![Note::DE, Note::GA, Note::CD, Note::FG, Note::AB, Note::DE],
        ),
        (
            Tuning {
                instrument: Instrument::Guitar,
                strings: 6,
                id: String::from("standard_tone_below"),
            },
            vec![Note::D, Note::G, Note::C, Note::F, Note::A, Note::D],
        ),
        (
            Tuning { instrument: Instrument::Guitar, strings: 6, id: String::from("new_standard") },
            vec![Note::C, Note::G, Note::D, Note::A, Note::E, Note::G],
        ),
        (
            Tuning { instrument: Instrument::Guitar, strings: 6, id: String::from("drop_d") },
            vec![Note::D, Note::A, Note::D, Note::G, Note::B, Note::E],
        ),
        (
            Tuning { instrument: Instrument::Guitar, strings: 6, id: String::from("drop_c") },
            vec![Note::C, Note::G, Note::C, Note::F, Note::A, Note::D],
        ),
        (
            Tuning { instrument: Instrument::Guitar, strings: 7, id: String::from("standard") },
            vec![Note::B, Note::E, Note::A, Note::D, Note::G, Note::B, Note::E],
        ),
    ])
}
