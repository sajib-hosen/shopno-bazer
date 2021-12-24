import React from 'react';

const ShoppingProducts = () => {
    const background = {
        backgroundImage: 'url(http://www.archvistabd.com/images/project/aarong/Aarong-Basundharacity-archvista-maruf-raihan-30%20copy.jpg)', 
        backgroundAttachment: 'fixed', 
        backgroundPosition:'bottom', 
        backgroundRepeat:'no-repeat', 
        backgroundSize:'cover',
    }
    return (
       <div>
            <div style={background} className='text-white' >
                <div className='p-20 bg-black bg-opacity-60'>
                    <h2 className='text-xl' >Let's explore the beautiful market</h2><br />
                    <button className='transition ease-in-out delay-300 bg-indigo-800 hover:shadow-2xl hover:bg-fuchsia-600 px-5 my-2 rounded-full'>See More</button>
                </div>
            </div>
            <div>
                <p>products</p>
            </div>
       </div>
    );
};

export default ShoppingProducts;

// Convenience products
// The market is so big, let's get around
// https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2018_42/2606816/181016-supermarket-aisle-se-350p.jpg