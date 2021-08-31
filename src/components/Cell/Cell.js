import React, { useState } from 'react'
import './Cell.css'
export default function Cell({ value, location }) {
    const [feed, setfeed] = useState('')

    return (
        <div style={{ width: "75px", height: "50px" }}>
            {value !== undefined ? <input value={value} type="text" onChange={() => { }} /> : <input type="text" value={feed} onChange={(e) => { setfeed(e.target.value); console.log(location) }} />}
        </div>
    )
}
