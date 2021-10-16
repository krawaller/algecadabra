import * as CSS from 'csstype'
import styled from 'styled-components'
import { Entity, EntityKind } from './types'

type MonsterProps = {
  entity: Entity
}

export const Monster = (props: MonsterProps) => {
  const { entity } = props
  return (
    <MonsterFlesh $type={entity.kind}>
      {entity.stomach?.map((e, i) => (
        <Monster key={i} entity={e} />
      ))}
      {entity.value !== undefined ? entity.value : undefined}
    </MonsterFlesh>
  )
}

const MonsterFlesh = styled.div<{ $type: EntityKind }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #555;
  background-color: ${(p) => colors[p.$type]};
  & > :not(:first-child) {
    margin-left: 10px;
  }
`

const colors: Record<EntityKind, CSS.Properties['color']> = {
  number: 'ivory',
  sum: 'lightgoldenrodyellow',
  variable: 'maroon',
}
