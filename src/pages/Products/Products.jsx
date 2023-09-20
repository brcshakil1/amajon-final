import ProductsCard from '../ProductsCard/ProductsCard'
import { useLoaderData } from 'react-router-dom';
const Products = () => {
    const {products} = useLoaderData();
    return (
        <div className='container mx-auto grid grid-cols-3 gap-4 my-10'>
            {
                products.map(product => <ProductsCard  key={product.id} product={product}/>)
            }
        </div>
    );
};

export default Products;