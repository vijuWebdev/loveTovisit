import { render, screen, fireEvent } from '@testing-library/react';
import Task3 from '../Task3';
import '@testing-library/jest-dom';

describe('Task3', () => {
    test('displays initial message', () => {
        render(<Task3 />);
        expect(screen.getByText('List of names:')).toBeInTheDocument();
    });

    test('adds unique names to the list', () => {
        render(<Task3 />);
        const input = screen.getByPlaceholderText('Name');
        const submitButton = screen.getByText('Submit');

        fireEvent.change(input, { target: { value: 'John' } });
        fireEvent.click(submitButton);

        expect(screen.getByText('John')).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'Jane' } });
        fireEvent.click(submitButton);

        expect(screen.getByText('Jane')).toBeInTheDocument();
    });

    test('displays error for duplicate names', () => {
        render(<Task3 />);
        const input = screen.getByPlaceholderText('Name');
        const submitButton = screen.getByText('Submit');

        fireEvent.change(input, { target: { value: 'John' } });
        fireEvent.click(submitButton);

        fireEvent.change(input, { target: { value: 'john' } }); // Case-insensitive duplicate test
        fireEvent.click(submitButton);

        expect(screen.getByText('Name already exists.')).toBeInTheDocument();
    });

    test('displays error for names shorter than 3 characters', () => {
        render(<Task3 />);
        const input = screen.getByPlaceholderText('Name');
        const submitButton = screen.getByText('Submit');

        fireEvent.change(input, { target: { value: 'Jo' } });
        fireEvent.click(submitButton);

        expect(screen.getByText('Name must be at least 3 characters long.')).toBeInTheDocument();
    });

    test('errors disappear when resolved', () => {
        render(<Task3 />);
        const input = screen.getByPlaceholderText('Name');
        const submitButton = screen.getByText('Submit');

        fireEvent.change(input, { target: { value: 'Jo' } });
        fireEvent.click(submitButton);

        expect(screen.getByText('Name must be at least 3 characters long.')).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'John' } });
        fireEvent.click(submitButton);

        expect(screen.queryByText('Name must be at least 3 characters long.')).toBeNull();
    });
});