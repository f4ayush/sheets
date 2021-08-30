import React from 'react'
import Cell from '../Cell/Cell'

export default function Row() {
    const cells = []

    for (let count = 0; count < 10; count++) {
        cells.push(
            <Cell key={count} />
        )
    }
    return (
        <div style={{ display: 'flex' }}>
            {cells}
        </div>
    )
}
