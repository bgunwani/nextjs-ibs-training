"use client";

import { useEffect, useState } from "react";

function fetchNotifications() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, text: "You have a new message." },
                { id: 2, text: "Your order was shipped." }
            ])
        }, 5000)    // Simulates Network Delay.
    })
}

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Fetching Notifications..');
        fetchNotifications()
            .then(data => {
                setNotifications(data);
                setLoading(false);
            })
    }, []);

    return (
        <main style={{ padding: '20px' }}>
            <h1>Notifications</h1>
            {loading ? (<p>Loading Notifications..</p>) : (
                <ul>
                    {notifications.map(notification => (
                        <li key={notification.id}>{notification.text}</li>
                    ))}
                </ul>
            )}
        </main>
    );
}