import React from 'react';

const HomeBanner = () => {
    const background = {
        backgroundImage: 'url(https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article5966.jpg)', 
        backgroundAttachment: 'fixed', 
        backgroundPosition:'center', 
        backgroundRepeat:'no-repeat', 
        backgroundSize:'cover'
    }
    return (
        <div style={background} className='text-white'>
            <div className='p-40 bg-black bg-opacity-60' style={{fontFamily: 'Poppins'}} >
                <h2 className='text-xl'>Let's search what you want</h2>
                <input type="search" name="search" id="search" placeholder='Search Here' className='text-center border-b-2 bg-indigo-900 bg-opacity-10' /><br/>
                <button className='transition ease delay-300 hover:shadow-2xl hover:bg-fuchsia-600 bg-indigo-800 px-5 my-2 rounded-full'>Search</button>
            </div>
        </div>
    );
};

export default HomeBanner;