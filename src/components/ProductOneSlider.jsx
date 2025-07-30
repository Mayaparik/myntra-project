import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ProductOneSlider() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products?limit=20&offset=0")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data)
            })
            .catch((error) => console.log(error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };


    return (
        <div className='md:px-12 px-5 py-10 my-10 space-y-12'>
            <h1 className='lg:text-5xl md:text-3xl text-2xl text-center text-pink-600/80 font-medium'>Best Styles In Focus</h1>
            <Slider {...settings}>
                {products.map((product, index) => {
                    return (
                        product.images[0] !== "https://placehold.co/600x400" &&

                        <div key={index} className=''>
                            <Link to='/category' className='block overflow-hidden'>
                                <img src={product.images[0]} alt="" className=' w-full object-cover rounded-t-2xl' />
                                <div className='bg-pink-400/90 text-white py-2 px-2 text-center rounded-b-2xl'>
                                    <h1 className='text-xs font-light line-clamp-1'>{product.title}</h1>
                                    <p className='font-extrabold lg:text-lg'>
                                        UNDER <sup className='font-medium'>$</sup>{String(product.price).length > 2 ? String(product.price).substring(0, 2) : String(product.price)}
                                    </p>
                                    <p className='line-clamp-1 text-xs'>{product.description}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default ProductOneSlider
