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

    pub fn next(self) -> BaseNote {
        match self {
            BaseNote::C => BaseNote::D,
            BaseNote::D => BaseNote::E,
            BaseNote::E => BaseNote::F,
            BaseNote::F => BaseNote::G,
            BaseNote::G => BaseNote::A,
            BaseNote::A => BaseNote::B,
            BaseNote::B => BaseNote::C,
        }
    }

    pub fn prev(self) -> BaseNote {
        match self {
            BaseNote::C => BaseNote::B,
            BaseNote::D => BaseNote::C,
            BaseNote::E => BaseNote::D,
            BaseNote::F => BaseNote::E,
            BaseNote::G => BaseNote::F,
            BaseNote::A => BaseNote::G,
            BaseNote::B => BaseNote::A,
        }
    }
}

pub fn vec_of_vec_u8(value: Vec<u8>) -> Vec<BaseNote> {
    value.iter().map(|num| BaseNote::try_from_u8(*num)).filter_map(|num| num).collect()
}

pub fn vec_of_slice_u8<const N: usize>(value: [u8; N]) -> Vec<BaseNote> {
    value.to_vec().iter().map(|num| BaseNote::try_from_u8(*num)).filter_map(|num| num).collect()
}

#[cfg(test)]
mod tests {
    use super::{BaseNote, vec_of_slice_u8, vec_of_vec_u8};

    #[test]
    pub fn try_from_u8() {
        assert_eq!(BaseNote::try_from_u8(0), Some(BaseNote::C));
        assert_eq!(BaseNote::try_from_u8(1), Some(BaseNote::D));
        assert_eq!(BaseNote::try_from_u8(2), Some(BaseNote::E));
        assert_eq!(BaseNote::try_from_u8(3), Some(BaseNote::F));
        assert_eq!(BaseNote::try_from_u8(4), Some(BaseNote::G));
        assert_eq!(BaseNote::try_from_u8(5), Some(BaseNote::A));
        assert_eq!(BaseNote::try_from_u8(6), Some(BaseNote::B));
    }

    #[test]
    pub fn to_u8() {
        assert_eq!(BaseNote::C.to_u8(), 0);
        assert_eq!(BaseNote::D.to_u8(), 1);
        assert_eq!(BaseNote::E.to_u8(), 2);
        assert_eq!(BaseNote::F.to_u8(), 3);
        assert_eq!(BaseNote::G.to_u8(), 4);
        assert_eq!(BaseNote::A.to_u8(), 5);
        assert_eq!(BaseNote::B.to_u8(), 6);
    }

    #[test]
    pub fn next() {
        assert_eq!(BaseNote::C.next(), BaseNote::D);
        assert_eq!(BaseNote::D.next(), BaseNote::E);
        assert_eq!(BaseNote::E.next(), BaseNote::F);
        assert_eq!(BaseNote::F.next(), BaseNote::G);
        assert_eq!(BaseNote::G.next(), BaseNote::A);
        assert_eq!(BaseNote::A.next(), BaseNote::B);
        assert_eq!(BaseNote::B.next(), BaseNote::C);
    }

    #[test]
    pub fn prev() {
        assert_eq!(BaseNote::C.prev(), BaseNote::B);
        assert_eq!(BaseNote::D.prev(), BaseNote::C);
        assert_eq!(BaseNote::E.prev(), BaseNote::D);
        assert_eq!(BaseNote::F.prev(), BaseNote::E);
        assert_eq!(BaseNote::G.prev(), BaseNote::F);
        assert_eq!(BaseNote::A.prev(), BaseNote::G);
        assert_eq!(BaseNote::B.prev(), BaseNote::A);
    }

    #[test]
    fn test_vec_of_vec_u8() {
        assert_eq!(vec_of_vec_u8(vec![0, 1]), vec![BaseNote::C, BaseNote::D]);
        assert_eq!(vec_of_vec_u8(vec![2, 3]), vec![BaseNote::E, BaseNote::F]);
        assert_eq!(vec_of_vec_u8(vec![4, 5]), vec![BaseNote::G, BaseNote::A]);
        assert_eq!(vec_of_vec_u8(vec![6, 7]), vec![BaseNote::B]);
        assert_eq!(vec_of_vec_u8(vec![8, 9]), vec![]);
    }

    #[test]
    fn test_vec_of_slice_u8() {
        assert_eq!(vec_of_slice_u8([0, 1]), vec![BaseNote::C, BaseNote::D]);
        assert_eq!(vec_of_slice_u8([2, 3]), vec![BaseNote::E, BaseNote::F]);
        assert_eq!(vec_of_slice_u8([4, 5]), vec![BaseNote::G, BaseNote::A]);
        assert_eq!(vec_of_slice_u8([6, 7]), vec![BaseNote::B]);
        assert_eq!(vec_of_slice_u8([8, 9]), vec![]);
    }
}
