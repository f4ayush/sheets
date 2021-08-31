import React from 'react'
import Cell from '../Cell/Cell'

export default function Row({ x }) {
    const cells = []

    for (let y = 0; y < 11; y++) {
        if (y === 0) {
            cells.push(
                <Cell key={y} value={x} />
            )
        } else {
            cells.push(
                <Cell key={y} location={{ x, y }} />
            )
        }

    }
    return (
        <div style={{ display: 'flex' }}>
            {cells}
        </div>
    )
}
