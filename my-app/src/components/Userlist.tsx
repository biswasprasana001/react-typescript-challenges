import React, { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface ErrorState {
    hasError: boolean;
    message: string;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<ErrorState>({ hasError: false, message: '' });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => setError({ hasError: true, message: error.message }));
    }, []);

    if (error.hasError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    );
}

export default UserList; 