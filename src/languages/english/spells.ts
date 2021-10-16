import { Language } from '../../types'

export const englishSpells: Language['spells'] = {
  killZeroInSum: {
    name: ['Remove Zero from sum', 'Abolish {ZERO} from {SUM}'],
    description: [
      "Since a zero doesn't affect the value of a sum we can remove it",
      'A {SUM} cannot digest a {ZERO} so we can always remove a {ZERO} from the stomach of a {SUM}',
    ],
  },
}
