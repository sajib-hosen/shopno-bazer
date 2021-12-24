import React from 'react';

const ElectricalGadgets = () => {
    const background = {
        backgroundImage: 'url(https://i.imgur.com/EbMZ1ET.jpeg)', 
        backgroundAttachment: 'fixed', 
        backgroundPosition:'bottom', 
        backgroundRepeat:'no-repeat', 
        backgroundSize:'cover',
    }
    return (
       <div>
            <div style={background} className='text-white' >
                <div className='p-20 bg-black bg-opacity-60'>
                    <h2 className='text-xl' >Let's get some advance technology</h2><br />
                    <button className='transition ease-in-out delay-300 bg-indigo-800 hover:shadow-2xl hover:bg-fuchsia-600 px-5 my-2 rounded-full'>See More</button>
                </div>
            </div>
            <div>
                <p>products</p>
            </div>
       </div>
    );
};

export default ElectricalGadgets;