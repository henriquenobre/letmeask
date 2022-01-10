import { useState } from "react"

export const Button = () => {
    const [counter, setcounter] = useState(0)

    const add = () => {
        setcounter(counter + 1)
    }
    return(
        <button onClick={add}>+{counter}</button>
    )
}