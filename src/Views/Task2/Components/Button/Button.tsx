import React from 'react';
import './Button.css';

interface IButton {
    type?: 'primary' | 'secondary' | 'tertiary';
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}

const Button: React.FC<IButton> = ({ type, children, disabled, onClick }) => {
    let buttonClass = 'button';

    switch (type) {
        case 'primary':
            buttonClass += ' primary';
            break;
        case 'secondary':
            buttonClass += ' secondary';
            break;
        case 'tertiary':
            buttonClass += ' tertiary';
            break;
        default:
            break;
    }

    return (
        <button
            className={buttonClass}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;