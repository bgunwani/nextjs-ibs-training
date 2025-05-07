import Link from "next/link";
import { products } from "@/lib/products" // Import Global Product List


export default function ProductDetail({ params }) {

    const product = products.find((p) => p.id.toString() == params.id);

    if (!product) {
        return (
            <main className="container mt-5">
                <h1 className="text-danger">Product Not Found.</h1>
                <Link href="/products" className="btn btn-secondary mt-3">Back to Product List</Link>
            </main>
        );
    }

    return (
        <main className="container mt-5">
            <h1 className="text-primary">Product Info</h1>
            <h2 className="text-info">{product.name}</h2>
            <p className="lead">{product.description}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <Link href="/products" className="btn btn-secondary mt-4">Back to Product List</Link>
        </main>
    )

}
