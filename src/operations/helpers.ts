import { Entity } from '../types'

export const isSum = (e?: Entity) => e?.kind === 'sum'
export const isNumber = (e?: Entity) => e?.kind === 'number'
export const isZero = (e?: Entity) => isNumber(e) && e?.value === 0
