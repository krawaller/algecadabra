import { Entity, EntityKind } from '../types'
import { ErrorMessage, SpellName } from './content'

export type Spell<B extends Blueprint> = {
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
type RecipeLine<RecipeKind> = RecipeKind extends 'stomach' ? StomachLine : never
type IngredientType = 'stomach'

type StomachLine = {
  type: 'stomach'
  which: number[]
  min?: number
  max?: number
}

type Ingredient<RecipeKind> = RecipeKind extends 'stomach' ? number[] : never

type Cauldron<B extends Blueprint> = {
  [key in keyof B]: Ingredient<B[key]>
}

type Path = number[]
