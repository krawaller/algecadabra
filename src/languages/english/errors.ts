import { Language } from '../../types'

export const englishErrors: Language['errors'] = {
  err_mustbesum: ['Target must be a sum', 'Target must be a {SUM}'],
  err_summusthavezeroes: [
    'Sum must have at least one zero',
    'Target {SUM} must have devoured at least one {ZERO}',
  ],
  err_summusthave1item: [
    'Sum must have 1 item',
    '{SUM} must have exactly 1 item in the stomach',
  ],
}
