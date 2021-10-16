import { Language } from '../../types'

export const englishErrors: Language['errors'] = {
  err_mustbesum: ['Target must be a sum', 'Target must be a {SUM}'],
  err_summusthavezeroes: [
    'Sum must have at least one zero',
    'Target {SUM} must have devoured at least one {ZERO}',
  ],
}
