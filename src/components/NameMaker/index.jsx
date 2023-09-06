import './index.css'
import { useState } from "react"

const NameMaker = () => {

    const [color, setColor] = useState('blue');
    const [count, setCount] = useState(0);
    const [highScore, setHighScore] = useState(25);
    const [newName, setNameName] = useState('');
    
    if(count > highScore) {
        
    }

    const handleChange = (event) => {
        // e.target.value is what the input WOULD BE with this change
        // if the input right now says "happ" and the user types "y"
        // e.target.value is "happy"
        setNewName(e.target.value);
    }

    return (
        <div>
            <div>
                <button onClick={() => setColor('blue')}>Blue</button>
                <button onClick={() => setColor('red')}>Red</button>
                <button onClick={() => setColor('green')}>Green</button>
            </div>
            <p className={color}>The current color is {color}</p>

            <p>The count is {count}</p>
            <button onClick={() => setCount(count+1)}>Add +1</button>

            <p>The High score is {highScore} clicks!</p>
            { count > highScore ? <p> You Beat the High Score </p> : <> </> }

            <input value={newName} onChange={(event) => handleChange(event)}></input>

            {/*we are going to get the change event, and use it to change the state will change the input */}



        </div>
    )
}

export default NameMaker