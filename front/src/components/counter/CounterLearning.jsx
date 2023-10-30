import { useState } from "react";
import "./Counter.css"

export default function CounterLearning() {

    const buttonStyle = {
        fontSize: "16px",
        backgroundColor : "#00a5ab",
        width: "100px",
        margin: "10px",
        color: "white",
        padding: "15px",
        borderRadius: "30px"
    };

    const [count, setCount] = useState(0);

    function IncreaseButton() {
        setCount( count + 1)
    }

    function DecreaseButton() {
        setCount( count - 1)
    }

    return(
        <>
            <div className="count">{count}</div>
            <button style={buttonStyle} onClick={IncreaseButton}>+1</button>
            <button style={buttonStyle} onClick={DecreaseButton}>-1</button>
        </>
    )
}