import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import ConvenienceProducts from './ConvenienceProducts/ConvenienceProducts';
import ShoppingProducts from './ShoppingProducts/ShoppingProducts';
import ElectricalGadgets from './ElectricalGadgets/ElectricalGadgets';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <h1 className='text-3xl font-bold p-5'>Convenience <span className='text-yellow-700'>pro</span>ducts</h1>
            <ConvenienceProducts />
            {/* <h1 className='text-3xl font-bold p-5'>Shopping <span className='text-yellow-700'>pro</span>ducts</h1>
            <ShoppingProducts />
            <h1 className='text-3xl font-bold p-5'>Electrical <span className='text-yellow-700'>gad</span>gets</h1>
            <ElectricalGadgets /> */}
        </div>
    );
};

export default Home;