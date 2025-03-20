import React from 'react';
import './user-card.css';

type UserCardProps =
    | {
        name: string;
        dob: string;
    }
    | {
        firstName: string;
        lastName: string;
        dateOfBirth: string;
    };

const UserCard: React.FC<UserCardProps> = (props) => {
    let name: string;
    let dob: string;

    if ('name' in props && 'dob' in props) {
        // Type narrowing: props is of the first type
        name = props.name;
        dob = props.dob;
    } else {
        // Type narrowing: props is of the second type
        name = `${props.firstName} ${props.lastName}`;
        dob = props.dateOfBirth;
    }

    return (
        <div className="user-card">
            <p>Name: {name}</p>
            <p>DOB: {dob}</p>
        </div>
    );
};

export default UserCard;