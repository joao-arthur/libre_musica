use std::fmt;

#[derive(Debug, PartialEq, Clone)]
pub enum ChromaticNote {
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
    _10,
    _11,
}

impl fmt::Display for ChromaticNote {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.to_u8())
    }
}

impl ChromaticNote {
    pub fn to_u8(&self) -> u8 {
        match self {
            ChromaticNote::_0 => 0,
            ChromaticNote::_1 => 1,
            ChromaticNote::_2 => 2,
            ChromaticNote::_3 => 3,
            ChromaticNote::_4 => 4,
            ChromaticNote::_5 => 5,
            ChromaticNote::_6 => 6,
            ChromaticNote::_7 => 7,
            ChromaticNote::_8 => 8,
            ChromaticNote::_9 => 9,
            ChromaticNote::_10 => 10,
            ChromaticNote::_11 => 11,
        }
    }

    pub fn try_from_u8(num: u8) -> Option<ChromaticNote> {
        match num {
            0 => Some(ChromaticNote::_0),
            1 => Some(ChromaticNote::_1),
            2 => Some(ChromaticNote::_2),
            3 => Some(ChromaticNote::_3),
            4 => Some(ChromaticNote::_4),
            5 => Some(ChromaticNote::_5),
            6 => Some(ChromaticNote::_6),
            7 => Some(ChromaticNote::_7),
            8 => Some(ChromaticNote::_8),
            9 => Some(ChromaticNote::_9),
            10 => Some(ChromaticNote::_10),
            11 => Some(ChromaticNote::_11),
            _ => None,
        }
    }

    pub fn from_u8(num: u8) -> ChromaticNote {
        ChromaticNote::try_from_u8(num).unwrap()
    }
}

pub fn vec_of_vec_u8(value: Vec<u8>) -> Vec<ChromaticNote> {
    value.iter().map(|num| ChromaticNote::try_from_u8(*num)).filter_map(|num| num).collect()
}

pub fn vec_of_slice_u8<const N: usize>(value: [u8; N]) -> Vec<ChromaticNote> {
    value
        .to_vec()
        .iter()
        .map(|num| ChromaticNote::try_from_u8(*num))
        .filter_map(|num| num)
        .collect()
}

#[cfg(test)]
mod tests {
    use super::{ChromaticNote, vec_of_slice_u8, vec_of_vec_u8};

    #[test]
    pub fn chromatic_note_format() {
        assert_eq!(ChromaticNote::_0.to_string(), "0".to_string());
        assert_eq!(ChromaticNote::_1.to_string(), "1".to_string());
        assert_eq!(ChromaticNote::_2.to_string(), "2".to_string());
        assert_eq!(ChromaticNote::_3.to_string(), "3".to_string());
        assert_eq!(ChromaticNote::_4.to_string(), "4".to_string());
        assert_eq!(ChromaticNote::_5.to_string(), "5".to_string());
        assert_eq!(ChromaticNote::_6.to_string(), "6".to_string());
        assert_eq!(ChromaticNote::_7.to_string(), "7".to_string());
        assert_eq!(ChromaticNote::_8.to_string(), "8".to_string());
        assert_eq!(ChromaticNote::_9.to_string(), "9".to_string());
        assert_eq!(ChromaticNote::_10.to_string(), "10".to_string());
        assert_eq!(ChromaticNote::_11.to_string(), "11".to_string());
    }

