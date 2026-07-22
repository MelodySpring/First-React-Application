import { useState, useEffect } from "react";
import ColourBox from "./ColourBox";
import "../ColourBoxGrid.css";


export default function ColourBoxGrid({ colours }) {
    const totalBoxes = 25;

    const [redCount, setRedCount] = useState(0);
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const [restartKey, setRestartKey] = useState(0);
    const [bestTime, setBestTime] = useState(null);

    // Sets up the game timer
    useEffect(() => {
        if (!isRunning) return;

        const id = setInterval(() => {
            setTime(t => t + 1);
        }, 1000);

        return () => clearInterval(id);
    }, [isRunning]);

    const handleBoxRed = () => {
        setRedCount(c => c + 1);
    };

    // SEts the conditions for red to win
    useEffect(() => {
        if (redCount === totalBoxes) {
            setIsRunning(false);

            // Updates the fastest time
            setBestTime(prev => {
                if (prev === null) return time;
                return time < prev ? time : prev;
            });
        }
    }, [redCount]);

    // Restarts the game
    const restartGame = () => {
        setRedCount(0);
        setTime(0);
        setIsRunning(true);
        setRestartKey(k => k + 1);
    };

    // Generate the boxes for the game grid
    const boxes = [];
    for (let i = 0; i < totalBoxes; i++) {
        boxes.push(
            <ColourBox
                key={`${restartKey}-${i}`}
                colours={colours}
                onRed={handleBoxRed}
            />
        );
    }

    return (
        <div className="GameWrapper">
            <div className="GameContainer">
                <h2>Time: {time}s</h2>
                <h3>Red Boxes: {redCount}/{totalBoxes}</h3>
                {bestTime !== null && <h3>Fastest Time: {bestTime}s</h3>}

                <div className="ColourBoxGrid">
                    {boxes}
                </div>

                {!isRunning && <h1>You win!</h1>}
                {!isRunning && (
                    <button onClick={restartGame} className="restartButton">
                        Restart Game
                    </button>
                )}
            </div>
        </div>
    );
}   
