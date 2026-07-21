import React, { useState } from 'react';
import axios from 'axios';

export default function DogFacts() {
    const [maxLength, setMaxLength] = useState(5);
    const [dogFacts, setDogFacts] = useState([]);
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
            const response = await axios.get(
                `https://dogapi.dog/api/v2/facts?limit=${maxLength}`
            );

            const facts = response.data.data.map(item => item.attributes.body);

            setDogFacts(facts);

        } catch (err) {
            console.error(err);
            setError("Could not retrieve dog facts.");
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

            <button onClick={handleSearch}>Fetch Dog Facts</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

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
