import PropTypes from 'prop-types';
import "./Counter.css";

export default function CounterLearning({by, IncreaseMethod, DecreaseMethod}) {

    const buttonStyle = {
        fontSize: "16px",
        backgroundColor : "#00a5ab",
        width: "100px",
        margin: "10px",
        color: "white",
        padding: "15px",
        borderRadius: "30px"
    };

    // function IncreaseButton() {
    //     IncreaseMethod(by)
    
    // }

    // function DecreaseButton() {
    //     DecreaseMethod(by)
    // }

    return(
        <>
            <div>
                <button style={buttonStyle} onClick={() => IncreaseMethod(by)}>+{by}</button>
                <button style={buttonStyle} onClick={() => DecreaseMethod(by)}>-{by}</button>
            </div>
        </>
    )
}

CounterLearning.propTypes = {
    by: PropTypes.number
  };

CounterLearning.defaultProps = {
by: 1
};