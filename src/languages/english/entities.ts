import { Language } from '../../types'

export const englishEntities: Language['entities'] = {
  sum: {
    name: ['sum', 'gnorf'],
    description: [
      'A sum represents the total value of all its expressions.',
      'The {SUM} lives in the mountains and loves to eat other creatures',
    ],
  },
  number: {
    name: ['number', 'deeple'],
    description: [
      'A number is a single value, like 3 or 20',
      'The Deeple is the currency of {WORLD}. Each Deeple coin shows how much it is worth.',
    ],
  },
  variable: {
    name: ['variable', 'shroud deeple'],
    description: [
      'A variable represents an unknown value',
      'The Shroud Deeple is a Deeple coin of unknown value. ',
    ],
  },
}
