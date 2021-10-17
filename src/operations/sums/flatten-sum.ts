import { Spell } from '../../types'
import { isSum } from '../helpers'

export const flattemSum: Spell<{ sum: 'stomach' }> = {
  id: 'flattenSum',
  category: 'sum',
  taster: (e) => {
    if (!isSum(e)) return 'err_mustbesum'
    const sumIdxs = e.stomach
      ?.map((c, i) => i)
      .filter((i) => isSum(e.stomach?.[i]))
    if (sumIdxs?.length < 1) return 'err_summusthavesum'
    return { sum: { type: 'stomach', which: sumIdxs, min: 1, max: 1 } }
  },
  cast: (target, cauldron) => {
    const sumIdx = cauldron.sum[0]
    return {
      beforeMarks: [[sumIdx]],
      polymorph: {
        ...target,
        stomach: target.stomach?.filter((c, i) => i !== sumIdx),
      },
    }
  },
}
