import Dice from "./components/dice/index";
import './index.css';


function DiceRolling() {
    return (
        <main className='diceRolling'>
            <div className='dices'>
                <Dice />
                <Dice />
            </div>
        </main>
    )
}

export default DiceRolling;