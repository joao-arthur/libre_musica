enum MusicalNote {
    A,
    AB,
    B,
    C,
    CD,
    D,
    DE,
    E,
    F,
    FG,
    G,
    GA,
}

fn musical_note_is_accident(mn: MusicalNote) -> bool {
    match mn {
        MusicalNote::A => false,
        MusicalNote::AB => true,
        MusicalNote::B => false,
        MusicalNote::C => false,
        MusicalNote::CD => true,
        MusicalNote::D => false,
        MusicalNote::DE => true,
        MusicalNote::E => false,
        MusicalNote::F => false,
        MusicalNote::FG => true,
        MusicalNote::G => false,
        MusicalNote::GA => true,
    }
}

enum StandardScale {
    A,
    B,
    C,
    D,
    E,
    F,
    G,
}

fn fmt_sharp() -> &'static str {
    "♯"
}

fn fmt_flat() -> &'static str {
    "♭"
}

enum Tone {
    Semitone,
    Tone,
    ToneAndHalf,
}

enum Octave {
    _0,
    _1,
    _2,
    _3,
    _4,
    _5,
    _6,
    _7,
    _8,
    _9,
}

struct InstrumentNote {
    musical_note: MusicalNote,
}

fn main() {
    println!("Hello, world!");
}
