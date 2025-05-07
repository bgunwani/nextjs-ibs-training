import Link from "next/link"
import { products } from "@/lib/products" // Import Global Product List

export default function Products() {
    return (
        <main className="container mt-5">
            <h1 className="text=primary">Product List</h1>
            <hr />
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4" key={product.id}>
                        <div className="card-header">
                            <b>Details of {product.name}</b>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Name: {product.name}</li>
                            <li className="list-group-item">Price: {product.price}</li>
                            <li className="list-group-item">Description: {product.description}</li>
                        </ul>
                        <div className="card-header">
                            <Link className="btn btn-info" href={`/products/${product.id}`}>View Detail</Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
