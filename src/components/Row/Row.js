import React from 'react'
import Cell from '../Cell/Cell'

export default function Row({ x, location, setLocation }) {
    const cells = []

    for (let y = 0; y < 11; y++) {
        if (y === 0) {
            cells.push(
                <Cell key={y} value={x} />
            )
        } else {
            cells.push(
                <Cell key={y} x={x} y={y} setLocation={setLocation} location={location} />
            )
        }

    }
    return (
        <div style={{ display: 'flex' }}>
            {cells}
        </div>
    )
}
