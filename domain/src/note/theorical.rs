use crate::accident::Accident;

#[derive(Debug, PartialEq, Clone)]
pub enum BaseNote {
    C,
    D,
    E,
    F,
    G,
    A,
    B,
}

impl BaseNote {
    pub fn to_u8(&self) -> u8 {
        match self {
            BaseNote::C => 0,
            BaseNote::D => 1,
            BaseNote::E => 2,
            BaseNote::F => 3,
            BaseNote::G => 4,
            BaseNote::A => 5,
            BaseNote::B => 6,
        }
    }

    pub fn try_from_u8(num: u8) -> Option<BaseNote> {
        match num {
            0 => Some(BaseNote::C),
            1 => Some(BaseNote::D),
            2 => Some(BaseNote::E),
            3 => Some(BaseNote::F),
            4 => Some(BaseNote::G),
            5 => Some(BaseNote::A),
            6 => Some(BaseNote::B),
            _ => None,
        }
    }
}

#[derive(Debug, PartialEq, Clone)]
pub struct TheoricalNote {
    pub base: BaseNote,
    pub accident: Accident,
}

pub fn of_vec(vec: Vec<u8>) -> Vec<BaseNote> {
    vec.iter().map(|num| BaseNote::try_from_u8(*num)).filter_map(|num| num).collect()
}

pub fn of_slice<const N: usize>(slice: [u8; N]) -> Vec<BaseNote> {
    slice.to_vec().iter().map(|num| BaseNote::try_from_u8(*num)).filter_map(|num| num).collect()
}

#[cfg(test)]
mod tests {
    use super::{BaseNote, of_vec, of_slice};

    #[test]
    pub fn chromatic_note_try_from_u8() {
        assert_eq!(BaseNote::try_from_u8(0), Some(BaseNote::C));
        assert_eq!(BaseNote::try_from_u8(1), Some(BaseNote::D));
        assert_eq!(BaseNote::try_from_u8(2), Some(BaseNote::E));
        assert_eq!(BaseNote::try_from_u8(3), Some(BaseNote::F));
        assert_eq!(BaseNote::try_from_u8(4), Some(BaseNote::G));
        assert_eq!(BaseNote::try_from_u8(5), Some(BaseNote::A));
        assert_eq!(BaseNote::try_from_u8(6), Some(BaseNote::B));
    }

    #[test]
    pub fn chromatic_note_to_u8() {
        assert_eq!(BaseNote::C.to_u8(), 0);
        assert_eq!(BaseNote::D.to_u8(), 1);
        assert_eq!(BaseNote::E.to_u8(), 2);
        assert_eq!(BaseNote::F.to_u8(), 3);
        assert_eq!(BaseNote::G.to_u8(), 4);
        assert_eq!(BaseNote::A.to_u8(), 5);
        assert_eq!(BaseNote::B.to_u8(), 6);
    }

    #[test]
    fn test_from_vec() {
        assert_eq!(of_vec(vec![0, 1]), vec![BaseNote::C, BaseNote::D]);
        assert_eq!(of_vec(vec![2, 3]), vec![BaseNote::E, BaseNote::F]);
        assert_eq!(of_vec(vec![4, 5]), vec![BaseNote::G, BaseNote::A]);
        assert_eq!(of_vec(vec![6, 7]), vec![BaseNote::B]);
        assert_eq!(of_vec(vec![8, 9]), vec![]);
    }

    #[test]
    fn test_from_slice() {
        assert_eq!(of_slice([0, 1]), vec![BaseNote::C, BaseNote::D]);
        assert_eq!(of_slice([2, 3]), vec![BaseNote::E, BaseNote::F]);
        assert_eq!(of_slice([4, 5]), vec![BaseNote::G, BaseNote::A]);
        assert_eq!(of_slice([6, 7]), vec![BaseNote::B]);
        assert_eq!(of_slice([8, 9]), vec![]);
    }
}
