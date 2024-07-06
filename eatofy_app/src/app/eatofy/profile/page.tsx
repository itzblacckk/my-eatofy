"use client"
import React, { useEffect, useState } from 'react';

const Profile: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedEmail = localStorage.getItem('email');

        if (storedUsername && storedEmail) {
            setUsername(storedUsername);
            setEmail(storedEmail);
        }
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-8 rounded w-full max-w-md bg-white">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">User Profile</h2>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Username:</label>
                    <p className="text-black px-3 py-2 bg-gray-200 rounded-md">{username}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <p className="text-black px-3 py-2 bg-gray-200 rounded-md">{email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
