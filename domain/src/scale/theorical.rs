use crate::{
    accident::Accident,
    interval::Interval,
    note::{
        chromatic::ChromaticNote,
        theorical::{BaseNote, TheoricalNote},
        transform::{base_note_to_chromatic, theorical_note_to_chromatic},
    },
};

pub fn build_scale(root: TheoricalNote, intervals: &Vec<Interval>) -> Vec<TheoricalNote> {
    let mut curr_base = root.base.to_u8();
    let mut curr_chromatic = theorical_note_to_chromatic(&root).to_u8();
    let mut curr_base_octaves = 0;
    let mut curr_chromatic_octaves = 0;
    let mut res = Vec::with_capacity(intervals.len() + 1);
    res.push(root);
    for interval in intervals {
        curr_base += 1;
        if curr_base > 6 {
            curr_base -= 7;
            curr_base_octaves += 1;
        }
        curr_chromatic += interval.to_u8();
        if curr_chromatic > 11 {
            curr_chromatic -= 12;
            curr_chromatic_octaves += 1;
        }
        if let Some(base) = BaseNote::try_from_u8(curr_base) {
            let curr_base_as_chromatic = base_note_to_chromatic(&base).to_u8();
            let diff = ((curr_chromatic + (curr_chromatic_octaves * 12)) as i8) - ((curr_base_as_chromatic + (curr_base_octaves * 12)) as i8);
            match diff {
                -2 => res.push(TheoricalNote { base, accident: Accident::DoubleFlat }),
                -1 => res.push(TheoricalNote { base, accident: Accident::Flat }),
                -0 => res.push(TheoricalNote { base, accident: Accident::Natural }),
                1 => res.push(TheoricalNote { base, accident: Accident::Sharp }),
                2 => res.push(TheoricalNote { base, accident: Accident::DoubleSharp }),
                _ => {}
            }
        }
    }
    res
}

#[cfg(test)]
mod tests {
    use crate::{
        accident::Accident,
        interval::Interval,
        note::{
            chromatic::ChromaticNote,
            theorical::{BaseNote, TheoricalNote},
        },
    };

    use super::build_scale;

    #[test]
    fn test_build_major_scale() {
        let major_scale: [Interval; 6] = [
            Interval::WholeTone,
            Interval::WholeTone,
            Interval::HalfTone,
            Interval::WholeTone,
            Interval::WholeTone,
            Interval::WholeTone,
        ];
        assert_eq!(
            build_scale(
               TheoricalNote::from_str("C♭"),
                &major_scale.to_vec()
            ),
            vec![
               TheoricalNote::from_str("C♭"),
               TheoricalNote::from_str("D♭"),
               TheoricalNote::from_str("E♭"),
               TheoricalNote::from_str("F♭"),
               TheoricalNote::from_str("G♭"),
               TheoricalNote::from_str("A♭"),
               TheoricalNote::from_str("B♭"),
            ]
        );
        assert_eq!(
            build_scale(
                TheoricalNote::from_str("C"),
                &major_scale.to_vec()
            ),
            vec![
                TheoricalNote::from_str("C"),
                TheoricalNote::from_str("D"),
                TheoricalNote::from_str("E"),
                TheoricalNote::from_str("F"),
                TheoricalNote::from_str("G"),
                TheoricalNote::from_str("A"),
                TheoricalNote::from_str("B"),
            ]
        );
         assert_eq!(
             build_scale(
                TheoricalNote::from_str("C♯"),
                 &major_scale.to_vec()
             ),
             vec![
                TheoricalNote::from_str("C♯"),
                TheoricalNote::from_str("D♯"),
                TheoricalNote::from_str("E♯"),
                TheoricalNote::from_str("F♯"),
                TheoricalNote::from_str("G♯"),
                TheoricalNote::from_str("A♯"),
                TheoricalNote::from_str("B♯"),
             ]
         );
    }
}
