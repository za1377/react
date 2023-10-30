import { useState } from "react";
import PropTypes from 'prop-types';
import "./Counter.css"

export default function Counter() {

    const [count, setCount] = useState(0);

    function Increase(by) {
        setCount( count + by)
    }

    function Decrease(by) {
        setCount( count - by)
    }

    return(
        <>
            <div className="count">{count}</div>
            <CounterLearning IncreaseMethod={Increase} DecreaseMethod={Decrease}/>
            <CounterLearning by={2} IncreaseMethod={Increase} DecreaseMethod={Decrease}/>
            <CounterLearning by={5} IncreaseMethod={Increase} DecreaseMethod={Decrease}/>
        </>
    )
}


function CounterLearning({by, IncreaseMethod, DecreaseMethod}) {

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
        setCount( count + by)
    
    }

    function DecreaseButton() {
        setCount( count - by)
    }

    return(
        <>
            <div className="count">{count}</div>
            <button style={buttonStyle} onClick={IncreaseButton}>+{by}</button>
            <button style={buttonStyle} onClick={DecreaseButton}>-{by}</button>
        </>
    )
}

CounterLearning.propTypes = {
    by: PropTypes.number
  };

CounterLearning.defaultProps = {
by: 1
};