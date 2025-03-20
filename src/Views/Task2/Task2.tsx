import Button from './Components/Button/Button';
import './task2.css';

const Task2 = () => {
    return (
        <div className="task2">
            <Button type="primary">Primary</Button>
            <Button type="secondary">Secondary</Button>
            <Button type="tertiary">Tertiary</Button>
            <Button disabled={true}>Disabled</Button>
        </div>
    );
};

export default Task2;