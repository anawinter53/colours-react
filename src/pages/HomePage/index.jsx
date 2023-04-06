import React from 'react';
import { useAuth } from "../../contexts";

export default function Home() {
    const { user } = useAuth();
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome, {user}!</p>
        </div>
    )
}
