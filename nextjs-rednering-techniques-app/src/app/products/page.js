
// Simulated static product data
const getProducts = async () => {
    return [
        { id: 1, name: "Wireless Mouse", price: "$345" },
        { id: 2, name: "Bluetooth Speaker", price: "$445" },
        { id: 3, name: "Laptop Stand", price: "$245" }
    ]
}

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <main className="container mt-5">
            <h1 className="text-2xl font-bold mb-3">Our Products</h1>
            <ul className="space-y-2">
                {products.map((product) => (
                    <li key={product.id} className="p-4 border rounded shadow">
                        <h2 className="text-xl">{product.name}</h2>
                        <p className="text-grey-600">{product.price}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

/**
 * 
 */