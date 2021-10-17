import { Entity, EntityKind } from '../types'
import { ErrorMessage } from './content'

// Special recipe to use in spells that don't have any input
// (TS otherwise didn't act well for "empty" recipes)
export const OK = { _: '_' } as const
type OK = typeof OK
type EMPTYKEY = keyof OK
type EMPTYVAL = OK[EMPTYKEY]

export type Spell<B extends Blueprint = OK> = {
  id: SpellName
  category: EntityKind | 'all'
  taster: (e: Entity) => Recipe<B> | ErrorMessage
  cast: (target: Entity, Ingredient: Cauldron<B>) => Result
}

type Result = {
  polymorph: Entity
  beforeMarks?: Path[]
  afterMarks?: Path[]
}

type Blueprint = Record<string, IngredientType>

type Recipe<B extends Blueprint> = {
  [key in keyof B]: RecipeLine<B[key]>
}
type RecipeLine<RecipeKind> = RecipeKind extends 'stomach'
  ? StomachLine
  : RecipeKind extends EMPTYVAL
  ? EMPTYVAL
  : never
type IngredientType = 'stomach' | EMPTYVAL

type StomachLine = {
  type: 'stomach'
  which: number[]
  min?: number
  max?: number
}

type Ingredient<RecipeKind> = RecipeKind extends 'stomach'
  ? number[]
  : RecipeKind extends EMPTYVAL
  ? EMPTYVAL
  : never

type Cauldron<B extends Blueprint> = {
  [key in Exclude<keyof B, EMPTYKEY>]: Ingredient<B[key]>
}

type Path = number[]

export type SpellName = 'killZeroInSum' | 'shrinkSingleItemSum'
