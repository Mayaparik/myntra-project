import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearch } from '../context/SearchContext';

function Category() {

    const [women, setWomen] = useState([]);
    const [womenBag, setWomenBag] = useState([]);
    const [womenWatch, setWomenWatch] = useState([]);
    const [mobiles, setMobiles] = useState([]);
    const [mens, setMens] = useState([]);
    const [mensWatch, setMensWatch] = useState([])
    const [womenShoes, setWomenShoes] = useState([])
    const [sunglass, setSunglass] = useState([])
    const [beauty, setBeauty] = useState([])
    const [skincare, setSkincare] = useState([])

    const { searchTerm } = useSearch()



    useEffect(() => {


        fetch('https://dummyjson.com/products/category/tops')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setWomen(data.products);
            })

        fetch('https://dummyjson.com/products/category/smartphones')
            .then(res => res.json())
            .then(data => setMobiles(data.products));

        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // setMobiles(data.products);
            })

        fetch('https://dummyjson.com/products/category/mens-shirts')
            .then(res => res.json())
            .then(data => setMens(data.products));

        fetch('https://dummyjson.com/products/category/mens-watches')
            .then(res => res.json())
            .then(data => setMensWatch(data.products));

        fetch('https://dummyjson.com/products/category/womens-bags')
            .then(res => res.json())
            .then(data => setWomenBag(data.products));

        fetch('https://dummyjson.com/products/category/beauty')
            .then(res => res.json())
            .then(data => setBeauty(data.products));

        fetch('https://dummyjson.com/products/category/womens-watches')
            .then(res => res.json())
            .then(data => setWomenWatch(data.products));

        fetch('https://dummyjson.com/products/category/womens-shoes')
            .then(res => res.json())
            .then(data => setWomenShoes(data.products));

        fetch('https://dummyjson.com/products/category/sunglasses')
            .then(res => res.json())
            .then(data => setSunglass(data.products));

        fetch('https://dummyjson.com/products/category/skin-care')
            .then(res => res.json())
            .then(data => setSkincare(data.products));


    }, []);

    const filterBySearch = (products, term) => {
        // if (term) return products;
        return products.filter((product) =>
            product.title.toLowerCase().includes(term.toLowerCase()) || product.tags[0]?.toLowerCase().includes(term.toLowerCase())
        )
    }


    const renderProducts = (products, title) => {

        const filtered = filterBySearch(products, searchTerm)

        if (filtered.length === 0) return null

        return (
            <>
                < h2 className="text-xl font-bold mb-3" > {title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 space-y-6">
                    {filterBySearch(products, searchTerm).map((item) => (
                        <div key={item.id} className="hover:bg-white hover:shadow-md  ">
                            <Link to={`/product-dummy/${item.id}`}>
                                <img src={item.thumbnail || item.images?.[0]} className=" w-full object-cover" />
                                <div className='px-3 py-2 space-y-1'>
                                    <p className='font-bold'>{item.tags[1]}</p>
                                    <p className="text-sm text-gray-600">{item.title}</p>
                                    <p className='font-bold text-sm'>${item.price}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                    }
                </div>
            </>
        )
    }


    return (
        <div className="px-5 md:px-12 space-y-6 pt-20">
            <section>
                {renderProducts(women, "Women Dresses")}
            </section>

            <section>
                {renderProducts(mobiles, "Mobiles")}
            </section>

            <section>
                {renderProducts(womenShoes, "Women shoes")}
            </section>

            <section>
                {renderProducts(mensWatch, "Mens watch")}
            </section>

            <section>
                {renderProducts(womenBag, "Women bag")}
            </section>

            <section>
                {renderProducts(beauty, "Beauty products")}
            </section>

            <section>
                {renderProducts(skincare, "Skin-care")}
            </section>

            <section>
                {renderProducts(womenWatch, "Women watch")}
            </section>

            <section>
                {renderProducts(sunglass, "Sunglasses")}
            </section>

            <section>
                {renderProducts(mens, "Mens T-shirts")}
            </section>
        </div>
    )
}

export default Category
