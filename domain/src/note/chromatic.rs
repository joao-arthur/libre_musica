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

    pub fn next(self) -> ChromaticNote {
        match self {
            ChromaticNote::_0 => ChromaticNote::_1,
            ChromaticNote::_1 => ChromaticNote::_2,
            ChromaticNote::_2 => ChromaticNote::_3,
            ChromaticNote::_3 => ChromaticNote::_4,
            ChromaticNote::_4 => ChromaticNote::_5,
            ChromaticNote::_5 => ChromaticNote::_6,
            ChromaticNote::_6 => ChromaticNote::_7,
            ChromaticNote::_7 => ChromaticNote::_8,
            ChromaticNote::_8 => ChromaticNote::_9,
            ChromaticNote::_9 => ChromaticNote::_10,
            ChromaticNote::_10 => ChromaticNote::_11,
            ChromaticNote::_11 => ChromaticNote::_0,
        }
    }

    pub fn prev(self) -> ChromaticNote {
        match self {
            ChromaticNote::_0 => ChromaticNote::_11,
            ChromaticNote::_1 => ChromaticNote::_0,
            ChromaticNote::_2 => ChromaticNote::_1,
            ChromaticNote::_3 => ChromaticNote::_2,
            ChromaticNote::_4 => ChromaticNote::_3,
            ChromaticNote::_5 => ChromaticNote::_4,
            ChromaticNote::_6 => ChromaticNote::_5,
            ChromaticNote::_7 => ChromaticNote::_6,
            ChromaticNote::_8 => ChromaticNote::_7,
            ChromaticNote::_9 => ChromaticNote::_8,
            ChromaticNote::_10 => ChromaticNote::_9,
            ChromaticNote::_11 => ChromaticNote::_10,
        }
    }
}

pub fn vec_of_vec_u8(value: Vec<u8>) -> Vec<ChromaticNote> {
    value.iter().map(|num| ChromaticNote::try_from_u8(*num)).filter_map(|num| num).collect()
}

pub fn vec_of_slice_u8<const N: usize>(value: [u8; N]) -> Vec<ChromaticNote> {
    value.to_vec().iter().map(|num| ChromaticNote::try_from_u8(*num)).filter_map(|num| num).collect()
}

pub fn distance_positive(a: ChromaticNote, b: ChromaticNote) -> u8 {
    let mut acc = 0;
    let mut curr = a.clone();
    while curr != b {
        acc += 1;
        curr = curr.next();
    }
    acc
}

pub fn distance_negative(a: ChromaticNote, b: ChromaticNote) -> u8 {
    let mut acc = 0;
    let mut curr = a.clone();
    while curr != b {
        acc += 1;
        curr = curr.prev();
    }
    acc
}

#[cfg(test)]
mod tests {
    use super::{ChromaticNote, distance_negative, distance_positive, vec_of_slice_u8, vec_of_vec_u8};

    #[test]
    pub fn format() {
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
    pub fn to_u8() {
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
    pub fn try_from_u8() {
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
        assert_eq!(ChromaticNote::try_from_u8(12), None);
    }

    #[test]
    pub fn from_u8() {
        assert_eq!(ChromaticNote::from_u8(0), ChromaticNote::_0);
        assert_eq!(ChromaticNote::from_u8(2), ChromaticNote::_2);
        assert_eq!(ChromaticNote::from_u8(4), ChromaticNote::_4);
        assert_eq!(ChromaticNote::from_u8(7), ChromaticNote::_7);
        assert_eq!(ChromaticNote::from_u8(9), ChromaticNote::_9);
    }

    #[test]
    pub fn next() {
        assert_eq!(ChromaticNote::_0.next(), ChromaticNote::_1);
        assert_eq!(ChromaticNote::_1.next(), ChromaticNote::_2);
        assert_eq!(ChromaticNote::_2.next(), ChromaticNote::_3);
        assert_eq!(ChromaticNote::_3.next(), ChromaticNote::_4);
        assert_eq!(ChromaticNote::_4.next(), ChromaticNote::_5);
        assert_eq!(ChromaticNote::_5.next(), ChromaticNote::_6);
        assert_eq!(ChromaticNote::_6.next(), ChromaticNote::_7);
        assert_eq!(ChromaticNote::_7.next(), ChromaticNote::_8);
        assert_eq!(ChromaticNote::_8.next(), ChromaticNote::_9);
        assert_eq!(ChromaticNote::_9.next(), ChromaticNote::_10);
        assert_eq!(ChromaticNote::_10.next(), ChromaticNote::_11);
        assert_eq!(ChromaticNote::_11.next(), ChromaticNote::_0);
    }

    #[test]
    pub fn prev() {
        assert_eq!(ChromaticNote::_0.prev(), ChromaticNote::_11);
        assert_eq!(ChromaticNote::_1.prev(), ChromaticNote::_0);
        assert_eq!(ChromaticNote::_2.prev(), ChromaticNote::_1);
        assert_eq!(ChromaticNote::_3.prev(), ChromaticNote::_2);
        assert_eq!(ChromaticNote::_4.prev(), ChromaticNote::_3);
        assert_eq!(ChromaticNote::_5.prev(), ChromaticNote::_4);
        assert_eq!(ChromaticNote::_6.prev(), ChromaticNote::_5);
        assert_eq!(ChromaticNote::_7.prev(), ChromaticNote::_6);
        assert_eq!(ChromaticNote::_8.prev(), ChromaticNote::_7);
        assert_eq!(ChromaticNote::_9.prev(), ChromaticNote::_8);
        assert_eq!(ChromaticNote::_10.prev(), ChromaticNote::_9);
        assert_eq!(ChromaticNote::_11.prev(), ChromaticNote::_10);
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

    #[test]
    fn distance_positive_from_0() {
        assert_eq!(distance_positive(ChromaticNote::_0, ChromaticNote::_0), 0);
        assert_eq!(distance_positive(ChromaticNote::_0, ChromaticNote::_1), 1);
        assert_eq!(distance_positive(ChromaticNote::_0, ChromaticNote::_2), 2);
        assert_eq!(distance_positive(ChromaticNote::_0, ChromaticNote::_3), 3);
        assert_eq!(distance_positive(ChromaticNote::_0, ChromaticNote::_4), 4);
        assert_eq!(distance_positive(ChromaticNote::_0, ChromaticNote::_5), 5);
        assert_eq!(distance_positive(ChromaticNote::_0, ChromaticNote::_6), 6);
        assert_eq!(distance_positive(ChromaticNote::_0, ChromaticNote::_7), 7);
        assert_eq!(distance_positive(ChromaticNote::_0, ChromaticNote::_8), 8);
        assert_eq!(distance_positive(ChromaticNote::_0, ChromaticNote::_9), 9);
        assert_eq!(distance_positive(ChromaticNote::_0, ChromaticNote::_10), 10);
        assert_eq!(distance_positive(ChromaticNote::_0, ChromaticNote::_11), 11);
    }

    #[test]
    fn distance_positive_from_5() {
        assert_eq!(distance_positive(ChromaticNote::_5, ChromaticNote::_5), 0);
        assert_eq!(distance_positive(ChromaticNote::_5, ChromaticNote::_6), 1);
        assert_eq!(distance_positive(ChromaticNote::_5, ChromaticNote::_7), 2);
        assert_eq!(distance_positive(ChromaticNote::_5, ChromaticNote::_8), 3);
        assert_eq!(distance_positive(ChromaticNote::_5, ChromaticNote::_9), 4);
        assert_eq!(distance_positive(ChromaticNote::_5, ChromaticNote::_10), 5);
        assert_eq!(distance_positive(ChromaticNote::_5, ChromaticNote::_11), 6);
        assert_eq!(distance_positive(ChromaticNote::_5, ChromaticNote::_0), 7);
        assert_eq!(distance_positive(ChromaticNote::_5, ChromaticNote::_1), 8);
        assert_eq!(distance_positive(ChromaticNote::_5, ChromaticNote::_2), 9);
        assert_eq!(distance_positive(ChromaticNote::_5, ChromaticNote::_3), 10);
        assert_eq!(distance_positive(ChromaticNote::_5, ChromaticNote::_4), 11);
    }

    #[test]
    fn distance_positive_from_11() {
        assert_eq!(distance_positive(ChromaticNote::_11, ChromaticNote::_11), 0);
        assert_eq!(distance_positive(ChromaticNote::_11, ChromaticNote::_0), 1);
        assert_eq!(distance_positive(ChromaticNote::_11, ChromaticNote::_1), 2);
        assert_eq!(distance_positive(ChromaticNote::_11, ChromaticNote::_2), 3);
        assert_eq!(distance_positive(ChromaticNote::_11, ChromaticNote::_3), 4);
        assert_eq!(distance_positive(ChromaticNote::_11, ChromaticNote::_4), 5);
        assert_eq!(distance_positive(ChromaticNote::_11, ChromaticNote::_5), 6);
        assert_eq!(distance_positive(ChromaticNote::_11, ChromaticNote::_6), 7);
        assert_eq!(distance_positive(ChromaticNote::_11, ChromaticNote::_7), 8);
        assert_eq!(distance_positive(ChromaticNote::_11, ChromaticNote::_8), 9);
        assert_eq!(distance_positive(ChromaticNote::_11, ChromaticNote::_9), 10);
        assert_eq!(distance_positive(ChromaticNote::_11, ChromaticNote::_10), 11);
    }

    #[test]
    fn distance_negative_from_0() {
        assert_eq!(distance_negative(ChromaticNote::_0, ChromaticNote::_0), 0);
        assert_eq!(distance_negative(ChromaticNote::_0, ChromaticNote::_11), 1);
        assert_eq!(distance_negative(ChromaticNote::_0, ChromaticNote::_10), 2);
        assert_eq!(distance_negative(ChromaticNote::_0, ChromaticNote::_9), 3);
        assert_eq!(distance_negative(ChromaticNote::_0, ChromaticNote::_8), 4);
        assert_eq!(distance_negative(ChromaticNote::_0, ChromaticNote::_7), 5);
        assert_eq!(distance_negative(ChromaticNote::_0, ChromaticNote::_6), 6);
        assert_eq!(distance_negative(ChromaticNote::_0, ChromaticNote::_5), 7);
        assert_eq!(distance_negative(ChromaticNote::_0, ChromaticNote::_4), 8);
        assert_eq!(distance_negative(ChromaticNote::_0, ChromaticNote::_3), 9);
        assert_eq!(distance_negative(ChromaticNote::_0, ChromaticNote::_2), 10);
        assert_eq!(distance_negative(ChromaticNote::_0, ChromaticNote::_1), 11);
    }

    #[test]
    fn distance_negative_from_5() {
        assert_eq!(distance_negative(ChromaticNote::_5, ChromaticNote::_5), 0);
        assert_eq!(distance_negative(ChromaticNote::_5, ChromaticNote::_4), 1);
        assert_eq!(distance_negative(ChromaticNote::_5, ChromaticNote::_3), 2);
        assert_eq!(distance_negative(ChromaticNote::_5, ChromaticNote::_2), 3);
        assert_eq!(distance_negative(ChromaticNote::_5, ChromaticNote::_1), 4);
        assert_eq!(distance_negative(ChromaticNote::_5, ChromaticNote::_0), 5);
        assert_eq!(distance_negative(ChromaticNote::_5, ChromaticNote::_11), 6);
        assert_eq!(distance_negative(ChromaticNote::_5, ChromaticNote::_10), 7);
        assert_eq!(distance_negative(ChromaticNote::_5, ChromaticNote::_9), 8);
        assert_eq!(distance_negative(ChromaticNote::_5, ChromaticNote::_8), 9);
        assert_eq!(distance_negative(ChromaticNote::_5, ChromaticNote::_7), 10);
        assert_eq!(distance_negative(ChromaticNote::_5, ChromaticNote::_6), 11);
    }

    #[test]
    fn distance_negative_from_11() {
        assert_eq!(distance_negative(ChromaticNote::_11, ChromaticNote::_11), 0);
        assert_eq!(distance_negative(ChromaticNote::_11, ChromaticNote::_10), 1);
        assert_eq!(distance_negative(ChromaticNote::_11, ChromaticNote::_9), 2);
        assert_eq!(distance_negative(ChromaticNote::_11, ChromaticNote::_8), 3);
        assert_eq!(distance_negative(ChromaticNote::_11, ChromaticNote::_7), 4);
        assert_eq!(distance_negative(ChromaticNote::_11, ChromaticNote::_6), 5);
        assert_eq!(distance_negative(ChromaticNote::_11, ChromaticNote::_5), 6);
        assert_eq!(distance_negative(ChromaticNote::_11, ChromaticNote::_4), 7);
        assert_eq!(distance_negative(ChromaticNote::_11, ChromaticNote::_3), 8);
        assert_eq!(distance_negative(ChromaticNote::_11, ChromaticNote::_2), 9);
        assert_eq!(distance_negative(ChromaticNote::_11, ChromaticNote::_1), 10);
        assert_eq!(distance_negative(ChromaticNote::_11, ChromaticNote::_0), 11);
    }
}
