import { useState, useEffect, useRef } from "react";
import clickSound from "../assets/woof.wav";


function randomChoice(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

export default function ColourBox({ colours, onRed }) {
    const [colour, setColor] = useState(randomChoice(colours));
    const hasReportedRed = useRef(false);

    useEffect(() => {
        if (!hasReportedRed.current && colour === "red") {
            hasReportedRed.current = true;
            onRed();
        }
    }, [colour, onRed]);

    const handleClick = () => {
        new Audio(clickSound).play();

        if (hasReportedRed.current) return;

        const newColour = randomChoice(colours);
        setColor(newColour);
    };

    return (
        <div
            className="ColourBox"
            style={{ backgroundColor: colour }}   // ⭐ FIXED
            onClick={handleClick}
        ></div>
    );
}



