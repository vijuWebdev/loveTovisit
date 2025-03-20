import React, { useState } from 'react';
import './task3.css';

const Task3 = () => {
    const [name, setName] = useState('');
    const [names, setNames] = useState<string[]>([]);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedName = name.trim();

        if (trimmedName.length < 3) {
            setError('Name must be at least 3 characters long.');
            return;
        }

        const isDuplicate = names.some(
            (existingName) => existingName.toLowerCase() === trimmedName.toLowerCase()
        );

        if (isDuplicate) {
            setError('Name already exists.');
            return;
        }

        setNames([...names, trimmedName]);
        setName('');
        setError('');
    };

    return (
        <div className="task3">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                {error && <span className="error">{error}</span>}
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <section>
                <p>List of names:</p>
                <ul>
                    {names.map((submittedName, index) => (
                        <li key={index}>{submittedName}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Task3;