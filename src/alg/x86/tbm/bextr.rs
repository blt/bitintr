use int::Int;
use alg;

/// Bit Field Extract.
///
/// See [`x86::tbm::bextr`](fn.bextr.html).
#[inline]
pub fn bextr<T: Int>(source: T, range: T) -> T {
    alg::x86::bmi::bextr(source, range & T::from_u32(0xff), range >> T::from_u32(8))
}

pub trait BEXTR {
    #[inline]
    fn bextr(self, Self) -> Self;
}

impl<T: Int> BEXTR for T {
    #[inline]
    fn bextr(self, range: Self) -> Self {
        bextr(self, range)
    }
}
