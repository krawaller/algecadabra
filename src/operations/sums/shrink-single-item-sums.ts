import { OK, Spell } from '../../types'
import { isSum } from '../helpers'

export const shrinkSingleItemSum: Spell = {
  id: 'shrinkSingleItemSum',
  category: 'sum',
  taster: (e) => {
    if (!isSum(e)) return 'err_mustbesum'
    if (e.stomach?.length !== 1) return 'err_summusthave1item'
    return OK
  },
  cast: (target) => {
    return {
      beforeMarks: [[0]],
      polymorph: target.stomach?.[0]!,
    }
  },
}
