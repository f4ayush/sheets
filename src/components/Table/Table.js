import React, { useEffect } from 'react'
import Row from '../Row/Row'
import RowLabel from '../RowLabel/RowLabel'
export default function Table() {

    const rows = []

    for (let count = 0; count < 11; count++) {
        if (count === 0) {
            rows.push(<RowLabel key={count} limit={11} />)
        } else {
            rows.push(
                <Row key={count} x={count} />
            )
        }
        // console.log("Aa")
    }

    return (
        <div>
            {rows}
        </div>
    )
}
