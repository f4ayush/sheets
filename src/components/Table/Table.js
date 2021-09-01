import React, { useEffect, useState } from 'react'
import Row from '../Row/Row'
import RowLabel from '../RowLabel/RowLabel'
export default function Table() {
    const [location, setLocation] = useState({})

    const rows = []

    for (let count = 0; count < 11; count++) {
        if (count === 0) {
            rows.push(<RowLabel key={count} limit={11} />)
        } else {
            rows.push(
                <Row key={count} setLocation={setLocation} location={location} x={count} />
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
