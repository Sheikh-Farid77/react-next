export default function Product({ product }) {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={product.thumbnail}
                    alt="Shoes"
                    className="rounded-xl h-52 w-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}