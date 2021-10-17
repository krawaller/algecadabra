import { EntityKind } from '../entity'
import { SpellName } from '../spell'
import { ErrorMessage } from './messages.errors'

export type Entry = [
  string, // math text
  string // adventure text
]

export type Language = {
  spells: Record<SpellName, SpellDescription>
  errors: Record<ErrorMessage, Entry>
  entities: Record<EntityKind, EntityDescription>
}

export type EntityDescription = {
  name: Entry
  description: Entry
}

export type SpellDescription = {
  name: Entry
  description: Entry
}
