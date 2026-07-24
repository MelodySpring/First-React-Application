// src/components/RandomRed.jsx
import { useState } from "react";
import ColourBox from "./ColourBox";
import ColourBoxGrid from "./ColourBoxGrid";
import "../ColourBox.css";


const colours = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
];

export default function RandomRed() {
    const [redCount, setRedCount] = useState(0);

    const handleBoxRed = () => {
        setRedCount(c => c + 1);
    };

    return (
        <div className="GameWrapper">
            <ColourBoxGrid colours={colours} onRed={handleBoxRed} />
        </div>
    );
}
