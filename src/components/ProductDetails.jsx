import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductWrapper from './ProductWrapper';

function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProduct(data)
            })
            .catch((error) => console.log(error));
    }, [productId]);



    if (!product) {
        return <div className="lg:pt-25 pt-35">
            <div className="flex justify-center items-center">
                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-pink-600/80"></div>
            </div>
        </div>;
    }

    return (

        <div className="lg:px-12 px-5  lg:pt-25 pt-35 space-y-5">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className='grid sm:grid-cols-2 mx-auto gap-3 h-fit'>
                    {/* Product images */}
                    {product.images?.map((img, i) => (
                        <img key={i} src={img} alt="" className="w-full rounded" />
                    ))}
                </div>
                <ProductWrapper key={product.id} product={product}>
                    <div className='space-y-3'>
                        <div>
                            <p className="text-2xl font-bold">{product.category}</p>
                            <p className="text-slate-500 font-normal text-xl">{product.title}</p>
                        </div>
                        <hr className='text-gray-300' />
                        <button className="border border-gray-200 hover:border-black px-2 py-1 items-center"> {product.rating}<i className="bi bi-star-fill mx-2 text-emerald-700"></i>| Rating </button>
                        <p className=" font-bold text-xl">${product.price}</p>
                        <p className='font-semibold text-emerald-700'>inclusive of all taxes</p>
                        <p className='text-sm font-semibold'>{product.description}</p>
                        <hr className='text-gray-300' />
                        <div className='space-y-1 text-gray-700'>
                            <p className="">100% Original Products</p>
                            <p className="">Pay on delivery might be available</p>
                            <p className=" ">{product.returnPolicy}</p>
                            <p className="">This item is only exchangeable for the same or a different size, if available, and cannot be returned</p>
                        </div>
                        <div className='space-y-1 text-gray-700'>
                            <h2 className='text-xl font-semibold'>Reviews</h2>
                            <hr className='text-gray-300' />
                            <div className='space-y-1'>
                                <p>{product.reviews?.[0].reviewerName}</p>
                                <p>{product.reviews?.[0].rating}<i className="bi bi-star-fill mx-2 text-amber-300"></i></p>
                                <p className='text-sm font-semibold '>{product.reviews?.[0].comment}</p>
                            </div>
                            <hr className='text-gray-300' />
                            <div className='space-y-1 '>
                                <p>{product.reviews?.[1].reviewerName}</p>
                                <p>{product.reviews?.[1].rating}<i className="bi bi-star-fill mx-2 text-amber-300"></i></p>
                                <p className='text-sm font-semibold '>{product.reviews?.[1].comment}</p>
                            </div>
                            <hr className='text-gray-300' />
                            <div className='space-y-1'>
                                <p>{product.reviews?.[2].reviewerName}</p>
                                <p>{product.reviews?.[2].rating}<i className="bi bi-star-fill mx-2 text-amber-300"></i></p>
                                <p className='text-sm font-semibold '>{product.reviews?.[2].comment}</p>
                            </div>
                        </div>
                    </div>
                </ProductWrapper>
            </div>
        </div>
    );
}

export default ProductDetail;
