export const B = a => b => c => a(b(c))
export const C = a => b => c => a(c)(b)
export const D = a => b => c => d => a(b)(c(d))
export const E = a => b => c => d => e => a(b)(c(d)(e))
export const F = a => b => c => c(b)(a)
export const G = a => b => c => d => a(d)(b(c))
export const H = a => b => c => a(b)(c)(b)
export const I = a => a
export const J = a => b => c => d => a(b)(a(d)(c))
export const K = a => b => a
export const L = a => b => a(b(b))
export const M = a => a(a)
export const O = a => b => b(a(b))
export const Q = a => b => c => b(a(c))
export const R = a => b => c => b(c)(a)
export const S = a => b => c => a(c)(b(c))
export const T = a => b => b(a)
export const U = a => b => b(a(a)(b))
export const V = a => b => c => c(a)(b)
export const W = a => b => a(b)(b)
export const Y = a => (b => b(b))(b => a(c => b(b)(c)))
