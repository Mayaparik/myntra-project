import { React, useState, useEffect } from 'react'
import ProductWrapper from './ProductWrapper';
import { useParams } from 'react-router-dom';

function ProductDetailsTwo() {
    const { listId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${listId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProduct(data)
            })
            .catch((error) => console.log(error))
    }, [listId])


    if (!product) {
        return <div className="pt-20 px-5 "> <div className="flex justify-center items-center">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-pink-600/80"></div>
        </div></div>;
    }


    return (
        <div className="lg:px-12 px-5 pt-20 space-y-5">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className='grid sm:grid-cols-2 h-fit gap-3 mx-auto'>
                    {/* Product images */}
                    {product.images?.map((img, i) => (
                        <img key={i} src={img} alt="" className="w-full  rounded" />
                    ))}
                </div>
                <ProductWrapper key={product.id} product={product}>
                    <div className='space-y-3'>
                        <div>
                            <p className="text-2xl font-bold">{product.category.name}</p>
                            <p className="text-slate-500 font-normal text-xl">{product.title}</p>
                        </div>
                        <hr className='text-gray-300' />
                        <p className=" font-bold text-xl">${String(product.price).length > 2 ? String(product.price).substring(0,2) : String(product.price)}</p>
                        <p className='font-semibold text-emerald-700'>inclusive of all taxes</p>
                        <p className='text-sm font-semibold'>{product.description}</p>
                        <hr className='text-gray-300' />
                        <div className='space-y-1 text-gray-700'>
                            <p className="">100% Original Products</p>
                            <p className="">Pay on delivery might be available</p>
                            <p className="">This item is only exchangeable for the same or a different size, if available, and cannot be returned</p>
                        </div>
                    </div>
                </ProductWrapper>
            </div>
        </div>
    )
}

export default ProductDetailsTwo
