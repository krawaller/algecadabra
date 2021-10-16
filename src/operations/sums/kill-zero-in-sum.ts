import { Spell } from '../../types'
import { isSum, isZero } from '../helpers'

export const killZeroInSum: Spell<{ zeroes: 'stomach' }> = {
  id: 'killZeroInSum',
  category: 'sum',
  taster: (e) => {
    if (!isSum(e)) return 'err_mustbesum'
    const zeroIndexes = e.stomach
      ?.map((c, i) => i)
      .filter((i) => isZero(e.stomach?.[i]))
    if (!zeroIndexes || !zeroIndexes.length) return 'err_summusthavezeroes'
    return {
      zeroes: { type: 'stomach', which: zeroIndexes, min: 1, max: 1 },
    }
  },
  cast: (target, cauldron) => {
    const zeroIdx = cauldron.zeroes[0]
    return {
      beforeMarks: [[zeroIdx]],
      polymorph: {
        kind: 'sum',
        stomach: target.stomach?.filter((c, i) => i !== zeroIdx),
      },
    }
  },
}
