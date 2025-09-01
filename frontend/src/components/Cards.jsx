import React from 'react'

const Cards = ({item}) => {
    return (
        <>
            <div className='mt-4  p-3 flex flex-wrap gap-6 '>
                <div className="card  w-96 shadow-2xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline  hover:bg-pink-500 hover:text-white px-2 py-3"> ₹ {item.price}</div>
                            <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-2 py-3">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards

