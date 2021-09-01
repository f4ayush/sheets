import React, { useState } from 'react'
import './Cell.css'
export default function Cell({ value, location = {}, setLocation, x = 0, y = 0 }) {
    const [feed, setFeed] = useState(location[`${x}_${y}`] || "")
    const handleChange = (e) => {
        console.log(x, y)
        let value = e.target.value
        setFeed(e.target.value)
        location[`${x}_${y}`] = e.target.value
        setLocation(location)
        if (value.includes("SUM:(")) {
            let [, cellsArr] = value.split('(')
            console.log(cellsArr)
            if (cellsArr.includes(')')) {
                cellsArr = cellsArr.trim(")")
                cellsArr = cellsArr.split(',')
                let sum = cellsArr.reduce((sum, current) => {
                    let currentValue = isNaN(location[current]) ? 0 : location[current]
                    sum = sum + currentValue
                    return sum
                }, 0)
                location[`${x}_${y}`] = sum
                setLocation(location)
                e.target.value = sum
            }
        }
    }
    return (
        <div style={{ width: "75px", height: "50px" }}>
            {value !== undefined ? <input value={value} type="text" onChange={handleChange} /> : <input type="text" value={feed} onChange={handleChange} />}
        </div>
    )
}
