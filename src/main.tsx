import React from 'react'
import ReactDOM from 'react-dom'
import { Monster } from './Monster'
import { Entity } from './types'

const entity: Entity = {
  kind: 'product',
  stomach: [
    { kind: 'number', value: 5 },
    {
      kind: 'sum',
      stomach: [
        { kind: 'number', value: 5 },
        { kind: 'variable', value: 'x' },
      ],
    },
  ],
}

ReactDOM.render(
  <React.StrictMode>
    <Monster entity={entity} />
  </React.StrictMode>,
  document.getElementById('root')
)
