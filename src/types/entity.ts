export type EntityKind = 'sum' | 'number' | 'variable'

export type Entity = {
  kind: EntityKind
  value?: number | string
  stomach?: Entity[]
}
