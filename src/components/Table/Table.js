import React, { useEffect } from 'react'
import Row from '../Row/Row'
export default function Table() {

    const rows = []

    for (let count = 0; count < 10; count++) {
        rows.push(
            <Row key={count} />
        )
        // console.log("Aa")
    }

    return (
        <div>
            {rows}
        </div>
    )
}
