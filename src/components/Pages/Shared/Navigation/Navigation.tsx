import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className='fixed flex justify-between items-center w-full px-8 bg-indigo-900 text-white p-2'>
                <h1 style={{fontFamily: 'Poppins'}} className='text-3xl font-bold'>Shopno Ba<span className='text-yellow-500'>zar</span></h1>
                <div style={{fontFamily: 'Poppins'}} >
                    <ul className='flex'>
                        <li className='mx-2'> <Link to='/home'>Home</Link> </li>
                        <li className='mx-2'> <Link to='/myCart'>My Cart</Link> </li>
                        <li className='mx-2'> <Link to='/addProduct'>Add Product</Link> </li>
                        <li className='mx-2'> <Link to='/login'>Login</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;

// font-family: 'M PLUS 1 Code', sans-serif;
// font-family: 'Poppins', sans-serif;