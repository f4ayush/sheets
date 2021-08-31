import React from 'react'
import Cell from '../Cell/Cell'

export default function RowLabel({ limit }) {
    let labels = []
    for (let count = 0; count < limit; count++) {
        labels.push(
            <Cell key={count} value={count} />
        )
    }
    return (
        <div style={{ display: "flex" }}>
            {labels}
        </div>
    )
}
