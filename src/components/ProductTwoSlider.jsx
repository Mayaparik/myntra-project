import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearch } from '../context/SearchContext'

function ProductTwoSlider() {


    const [products, setProducts] = useState([])
    const { searchTerm } = useSearch()

    useEffect(() => {

        fetch("https://api.escuelajs.co/api/v1/products?limit=30&offset=0")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProducts(data)
            }).catch((error) => console.log("error"))


    }, [])

    const filterProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm) || product.category.name.toLowerCase().includes(searchTerm)
    )

    return (
        <div className='space-y-16'>
            <h1 className='font-bold tracking-tight lg:text-4xl md:text-3xl text-2xl text-center'>SHOP BY CATEGORY</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5   gap-4 md:px-12 px-5'>
                {
                    filterProducts.map((list, index) => {
                        return (
                            list.images[0] !== "https://placehold.co/600x400" &&

                            <div key={list.id} className='bg-pink-600/80 p-2 text-center text-black'>
                                <Link to={`/product-escuela/${list.id}`}>
                                    <img src={list.images?.[0]} alt="" className=" rounded-t-sm" />
                                    <div className=' text-white py-1 rounded-b-sm'>
                                        {/* <p className="text-sm font-semibold line-clamp-1 ">{list.category.name}</p> */}
                                        <p className="text-sm font-semibold line-clamp-1 ">{list.title}</p>
                                        <h1 className="text-sm font-bold"> UNDER ${String(list.price).length > 2 ? String(list.price).substring(0, 2) : String(list.price)}</h1>
                                        <p className='text-sm font-semibold'>Shop Now</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductTwoSlider
