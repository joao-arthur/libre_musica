pub mod fretboard;
pub mod tuning;

#[derive(Debug, PartialEq, Eq, Hash)]
enum Instrument {
    Bass,
    Guitar,
}