    #[test]
    pub fn chromatic_note_try_from_u8() {
        assert_eq!(ChromaticNote::try_from_u8(0), Some(ChromaticNote::_0));
        assert_eq!(ChromaticNote::try_from_u8(1), Some(ChromaticNote::_1));
        assert_eq!(ChromaticNote::try_from_u8(2), Some(ChromaticNote::_2));
        assert_eq!(ChromaticNote::try_from_u8(3), Some(ChromaticNote::_3));
        assert_eq!(ChromaticNote::try_from_u8(4), Some(ChromaticNote::_4));
        assert_eq!(ChromaticNote::try_from_u8(5), Some(ChromaticNote::_5));
        assert_eq!(ChromaticNote::try_from_u8(6), Some(ChromaticNote::_6));
        assert_eq!(ChromaticNote::try_from_u8(7), Some(ChromaticNote::_7));
        assert_eq!(ChromaticNote::try_from_u8(8), Some(ChromaticNote::_8));
        assert_eq!(ChromaticNote::try_from_u8(9), Some(ChromaticNote::_9));
        assert_eq!(ChromaticNote::try_from_u8(10), Some(ChromaticNote::_10));
        assert_eq!(ChromaticNote::try_from_u8(11), Some(ChromaticNote::_11));
    }

    #[test]
    pub fn chromatic_note_from_u8() {
        assert_eq!(ChromaticNote::from_u8(0), ChromaticNote::_0);
        assert_eq!(ChromaticNote::from_u8(2), ChromaticNote::_2);
        assert_eq!(ChromaticNote::from_u8(4), ChromaticNote::_4);
        assert_eq!(ChromaticNote::from_u8(7), ChromaticNote::_7);
        assert_eq!(ChromaticNote::from_u8(9), ChromaticNote::_9);
    }

    #[test]
    pub fn chromatic_note_to_u8() {
        assert_eq!(ChromaticNote::_0.to_u8(), 0);
        assert_eq!(ChromaticNote::_1.to_u8(), 1);
        assert_eq!(ChromaticNote::_2.to_u8(), 2);
        assert_eq!(ChromaticNote::_3.to_u8(), 3);
        assert_eq!(ChromaticNote::_4.to_u8(), 4);
        assert_eq!(ChromaticNote::_5.to_u8(), 5);
        assert_eq!(ChromaticNote::_6.to_u8(), 6);
        assert_eq!(ChromaticNote::_7.to_u8(), 7);
        assert_eq!(ChromaticNote::_8.to_u8(), 8);
        assert_eq!(ChromaticNote::_9.to_u8(), 9);
        assert_eq!(ChromaticNote::_10.to_u8(), 10);
        assert_eq!(ChromaticNote::_11.to_u8(), 11);
    }

    #[test]
    fn test_from_vec() {
        assert_eq!(vec_of_vec_u8(vec![0, 1]), vec![ChromaticNote::_0, ChromaticNote::_1]);
        assert_eq!(vec_of_vec_u8(vec![2, 3]), vec![ChromaticNote::_2, ChromaticNote::_3]);
        assert_eq!(vec_of_vec_u8(vec![4, 5]), vec![ChromaticNote::_4, ChromaticNote::_5]);
        assert_eq!(vec_of_vec_u8(vec![6, 7]), vec![ChromaticNote::_6, ChromaticNote::_7]);
        assert_eq!(vec_of_vec_u8(vec![8, 9]), vec![ChromaticNote::_8, ChromaticNote::_9]);
        assert_eq!(vec_of_vec_u8(vec![10, 11]), vec![ChromaticNote::_10, ChromaticNote::_11]);
        assert_eq!(vec_of_vec_u8(vec![12, 13]), vec![]);
    }

    #[test]
    fn test_from_slice() {
        assert_eq!(vec_of_slice_u8([0, 1]), vec![ChromaticNote::_0, ChromaticNote::_1]);
        assert_eq!(vec_of_slice_u8([2, 3]), vec![ChromaticNote::_2, ChromaticNote::_3]);
        assert_eq!(vec_of_slice_u8([4, 5]), vec![ChromaticNote::_4, ChromaticNote::_5]);
        assert_eq!(vec_of_slice_u8([6, 7]), vec![ChromaticNote::_6, ChromaticNote::_7]);
        assert_eq!(vec_of_slice_u8([8, 9]), vec![ChromaticNote::_8, ChromaticNote::_9]);
        assert_eq!(vec_of_slice_u8([10, 11]), vec![ChromaticNote::_10, ChromaticNote::_11]);
        assert_eq!(vec_of_slice_u8([12, 13]), vec![]);
    }
}
