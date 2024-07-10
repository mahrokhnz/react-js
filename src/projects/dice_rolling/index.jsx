import Dice from "./components/dice/index";
import './index.css';
import {useRef, useState} from "react";


function DiceRolling() {
    const diceOneRef = useRef(null)
    const diceTwoRef = useRef(null)

    const styling = () => {
        let id;

        if (!id) {
            console.log('hi')
            id = setInterval(() => {
                diceOneRef.current.style.animation = 'rotate 5s linear infinite';
                diceTwoRef.current.style.animation = 'rotate 5s linear infinite';
            }, 3000)
        }

        if (id) {
            diceOneRef.current.style.animation = '';
            diceTwoRef.current.style.animation = '';
            clearInterval(id)
        }

        console.log(id)
    }

    const rollHandler = () => {
        styling()
    }


    return (
        <main className='diceRolling'>
            <div className='dices'>
                <Dice innerRef={diceOneRef} />
                <Dice innerRef={diceTwoRef}  />
            </div>
            <button className='rolling' onClick={rollHandler}>Rolling</button>
        </main>
    )
}

export default DiceRolling;