import React from 'react';

const ConvenienceProducts = () => {
    const background = {
        backgroundImage: 'url(https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2018_42/2606816/181016-supermarket-aisle-se-350p.jpg)', 
        backgroundAttachment: 'fixed', 
        backgroundPosition:'bottom', 
        backgroundRepeat:'no-repeat', 
        backgroundSize:'cover',
    }
    return (
        <div>
            <div style={background} className='text-white' >
            <div className='p-20 bg-black bg-opacity-60'>
                <h2 className='text-xl' >The market is so big, let's get around</h2><br />
                <button className='transition ease delay-300 bg-indigo-800 hover:shadow-2xl hover:bg-fuchsia-600 px-5 my-2 rounded-full'>See More</button>
            </div>
        </div>
        <div>
            <p>products</p>
        </div>
        </div>
    );
};

export default ConvenienceProducts;