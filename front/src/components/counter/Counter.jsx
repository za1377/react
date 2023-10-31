import CounterLearning from "./CounterLearning";
import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    function Increase(by) {
        setCount( count + by)
    }

    function Decrease(by) {
        setCount( count - by)
    }

    function Reset() {
        setCount(0)
    }

    return(
        <>
            <div className="count">{count}</div>
            <CounterLearning IncreaseMethod={Increase} DecreaseMethod={Decrease}/>
            <CounterLearning by={2} IncreaseMethod={Increase} DecreaseMethod={Decrease}/>
            <CounterLearning by={5} IncreaseMethod={Increase} DecreaseMethod={Decrease}/>
            <div>
                <button className="restBtn" onClick={Reset}>Reset</button>
            </div>
        </>
    )
}