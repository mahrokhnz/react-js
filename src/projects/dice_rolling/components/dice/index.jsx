import Side from "./components/side";
import './index.css';

function Dice() {
    return (
        <main className='dice'>
            <Side number='one' />
            <Side number='two' />
            <Side number='three' />
            <Side number='four' />
            <Side number='five' />
            <Side number='six' />
        </main>
    )
}

// TODO: make roll random
// TODO: add button

export default Dice;