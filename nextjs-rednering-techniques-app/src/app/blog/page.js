
// Revalidate this page in every 10 seconds.
export const revalidate = 10;

async function getBlogPosts() {
    return [
        { id: 1, title: 'Understanding Next.js Rendering' },
        { id: 2, title: 'Why ISR is needed?' }
    ]
}

export default async function BlogPage() {
    const posts = await getBlogPosts();
    const now = new Date().toLocaleTimeString();

    return (
        <main style={{ padding: '20px' }}>
            <h1>Latest Blog Posts:</h1>
            <p><em>Page Generated at: {now}</em></p>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </main>
    )
}