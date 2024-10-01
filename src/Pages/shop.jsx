import { useState, useEffect } from "react";
async function printProducts(){
    const response = await fetch('https://fakestoreapi.com/products?limit=10');
    const data = await response.json();
    const products = data.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category
    }));
    return products;
}

function Shop(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await printProducts();
            setProducts(productsData);
        };

        fetchProducts();
    }, []);
    const handleAlert = (id) => {
        alert(`Product ID: ${id}`);
    };
    return (
        <div className="ml-auto w-[50%]">
            <h1>Shop</h1>
            {products.map(({ title, price, description, category, id }) => (
                <div 
                    key={id} 
                    id={id} 
                    className="border-4 border-black dark:border-white dark:bg-black dark:text-white bg-white flex flex-col md:flex-row items-start justify-between text-xl mt-4 p-4"
                >
                    <h1 className="font-bold text-slate-50 border-2 border-red-700 text-large">{title} ({category})</h1>
                    <p className="mt-2 text-standard bg-black">{description} - ${price}</p>
                    <button 
                        onClick={() => handleAlert(id)} 
                        className="mt-2 p-2 bg-blue-500 text-white rounded"
                    >
                        Show Product ID
                    </button>
                </div>
            ))}
        </div>
    );
}
export default Shop;