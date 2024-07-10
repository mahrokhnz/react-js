import Side from "./components/side";
import './index.css';

function Dice({className = '', innerRef}) {
    return (
        <main className={`dice ${className}`} ref={innerRef}>
            <Side number='one' />
            <Side number='two' />
            <Side number='three' />
            <Side number='four' />
            <Side number='five' />
            <Side number='six' />
        </main>
    )
}

export default Dice;