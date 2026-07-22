import React, { useState } from 'react';
import axios from 'axios';
import '../DogFacts.css';


export default function DogFacts() {
    const [maxLength, setMaxLength] = useState(5);
    const [dogFacts, setDogFacts] = useState([]);
    const [dogImage, setDogImage] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setMaxLength(e.target.value);
    };

    const handleSearch = async () => {
        if (!maxLength) {
            setError("Please enter how many dog facts you want.");
            return;
        }

        setError(null);

        try {
            // Fetch facts
            const factsResponse = await axios.get(
                `https://dogapi.dog/api/v2/facts?limit=${maxLength}`
            );
            const facts = factsResponse.data.data.map(item => item.attributes.body);
            setDogFacts(facts);

            // Fetch random image
            const imageResponse = await axios.get(
                "https://dog.ceo/api/breeds/image/random"
            );
            setDogImage(imageResponse.data.message);

        } catch (err) {
            console.error(err);
            setError("Could not retrieve dog facts or image.");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Dog Facts</h1>
            <input
                type="number"
                value={maxLength}
                onChange={handleChange}
            />

            <button onClick={handleSearch}>Fetch 🥎</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Random dog image */}
            {dogImage && (
                <div style={{ marginTop: '20px' }}>
                    <img
                        src={dogImage}
                        alt="Random Dog"
                        style={{ width: '300px', borderRadius: '10px' }}
                    />
                </div>
            )}

            <div>
                {dogFacts.length === 0 ? (
                    <p>No dog facts yet.</p>
                ) : (
                    <ul>
                        {dogFacts.map((fact, index) => (
                            <li key={index}>{fact}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
