
async function getUserData() {
    return {
        name: 'King Kochhar',
        lastLogin: new Date().toLocaleString(), //different on every request
        serverTime: new Date().toLocaleString()
    }
}

export const dynamic = 'force-dynamic'; // SSR

// This dashboard page runs on every request in App Router
export default async function DashboardPage() {
    const user = await getUserData();

    return (
        <main style={{ padding: '20px' }}>
            <h1>Welcome, {user.name}</h1>
            <p>Last Login: {user.lastLogin}</p>
            <p>Page rendered at: {user.serverTime}</p>
        </main>
    )
}