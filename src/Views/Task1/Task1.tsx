// Task1.tsx
import { useState, useEffect } from 'react';
import './task1.css';
import ViewTemplate from '../../Components/ViewTemplate/ViewTemplate.tsx';

const Task1 = () => {
    const [headerText, setHeaderText] = useState('Header Mobile');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1280) {
                setHeaderText('Header Large Desktop');
            } else if (width >= 1024) {
                setHeaderText('Header Medium Desktop');
            } else if (width >= 768) {
                setHeaderText('Header Tablet');
            } else {
                setHeaderText('Header Mobile');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ViewTemplate className="task1">
            <header>
                {headerText}
            </header>
            <main>
                {Array.from({ length: 8 }, (_, index) => (
                    <div key={index}>Block {index + 1}</div>
                ))}
            </main>
            <footer>Footer</footer>
        </ViewTemplate>
    );
};

export default Task1;